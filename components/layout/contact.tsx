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

export default function Contact() {
    const t = useScopedI18n('form');
    const tt = useScopedI18n('toast');
    const [isLoading, setIsLoading] = useState(false);
    const [toast, setToast] = useState<{ id: number; type: ToastType } | null>(null);

    const formSchema = z.object({
        name: z.string().min(3, {
            message: t("message.name"),
        }),
        email: z.string().email({
            message: t("message.email"),
        }),
        message: z.string().min(1, {
            message: t("message.message"),
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
        setIsLoading(true);

        try {
            const response = await fetch("/api/resend", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data),
            });

            if (response.ok) {
                showToast("success");
            } else {
                showToast(response.status === 429 ? "rateLimit" : "server");
            }
        } catch (error) {
            if (error instanceof Error) {
                console.error(error);
            }
            showToast("server");
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
