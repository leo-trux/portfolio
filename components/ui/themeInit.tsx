"use client";
import {useLayoutEffect} from "react";

export default function ThemeInit() {
    // Runs synchronously before the browser paints, so there is no flash of the wrong theme.
    // A raw <script> tag would achieve the same thing but React warns whenever it has to
    // reconcile one during a client-side re-render (e.g. this layout re-rendering on locale change).
    useLayoutEffect(() => {
        try {
            const stored = localStorage.getItem("theme");
            let theme: "light" | "dark";
            if (stored === "light" || stored === "dark") {
                theme = stored;
            } else {
                const hour = new Date().getHours();
                theme = (hour >= 19 || hour < 7) ? "dark" : "light";
            }
            document.documentElement.setAttribute("data-theme", theme);
        } catch {
            // localStorage unavailable (e.g. privacy mode) — fall back to the default light theme.
        }
    }, []);

    return null;
}
