import Card from "@/components/ui/card";
import { getI18n } from "@/locales/server";
import { getR2ImageUrl } from "@/utils/constants";

const ccsdImage = {
    src: getR2ImageUrl("logos/ccsd.jpg"),
    alt: "CCSD",
    width: 70,
    height: 20,
};
const rguImage = {
    src: getR2ImageUrl("logos/RGU.jpg"),
    alt: "RGU",
    width: 100,
    height: 10,
};

const lyonImage = {
    src: getR2ImageUrl("logos/but.png"),
    alt: "Lyon",
    width: 100,
    height: 10,
};

const cpeImage = {
    src: getR2ImageUrl("logos/cpe.svg"),
    alt: "CPE Lyon",
    width: 100,
    height: 43,
};

export default async function Career() {
    const t = await getI18n();

    return (
        <>
            <section className="mb-10">
                <h2 className="font-bold text-2xl mb-3">{t("career.title")}</h2>
                <Card
                    label={t("career.ccsd.label")}
                    link="https://www.ccsd.cnrs.fr/"
                    title={t("career.ccsd.title")}
                    image={ccsdImage}
                    organisation={t("career.ccsd.organisation")}
                    date={t("career.ccsd.date")}
                    localisation={t("career.ccsd.location")}
                    description={t("career.ccsd.description")}
                />
                <Card
                    label={t("career.rgu.label")}
                    link="https://www.rgu.ac.uk/"
                    title={t("career.rgu.title")}
                    image={rguImage}
                    organisation={t("career.rgu.organisation")}
                    date={t("career.rgu.date")}
                    localisation={t("career.rgu.location")}
                    description={t("career.rgu.description")}
                />
            </section>
            <section className="mb-10">
                <h2 className="font-bold text-2xl mb-3">{t("studies.title")}</h2>
                <Card
                    label={t("studies.cpe.label")}
                    link="https://www.cpe.fr/"
                    title={t("studies.cpe.title")}
                    image={cpeImage}
                    organisation={t("studies.cpe.organisation")}
                    date={t("studies.cpe.date")}
                    localisation={t("studies.cpe.location")}
                    description={null}
                />
                <Card
                    label={t("studies.lyon.label")}
                    link="https://www.univ-lyon1.fr/"
                    title={t("studies.lyon.title")}
                    image={lyonImage}
                    organisation={t("studies.lyon.organisation")}
                    date={t("studies.lyon.date")}
                    localisation={t("studies.lyon.location")}
                    description={null}
                />
            </section>
        </>
    );
}
