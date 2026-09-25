"use client";
import Script from "next/script";
import {useEffect, useRef, useState} from "react";

declare global {
    interface Window {
        turnstile?: {
            render: (container: HTMLElement, options: Record<string, unknown>) => string;
            reset: (widgetId: string) => void;
            remove: (widgetId: string) => void;
        };
    }
}

interface TurnstileProps {
    onToken: (token: string | null) => void;
    resetKey: number;
}

export default function Turnstile({onToken, resetKey}: TurnstileProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const widgetIdRef = useRef<string | null>(null);
    const [isScriptLoaded, setIsScriptLoaded] = useState(false);

    useEffect(() => {
        const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
        if (!isScriptLoaded || !containerRef.current || !window.turnstile || !siteKey) return;

        widgetIdRef.current = window.turnstile.render(containerRef.current, {
            sitekey: siteKey,
            appearance: "interaction-only",
            callback: (token: string) => onToken(token),
            "expired-callback": () => onToken(null),
            "error-callback": () => onToken(null),
        });

        return () => {
            if (widgetIdRef.current) window.turnstile?.remove(widgetIdRef.current);
            widgetIdRef.current = null;
        };
    }, [isScriptLoaded, onToken]);

    // Tokens are single-use: get a fresh one after each submission
    useEffect(() => {
        if (resetKey === 0 || !widgetIdRef.current) return;
        onToken(null);
        window.turnstile?.reset(widgetIdRef.current);
    }, [resetKey, onToken]);

    return (
        <>
            <Script
                src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
                strategy="afterInteractive"
                onReady={() => setIsScriptLoaded(true)}
            />
            <div ref={containerRef} className="mt-4 flex justify-center empty:hidden"/>
        </>
    );
}
