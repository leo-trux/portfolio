import {getI18n, setStaticParamsLocale} from "@/locales/server";
import {FaCircleArrowLeft} from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/layout/footer";
import React from "react";
import Team from "@/components/ui/team";
import type {Metadata} from "next";

type PageProps = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({params}: PageProps): Promise<Metadata> {
    const {locale} = await params;
    setStaticParamsLocale(locale);
    const t = await getI18n();

    return {
        title: "Leitlearn - Léo TRUX",
        description: t("projects.leitlearn.description"),
    };
}

export default async function Page({params}: PageProps) {
    const {locale} = await params;
    setStaticParamsLocale(locale);
    const t = await getI18n();

    return (
        <>
            <div className="max-w-150 z-2 flex flex-col justify-center">
                <Link href="/" className="flex flex-row items-center mt-20 mb-8 group cursor-pointer">
                    <FaCircleArrowLeft
                        className="group-hover:text-[var(--main-color)] transition duration-300 ease-in-out mr-3"
                        fontSize={20}/>
                    <span
                        className="group-hover:text-[var(--main-color)] transition duration-300 ease-in-out text-lg text-[var(--gray)] h-[24px]">{t('back_btn')}</span>
                </Link>
                <div className="flex flex-col text-7xl bold font-bold">
                    <h1 className="text-7xl bold font-bold">Leitlearn</h1>
                </div>
                <p className="mt-10 text-[var(--gray)]">
                    {t('leitlearn.intro')}
                </p>
                <Image src="/images/leitlearnblue.png" alt="leitlearn text" width={1000} height={400}
                       className="w-full mt-10 rounded-[0.5rem]"/>
                <div className="flex flex-col mt-10">
                    <h2 className="text-3xl bold font-bold mb-3">{t('leitlearn.s1.title')}</h2>
                    <p className="mb-5 text-[var(--gray)]">
                        {t('leitlearn.s1.p1')}
                    </p>
                </div>
                <div className="flex flex-col mt-10">
                    <h2 className="text-3xl bold font-bold mb-3">{t('leitlearn.s2.title')}</h2>
                    <p className="mb-5 text-[var(--gray)]">
                        {t('leitlearn.s2.p1')}
                    </p>
                    <p className="mb-5 text-[var(--gray)]">
                        {t('leitlearn.s2.p2')}
                    </p>
                </div>
                <div className="flex flex-col mt-10">
                    <h2 className="text-3xl bold font-bold mb-5">{t('leitlearn.team')}
                    </h2>
                    <Team isAdrian={false}/>
                </div>
                <Footer/>
            </div>
        </>
    );
}
