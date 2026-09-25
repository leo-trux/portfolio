"use client";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import Input from "@/components/ui/form/input";
import Textarea from "@/components/ui/form/textarea";
import Button from "@/components/ui/form/button";
import {useScopedI18n} from "@/locales/client";
import React, {useCallback, useState} from "react";
import {AnimatePresence} from "framer-motion";
import Toast, {ToastType} from "@/components/ui/toast";
import Turnstile from "@/components/ui/form/turnstile";
import {CONTACT_LIMITS} from "@/utils/models/ContactFormData";

export default function Contact() {
    const t = useScopedI18n('form');
    const tt = useScopedI18n('toast');
    const [isLoading, setIsLoading] = useState(false);
    const [toast, setToast] = useState<{ id: number; type: ToastType } | null>(null);
    const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
    const [turnstileResetKey, setTurnstileResetKey] = useState(0);
    const [honeypot, setHoneypot] = useState("");

    const formSchema = z.object({
        name: z.string().trim().min(CONTACT_LIMITS.nameMin, {
            message: t("message.name"),
        }).max(CONTACT_LIMITS.nameMax, {
            message: t("message.nameTooLong"),
        }),
        email: z.email({
            message: t("message.email"),
        }).max(CONTACT_LIMITS.emailMax, {
            message: t("message.email"),
        }),
        message: z.string().trim().min(1, {
            message: t("message.message"),
        }).max(CONTACT_LIMITS.messageMax, {
            message: t("message.messageTooLong"),
        }),
    });

    type FormSchema = z.infer<typeof formSchema>;

    const {
        register,
        handleSubmit,
        setValue,
        formState: {errors},
    } = useForm<FormSchema>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: ""
        }
    });

    const showToast = (type: ToastType) => {
        setToast((prev) => ({id: (prev?.id ?? 0) + 1, type}));
    };

    const closeToast = useCallback(() => setToast(null), []);

    const onSubmit = async (data: FormSchema) => {
        if (!turnstileToken) {
            showToast("server");
            return;
        }
        setIsLoading(true);

        try {
            const response = await fetch("/api/resend", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({...data, turnstileToken, website: honeypot}),
            });

            if (response.ok) {
                showToast("success");
            } else if (response.status === 429) {
                // Rate limit is checked before Turnstile, so the token is still unused
                showToast("rateLimit");
            } else {
                showToast("server");
                setTurnstileResetKey((key) => key + 1);
            }
        } catch (error) {
            if (error instanceof Error) {
                console.error(error);
            }
            showToast("server");
            setTurnstileResetKey((key) => key + 1);
        } finally {
            setIsLoading(false);
        }
    };

    const resetSpecificField = (field: "name" | "message" | "email") => {
        setValue(field, "");
    };

    const toastCopy: Record<ToastType, { title: string; message: string }> = {
        success: {title: tt('success.title'), message: tt('success.message')},
        rateLimit: {title: tt('error.title'), message: tt('error.message')},
        server: {title: tt('serverError.title'), message: tt('serverError.message')},
    };

    return (
        <>
            <form className="relative" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex w-full gap-2">
                    <div className="flex flex-col w-1/2 mb-2">
                        <Input id="name"
                               type="text"
                               {...register("name")}
                               label={t("fields.name")}
                               isError={!!errors.name}
                               resetSpecificField={resetSpecificField}
                        />
                        <span
                            className={` ${errors.name ? "opacity-100" : "opacity-0"} text-[var(--form-error)] ml-1 text-xs mb-1 mt-1 h-2`}>{errors.name?.message}</span>
                    </div>
                    <div className="flex flex-col w-1/2">
                        <Input
                            id="email"
                            type="text"
                            {...register("email")}
                            label={t("fields.email")}
                            isError={!!errors.email}
                            resetSpecificField={resetSpecificField}
                        />
                        <span
                            className={` ${errors.email ? "opacity-100" : "opacity-0"} text-[var(--form-error)] ml-1 text-xs mb-1 mt-1 h-2`}>{errors.email?.message}</span>
                    </div>
                </div>
                <Textarea
                    id="message"
                    {...register("message")}
                    label={t("fields.message")}
                    isError={!!errors.message}
                    resetSpecificField={resetSpecificField}
                />
                <span
                    className={` ${errors.message ? "opacity-100" : "opacity-0"} text-[var(--form-error)] ml-1 text-xs mb-1 absolute mt-1 h-2`}>{errors.message?.message}</span>
                <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    className="absolute -left-[9999px] h-0 w-0 opacity-0"
                />
                <Turnstile onToken={setTurnstileToken} resetKey={turnstileResetKey}/>
                <Button id="button" name="button" label={t("fields.submit")} isLoading={isLoading}/>
            </form>
            <AnimatePresence>
                {toast && (
                    <Toast
                        key={toast.id}
                        type={toast.type}
                        title={toastCopy[toast.type].title}
                        message={toastCopy[toast.type].message}
                        onClose={closeToast}
                    />
                )}
            </AnimatePresence>
        </>
    );
}
