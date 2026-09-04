import { FaGithubSquare } from "react-icons/fa";
import { PiReadCvLogo } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa";
import {MdOutlineEmail} from "react-icons/md";
import { JSX } from "react";

interface ButtonProps {
    label: string;
    icon: 'github' | 'linkedin' | 'cv' | 'mail';
    link: string;
}

const iconsStyle = "transition duration-300 ease-in-out group-hover:text-[var(--main-color)]";
const iconsMap: Record<ButtonProps['icon'], JSX.Element> = {
    github: <FaGithubSquare className={iconsStyle} fontSize={30} />,
    linkedin: <FaLinkedin className={iconsStyle} fontSize={30} />,
    cv: <PiReadCvLogo className={iconsStyle} fontSize={30} />,
    mail: <MdOutlineEmail className={iconsStyle} fontSize={30} />,
};

export default function Button({ label, icon, link }: ButtonProps) {
    const selectedIcon = iconsMap[icon];
    const isExternal = link.startsWith("http");

    return (
        <a href={link}
           target={isExternal ? "_blank" : undefined}
           rel={isExternal ? "noopener noreferrer" : undefined}
           className="active:scale-90 group transition duration-300 ease-in-out hover:border-[var(--main-color)] flex items-center p-2 sm:p-3 md:p-3 justify-center w-45 rounded-[.5rem] border-2 border-solid border-[var(--border-gray)] cursor-pointer mr-5">
            {selectedIcon}
            <span className="ml-3 mt-1 hidden sm:flex font-semibold transition duration-300 ease-in-out group-hover:text-[var(--main-color)]">
                {label}
            </span>
        </a>
    );
}
