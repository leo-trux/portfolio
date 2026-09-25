import {NextRequest} from "next/server";
import {getCloudflareContext} from "@opennextjs/cloudflare";
import {Resend} from "resend";
import {contactRequestSchema} from "@/utils/models/ContactFormData";

const resend = new Resend(process.env.RESEND_API_KEY);

const RATE_LIMIT_TTL_SECONDS = 3600;
const ALLOWED_ORIGINS = new Set([
    "https://leotrux.fr",
    "https://www.leotrux.fr",
]);

function isAllowedOrigin(request: NextRequest): boolean {
    const origin = request.headers.get("origin");
    if (!origin) return false;
    if (ALLOWED_ORIGINS.has(origin)) return true;
    return process.env.NODE_ENV !== "production" && new URL(origin).hostname === "localhost";
}

async function verifyTurnstile(token: string, ip: string): Promise<boolean> {
    const secret = process.env.TURNSTILE_SECRET_KEY;
    if (!secret) {
        console.error("Missing TURNSTILE_SECRET_KEY env variable");
        return false;
    }

    const body = new FormData();
    body.append("secret", secret);
    body.append("response", token);
    body.append("remoteip", ip);

    try {
        const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
            method: "POST",
            body,
        });
        const result = await response.json() as { success: boolean };
        return result.success;
    } catch (error) {
        console.error("Turnstile verification failed:", error);
        return false;
    }
}

export async function POST(request: NextRequest) {
    if (!isAllowedOrigin(request)) {
        return Response.json("Forbidden", {status: 403});
    }

    let rawData: unknown;
    try {
        rawData = await request.json();
    } catch {
        return Response.json("Invalid JSON body", {status: 400});
    }

    const parsedForm = contactRequestSchema.safeParse(rawData);
    if (!parsedForm.success) {
        return Response.json("Invalid form data", {status: 400});
    }
    const {turnstileToken, website, ...dataForm} = parsedForm.data;

    // Honeypot filled: pretend success so bots don't retry
    if (website) {
        return Response.json({id: null});
    }

    // Set by Cloudflare, cannot be spoofed by the client (unlike x-forwarded-for)
    const ip: string = request.headers.get("cf-connecting-ip") ?? "127.0.0.1";
    const {env} = getCloudflareContext();

    const {success: withinBurstLimit} = await env.CONTACT_RATE_LIMITER.limit({key: ip});
    if (!withinBurstLimit) {
        return Response.json("Too many requests", {status: 429});
    }

    const rateLimitKey = `contact:${ip}`;
    if (await env.CONTACT_RATE_LIMIT_KV.get(rateLimitKey)) {
        return Response.json("Please send your next message in one hour.", {status: 429});
    }

    if (!await verifyTurnstile(turnstileToken, ip)) {
        return Response.json("Captcha verification failed", {status: 403});
    }

    const recipientEmail: string | undefined = process.env.MY_EMAIL_ADDRESS;
    if (!recipientEmail) {
        console.error("Missing MY_EMAIL_ADDRESS env variable");
        return Response.json("Server misconfiguration", {status: 500});
    }

    // Reserve the slot before sending so concurrent requests can't all get through
    await env.CONTACT_RATE_LIMIT_KV.put(rateLimitKey, Date.now().toString(), {
        expirationTtl: RATE_LIMIT_TTL_SECONDS,
    });

    try {
        const safeName = dataForm.name.replace(/[\r\n]+/g, " ");
        const {data, error} = await resend.emails.send({
            from: 'Portfolio Léo Trux <contact@leotrux.fr>',
            to: recipientEmail,
            replyTo: dataForm.email,
            subject: safeName + ' wants to send you a message !',
            text: `From: ${safeName} <${dataForm.email}>\nIP: ${ip}\n\n${dataForm.message}`,
        });

        if (error) {
            console.error("Resend error:", error);
            await env.CONTACT_RATE_LIMIT_KV.delete(rateLimitKey);
            return Response.json("Failed to send the message", {status: 500});
        }

        return Response.json(data);
    } catch (error) {
        console.error("Unexpected error while sending contact email:", error);
        await env.CONTACT_RATE_LIMIT_KV.delete(rateLimitKey);
        return Response.json("Failed to send the message", {status: 500});
    }
}
