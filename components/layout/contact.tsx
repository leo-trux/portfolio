"use client";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import Input from "@/components/ui/form/input";
import Textarea from "@/components/ui/form/textarea";
import Button from "@/components/ui/form/button";
import {useScopedI18n} from "@/locales/client";
import React, {useState} from "react";
import Modal from "@/components/ui/modal";

const successImage = {
    src: "/images/email.webp",
    alt: "email",
};

const errorImage = {
    src: "/images/clock.webp",
    alt: "clock",
}

export default function Contact() {
    const t = useScopedI18n('form');
    const tm = useScopedI18n('modal');
    const [isLoading, setIsLoading] = useState(false);
    const [errorType, setErrorType] = useState<"rateLimit" | "server" | null>(null);
    const [success, setSuccess] = useState(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);


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

    const onSubmit = async (data: FormSchema) => {
        setIsLoading(true);
        setErrorType(null);

        try {
            const response = await fetch("/api/resend", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setSuccess(true);
            } else {
                setErrorType(response.status === 429 ? "rateLimit" : "server");
            }
            setIsOpen(true);
        } catch (error) {
            if (error instanceof Error) {
                console.error(error);
            }
            setErrorType("server");
            setIsOpen(true);
        } finally {
            setIsLoading(false);
        }
    };

    const resetSpecificField = (field: "name" | "message" | "email") => {
        setValue(field, "");
    };

    const closeModal = () => {
        setErrorType(null);
        setSuccess(false);
        setIsOpen(false);
    }

    return (
        <>
            <form className="relative" onSubmit={handleSubmit(onSubmit)}>
                {errorType === "rateLimit" && (<Modal
                    image={errorImage}
                    title={tm('title')}
                    subTitle={tm('error.subTitle')}
                    message={tm('error.message')}
                    buttonLabel={tm('error.button')}
                    isOpen={isOpen}
                    closeModal={closeModal}
                />)}
                {errorType === "server" && (<Modal
                    image={errorImage}
                    title={tm('title')}
                    subTitle={tm('serverError.subTitle')}
                    message={tm('serverError.message')}
                    buttonLabel={tm('serverError.button')}
                    isOpen={isOpen}
                    closeModal={closeModal}
                />)}
                {success && (<Modal
                    image={successImage}
                    title={tm('title')}
                    subTitle={tm('success.subTitle')}
                    message={tm('success.message')}
                    buttonLabel={tm('success.button')}
                    isOpen={isOpen}
                    closeModal={closeModal}
                />)}
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
        </>
    );
}
