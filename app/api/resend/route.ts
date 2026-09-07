import {NextRequest} from "next/server";
import {Resend} from "resend";
import {hasIp, storeIp} from "@/utils/ipCache";
import {contactFormSchema} from "@/utils/models/ContactFormData";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    const recipientEmail: string | undefined = process.env.MY_EMAIL_ADDRESS;

    let rawData: unknown;
    try {
        rawData = await request.json();
    } catch {
        return Response.json("Invalid JSON body", {status: 400});
    }

    const parsedForm = contactFormSchema.safeParse(rawData);
    if (!parsedForm.success) {
        return Response.json("Invalid form data", {status: 400});
    }
    const dataForm = parsedForm.data;

    const ip: string = (request.headers.get('x-forwarded-for') ?? '127.0.0.1').split(',')[0]
    if (hasIp(ip)) {
        return Response.json("Please send your next message in one hour.", {status: 429});
    }

    if (!recipientEmail) {
        console.error("Missing MY_EMAIL_ADDRESS env variable");
        return Response.json("Server misconfiguration", {status: 500});
    }

    try {
        const {data, error} = await resend.emails.send({
            from: 'Portfolio Léo Trux <contact@leotrux.fr>',
            to: recipientEmail,
            replyTo: dataForm.email,
            subject: dataForm.name + ' wants to send you a message !',
            text: `From: ${dataForm.name} <${dataForm.email}>\n\n${dataForm.message}`,
        });

        if (error) {
            console.error("Resend error:", error);
            return Response.json("Failed to send the message", {status: 500});
        }

        storeIp(ip)
        return Response.json(data);
    } catch (error) {
        console.error("Unexpected error while sending contact email:", error);
        return Response.json("Failed to send the message", {status: 500});
    }
}

