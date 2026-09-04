import {NextRequest} from "next/server";
import {Resend} from "resend";
import {hasIp, storeIp} from "@/utils/ipCache";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    const email: string | undefined = process.env.MY_EMAIL_ADDRESS;
    const dataForm = await request.json();

    const ip: string = (request.headers.get('x-forwarded-for') ?? '127.0.0.1').split(',')[0]
    if (hasIp(ip)) {
        return Response.json("Please send your next message in one hour.", {status: 429});
    }

    if (!email) {
        return Response.json("Error with .env email", {status: 500});
    }

    if (!dataForm.email || !dataForm.name || !dataForm.message) {
        return Response.json("All fields are required", {status: 400});
    }

    try {
        const {data, error} = await resend.emails.send({
            from: 'PORTFOLIO <onboarding@resend.dev>',
            to: email,
            subject: dataForm.name + ' wants to send you a message !',
            react: dataForm.message,
        });

        if (error) {
            return Response.json({error}, {status: 500});
        }

        storeIp(ip)
        return Response.json(data);
    } catch (error) {
        return Response.json({error}, {status: 500});
    }
}

