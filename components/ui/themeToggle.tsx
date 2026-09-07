"use client";
import {useEffect, useState} from "react";
import {FaMoon, FaSun} from "react-icons/fa6";

export default function ThemeToggle() {
    const [theme, setTheme] = useState<"light" | "dark" | null>(null);

    useEffect(() => {
        // Reads the theme applied by the no-flash inline script (an external system outside React's render).
        const current = document.documentElement.getAttribute("data-theme");
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setTheme(current === "dark" ? "dark" : "light");
    }, []);

    const toggleTheme = () => {
        const next = theme === "dark" ? "light" : "dark";
        setTheme(next);
        document.documentElement.setAttribute("data-theme", next);
        localStorage.setItem("theme", next);
    };

    return (
        <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="active:scale-90 flex items-center justify-center w-7 h-7 rounded-[.5rem] transition-colors duration-300 ease-in-out cursor-pointer text-[var(--gray)] hover:text-[var(--main-color)] hover:bg-[var(--form-bg)]"
        >
            {theme && (theme === "dark" ? <FaSun fontSize={15}/> : <FaMoon fontSize={15}/>)}
        </button>
    );
}
