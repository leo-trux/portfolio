import { getI18n } from "@/locales/server";
import { FaCircleArrowLeft } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/layout/footer";
import Button from "@/components/ui/button";
import React from "react";

export default async function Page() {
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
                    <h1 className="text-7xl bold font-bold">Argu Ai</h1>
                </div>
                <p className="mt-10 text-[var(--gray)]">
                    {t('argu_ai.intro')}
                </p>
                <Image src="/images/AR_white.png" alt="arguailogo" width={1000} height={400}
                       className="bg-[var(--foreground)] w-full mt-10 p-10 rounded-[0.5rem]"/>
                <div className="flex flex-col mt-10">
                    <h2 className="text-3xl bold font-bold mb-3">{t('argu_ai.s1.title')}</h2>
                    <p className="mb-5 text-[var(--gray)]">{t('argu_ai.s1.p1')}</p>
                    <p className="mb-5 text-[var(--gray)]">{t('argu_ai.s1.p2')}</p>
                </div>
                <div className="flex flex-col mt-10">
                    <h2 className="text-3xl bold font-bold mb-3">{t('argu_ai.s2.title')}</h2>
                    <p className="mb-5 text-[var(--gray)]">{t('argu_ai.s2.p1')}</p>
                </div>
                <div className="flex flex-col mt-10">
                    <h2 className="text-3xl bold font-bold mb-3">{t('argu_ai.s3.title')}</h2>
                    <p className="mb-5 text-[var(--gray)]">{t('argu_ai.s3.p1')}</p>
                    <p className="mb-5 text-[var(--gray)]">{t('argu_ai.s3.p2')}</p>
                    <p className="mb-5 text-[var(--gray)]">{t('argu_ai.s3.p3')}</p>
                </div>
                <div className="flex flex-col mt-10">
                    <h2 className="text-3xl bold font-bold">{t('docs_title')}</h2>
                    <div className="flex flex-row w-full mt-10">
                        <Button label="Github" icon="github" link="https://github.com/leo-trux/arguAi"/>
                        <Button label={t('argu_ai.intership_report')} icon="cv" link="/docs/rapport_trux_final.pdf"/>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    );
}
