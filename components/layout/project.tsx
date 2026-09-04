import Card from "@/components/ui/card";
import { getI18n } from "@/locales/server";
import { getR2ImageUrl } from "@/utils/constants";

const arguImage = {
    src: getR2ImageUrl("logos/arguai.png"),
    alt: "Argu Ai",
    width: 50,
    height: 20,
};

const leitlearnImage = {
    src: getR2ImageUrl("logos/leitlearn.webp"),
    alt: "leitlearn",
    width: 30,
    height: 30,
}

export default async function Project() {
    const t = await getI18n();

    return (
        <section className="mb-10">
            <h2 className="font-bold text-2xl mb-3">{t("projects.title")}</h2>
            <div className="flex flex-col gap-2">
                <Card
                    label="project"
                    link={t("projects.leitlearn.link")}
                    title={t("projects.leitlearn.title")}
                    image={leitlearnImage}
                    organisation={null}
                    date={t("projects.leitlearn.date")}
                    localisation={null}
                    description={t("projects.leitlearn.description")}
                />
                <Card
                    label="project"
                    link={t("projects.argu_ai.link")}
                    title={t("projects.argu_ai.title")}
                    image={arguImage}
                    organisation={null}
                    date={t("projects.argu_ai.date")}
                    localisation={null}
                    description={t("projects.argu_ai.description")}
                />

            </div>
        </section>
    );
}
