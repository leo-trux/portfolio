import SelectLocale from "@/components/ui/selectLocale";
import Button from "@/components/ui/button";
import Career from "@/components/layout/career";
import Project from "@/components/layout/project";
import { getI18n, getCurrentLocale } from "@/locales/server";
import Footer from "@/components/layout/footer";
import React from "react";

export default async function Home() {
    const t = await getI18n();
    const locale: "en" | "fr" = await getCurrentLocale();

    return (
        <>
            <SelectLocale/>
            {/*<div className="flex flex-row items-center mt-20 mb-5">*/}
            {/*    <div className="flex relative w-[24px] h-[24px]">*/}
            {/*          <span*/}
            {/*              className="absolute top-1/2 transform -translate-y-1/2 inline-flex w-[12px] h-[12px] animate-ping rounded-full bg-green-400 opacity-75"></span>*/}
            {/*        <span*/}
            {/*            className="relative top-1/2 transform -translate-y-1/2 inline-flex w-[12px] h-[12px] rounded-full bg-green-500"></span>*/}
            {/*    </div>*/}
            {/*    <p className="text-lg text-[var(--gray)] h-[24px]">{t('available_for_hire')}</p>*/}
            {/*</div>*/}
            <div className="flex flex-col text-4xl lg:text-6xl md:text-5xl bold font-bold mt-20">
                <h1>Léo Trux</h1>
                <span className="text-[var(--main-color)]">{t('home.web_developer')}</span>
            </div>
            <div className="flex flex-row w-full mt-8 sm:mt-10">
                <Button label="Github" icon="github" link="https://github.com/leo-trux"/>
                <Button label="Linkedin" icon="linkedin" link="https://www.linkedin.com/in/leo-trux/"/>
                <Button label="CV" icon="cv" link={"/docs/truxleo_cv_" + locale + ".pdf"}/>
            </div>
            <p className="mt-8 sm:mt-10 text-[var(--gray)]">{t('home.intro')}</p>
            <p className="mt-4 text-[var(--gray)]">{t('home.skills')}</p>
            <span className="w-full h-[1px] bg-[var(--border-gray)] mt-8 mb-8"></span>
            <Project/>
            <Career/>
            <Footer/>
        </>
    );
}
