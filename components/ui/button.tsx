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

const iconsMap: Record<ButtonProps['icon'], JSX.Element> = {
    github: <FaGithubSquare fontSize={19} />,
    linkedin: <FaLinkedin fontSize={19} />,
    cv: <PiReadCvLogo fontSize={19} />,
    mail: <MdOutlineEmail fontSize={19} />,
};

export default function Button({ label, icon, link }: ButtonProps) {
    const selectedIcon = iconsMap[icon];
    const isExternal = link.startsWith("http");

    return (
        <a href={link}
           target={isExternal ? "_blank" : undefined}
           rel={isExternal ? "noopener noreferrer" : undefined}
           className="active:scale-95 inline-flex items-center gap-2 px-3 py-2 rounded-[.5rem] text-[var(--gray)] transition-colors duration-300 ease-in-out hover:text-[var(--main-color)] hover:bg-[var(--form-bg)] cursor-pointer">
            {selectedIcon}
            <span className="text-sm font-medium">
                {label}
            </span>
        </a>
    );
}
