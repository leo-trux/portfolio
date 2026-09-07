"use client";
import {FaExternalLinkAlt} from "react-icons/fa";
import {FaArrowRight} from "react-icons/fa";
import Image from "next/image";
import {JSX} from "react";
import Link from "next/link";
import {motion} from "framer-motion";

interface CardProps {
    label: string;
    link: string | null;
    title: string;
    image: {
        src: string,
        darkSrc?: string,
        alt: string,
        width: number,
        height: number,
    } | null;
    imageClassName?: string;
    organisation: string | null;
    date: string | null;
    localisation: string | null;
    description: string | null;
}

const className: string = "group-hover:text-[var(--main-color)] transition duration-300 ease-in-out absolute top-3 right-3 text-30";
const iconMap: Record<CardProps['label'], JSX.Element> = {
    project: <FaArrowRight className={className + " group-hover:-rotate-45"} fontSize={15}/>,
};
const getIcon = (label: CardProps['label']) => iconMap[label] ??
    <FaExternalLinkAlt className={className} fontSize={15}/>;

export default function Card({label, link, title, image, imageClassName, organisation, date, localisation, description}: CardProps) {
    const isExternal = link?.startsWith("http") ?? false;
    const wrapperClassName = "active:scale-95 relative flex w-full group transition-all duration-300 ease-in-out bg-[var(--card-bg)] hover:border-[var(--main-color)] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[rgb(var(--shadow-color))]/5 rounded-[.5rem] border border-solid border-[var(--border-gray)] p-4 mb-5";

    const content = (
        <>
            {(image && (
                image.darkSrc ? (
                    <>
                        <Image
                            src={image.src}
                            alt={image.alt}
                            width={image.width}
                            height={image.height}
                            className={`${imageClassName ?? "w-8 h-8 sm:w-12 sm:h-12 rounded-[.5rem] object-contain"} dark:hidden`}
                        />
                        <Image
                            src={image.darkSrc}
                            alt={image.alt}
                            width={image.width}
                            height={image.height}
                            className={`${imageClassName ?? "w-8 h-8 sm:w-12 sm:h-12 rounded-[.5rem] object-contain"} hidden dark:block`}
                        />
                    </>
                ) : (
                    <Image
                        src={image.src}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        className={imageClassName ?? "w-8 h-8 sm:w-12 sm:h-12 rounded-[.5rem] object-contain"}
                    />
                )
            ))}
            <div className="flex flex-col mx-5 md:mx-8 lg:mx-8">
                <h3 className="text-base md:text-xl lg:text-xl font-semibold">{title}</h3>
                {organisation && (<p className="text-xs text-[var(--gray)]">{organisation}</p>)}
                {date && (<p className="text-xs text-[var(--gray)]">{date}</p>)}
                {localisation && (<p className="text-xs text-[var(--gray)]">{localisation}</p>)}
                {description && (<p className="mt-3 text-xs sm:text-base text-[var(--gray)]">{description}</p>)}
                {link && getIcon(label)}
            </div>
        </>
    );

    return (
        <motion.div
            initial={{opacity: 0, y: 12}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: "-40px"}}
            transition={{duration: 0.4, ease: "easeOut"}}
        >
            {link ? (
                <Link href={link}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className={wrapperClassName}>
                    {content}
                </Link>
            ) : (
                <div className={wrapperClassName + " cursor-default active:scale-100 hover:translate-y-0"}>
                    {content}
                </div>
            )}
        </motion.div>
    );
}
