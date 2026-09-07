import {z} from "zod";

export const contactFormSchema = z.object({
    name: z.string().min(3),
    email: z.email(),
    message: z.string().min(1),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
