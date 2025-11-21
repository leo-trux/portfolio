import {getI18n} from "@/locales/server";
import {FaCircleArrowLeft} from "react-icons/fa6";
import Link from "next/link";
import Footer from "@/components/layout/footer";
import Button from "@/components/ui/button";
import React from "react";
import Team from "@/components/ui/team";

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
                    <h1 className="text-7xl bold font-bold">Gestion BTP</h1>
                </div>
                <p className="mt-10 text-[var(--gray)]">{t("btp.intro")}</p>
                <div className="flex flex-col mt-10">
                    <h2 className="text-3xl bold font-bold mb-3">{t('btp.s1.title')}</h2>
                    <p className="mb-5 text-[var(--gray)]">{t('btp.s1.p1')}</p>
                </div>
                <div className="flex flex-col mt-10">
                    <h2 className="text-3xl bold font-bold mb-3">{t('btp.s2.title')}</h2>
                    <p className="mb-5 text-[var(--gray)]">{t('btp.s2.p1')}</p>
                    <p className="mb-5 text-[var(--gray)]">{t('btp.s2.p2')}</p>
                </div>
                <div className="flex flex-col mt-10">
                    <h2 className="text-3xl bold font-bold mb-5">{t('leitlearn.team')}
                    </h2>
                    <Team isAdrian={true}/>
                </div>
                <div className="flex flex-col mt-10">
                    <h2 className="text-3xl bold font-bold">{t('docs_title')}</h2>
                    <div className="flex flex-row w-full mt-3">
                        <Button label="Github" icon="github" link="https://github.com/leo-trux/BTP"/>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    );
}
