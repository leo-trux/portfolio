"use client";
import {motion} from "framer-motion";
import {IoMdClose} from "react-icons/io";
import {FaCircleCheck, FaCircleExclamation, FaClock} from "react-icons/fa6";
import {JSX, useEffect} from "react";

export type ToastType = "success" | "rateLimit" | "server";

interface ToastProps {
    type: ToastType;
    title: string;
    message: string;
    onClose: () => void;
}

const iconMap: Record<ToastType, JSX.Element> = {
    success: <FaCircleCheck className="text-[var(--main-color)]" fontSize={20}/>,
    rateLimit: <FaClock className="text-[var(--form-error)]" fontSize={20}/>,
    server: <FaCircleExclamation className="text-[var(--form-error)]" fontSize={20}/>,
};

export default function Toast({type, title, message, onClose}: ToastProps) {
    useEffect(() => {
        const timeout = setTimeout(onClose, 6000);
        return () => clearTimeout(timeout);
    }, [onClose]);

    return (
        <motion.div
            initial={{y: 20, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            exit={{y: 20, opacity: 0}}
            transition={{duration: 0.3, ease: "easeOut"}}
            className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 flex w-[calc(100%-2rem)] max-w-100 items-start gap-3 rounded-[.5rem] border border-[var(--border-gray)] bg-[var(--card-bg)] p-4 shadow-lg shadow-[rgb(var(--shadow-color))]/10"
        >
            <span className="mt-0.5 shrink-0">{iconMap[type]}</span>
            <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-[var(--foreground)]">{title}</p>
                <p className="mt-0.5 text-xs text-[var(--gray)]">{message}</p>
            </div>
            <button
                type="button"
                onClick={onClose}
                aria-label="Close notification"
                className="shrink-0 cursor-pointer text-[var(--gray)] transition-colors duration-300 ease-in-out hover:text-[var(--main-color)]"
            >
                <IoMdClose fontSize={18}/>
            </button>
        </motion.div>
    );
}
