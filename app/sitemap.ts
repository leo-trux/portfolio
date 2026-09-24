import type {MetadataRoute} from "next";
import {SITE_URL} from "@/utils/constants";

const locales = ["en", "fr"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
    const languages = Object.fromEntries(
        locales.map((locale) => [locale, `${SITE_URL}/${locale}`])
    );

    return locales.map((locale) => ({
        url: `${SITE_URL}/${locale}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 1,
        alternates: {languages},
    }));
}
