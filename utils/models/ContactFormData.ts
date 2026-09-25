import {z} from "zod";

export const CONTACT_LIMITS = {
    nameMin: 3,
    nameMax: 100,
    emailMax: 254,
    messageMax: 5000,
} as const;

export const contactFormSchema = z.object({
    name: z.string().trim().min(CONTACT_LIMITS.nameMin).max(CONTACT_LIMITS.nameMax),
    email: z.email().max(CONTACT_LIMITS.emailMax),
    message: z.string().trim().min(1).max(CONTACT_LIMITS.messageMax),
});

export const contactRequestSchema = contactFormSchema.extend({
    turnstileToken: z.string().min(1).max(2048),
    // Honeypot: hidden field that humans leave empty
    website: z.string().max(200).optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
