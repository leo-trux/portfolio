import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.scss";
import Scroll from "@/components/ui/scroll";
import ThemeInit from "@/components/ui/themeInit";
import React, {Suspense} from "react";
import {Providers} from "@/app/[locale]/providers";
import Loading from "@/app/[locale]/loading";
import {getStaticParams, setStaticParamsLocale} from "@/locales/server";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://leotrux.fr"),
    title: "Léo TRUX - Portfolio",
    description: "Léo Trux's portfolio, web developer from France.",
};

export function generateStaticParams() {
    return getStaticParams();
}

export default async function RootLayout({children, params}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>
}) {
    const {locale} = await params;
    setStaticParamsLocale(locale);
    return (
        <html lang={locale} suppressHydrationWarning>
        <body className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
        <ThemeInit/>
        <Suspense fallback={<Loading />}>
            <div className="mx-auto px-6 max-w-150 z-2 flex flex-col justify-center">
                <Providers local={locale}>{children}</Providers>
                <Scroll/>
            </div>
        </Suspense>
        </body>
        </html>
    );
}
