"use client";
import {useChangeLocale, useCurrentLocale} from "@/locales/client";
import ThemeToggle from "@/components/ui/themeToggle";
import {motion} from "framer-motion";

const locales = ["fr", "en"] as const;

export default function SelectLocale() {
    const locale = useCurrentLocale();
    const changeLocale = useChangeLocale();

    return (
        <div className="fixed top-4 right-4 sm:top-6 sm:right-6 z-40 flex items-center gap-2 rounded-[.5rem] border border-[var(--border-gray)] bg-[var(--card-bg)] p-1 shadow-sm">
            <div className="relative flex rounded-[.5rem] bg-[var(--form-bg)] p-0.5">
                {locales.map((l) => (
                    <button
                        key={l}
                        onClick={() => changeLocale(l)}
                        className="relative w-9 rounded-[.5rem] py-1 text-xs font-semibold uppercase cursor-pointer"
                    >
                        {locale === l && (
                            <motion.span
                                layoutId="locale-pill"
                                className="absolute inset-0 rounded-[.5rem] bg-[var(--main-color)]"
                                transition={{type: "spring", duration: 0.4, bounce: 0.15}}
                            />
                        )}
                        <span className={`relative transition-colors duration-300 ease-in-out ${locale === l ? "text-white" : "text-[var(--gray)] hover:text-[var(--main-color)]"}`}>
                            {l}
                        </span>
                    </button>
                ))}
            </div>
            <span className="w-px h-5 bg-[var(--border-gray)]"></span>
            <ThemeToggle/>
        </div>
    );
}
