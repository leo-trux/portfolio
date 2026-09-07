import {ImageResponse} from "next/og";
import fr from "@/locales/fr";
import en from "@/locales/en";
import {getStaticParams} from "@/locales/server";

export const alt = "Léo Trux";
export const size = {width: 1200, height: 630};
export const contentType = "image/png";

export function generateStaticParams() {
    return getStaticParams();
}

const content = {fr, en};

export default async function Image({params}: { params: Promise<{ locale: string }> }) {
    const {locale} = await params;
    const t = locale === "fr" ? content.fr : content.en;

    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "100px",
                    background: "#ffffff",
                }}
            >
                <div style={{display: "flex", fontSize: 104, fontWeight: 700, color: "#0f2145"}}>
                    Léo Trux
                </div>
                <div style={{display: "flex", fontSize: 104, fontWeight: 700, color: "#3e31fa"}}>
                    {t.home.web_developer}
                </div>
                <div style={{display: "flex", marginTop: 48, fontSize: 32, color: "#788398"}}>
                    leotrux.fr
                </div>
            </div>
        ),
        {...size}
    );
}
