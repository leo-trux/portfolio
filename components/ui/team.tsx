import Link from "next/link";
import Image from "next/image";
import React from "react";

interface TeamProps {
    isAdrian: boolean;
}

export default function Team({ isAdrian }: TeamProps) {
    return (
        <div className="flex relative h-30">
            <Link
                target="_blank"
                rel="noopener noreferrer"
                href='https://www.linkedin.com/in/leo-trux/'
                className="absolute z-40 rounded-[4rem] cursor-pointer transition duration-300 ease-in-out hover:border-[var(--main-color)] border-2 border-[var(--border-gray)]"
            >
                <Image
                    src='/images/leotrux.jpg'
                    alt='Léo Trux'
                    width={100}
                    height={100}
                    className="w-20 h-20 sm:w-30 sm:h-30 rounded-[4rem]"
                >
                </Image>
            </Link>
            <Link
                target="_blank"
                rel="noopener noreferrer"
                href='https://www.linkedin.com/in/kilianpeyron/'
                className="absolute z-30 left-15 sm:left-25 rounded-[4rem] cursor-pointer transition duration-300 ease-in-out hover:border-[var(--main-color)] border-2 border-[var(--border-gray)]"
            >
                <Image
                    src='/images/kilianpeyron.jpg'
                    alt='Kilian Peyron'
                    width={100}
                    height={100}
                    className="w-20 h-20 sm:w-30 sm:h-30 rounded-[4rem]"
                >
                </Image>
            </Link>
            <Link
                target="_blank"
                rel="noopener noreferrer"
                href='https://www.linkedin.com/in/aiman-manchout/'
                className="absolute z-20 rounded-[4rem] left-30 sm:left-50 cursor-pointer transition duration-300 ease-in-out hover:border-[var(--main-color)] border-2 border-[var(--border-gray)]"
            >
                <Image
                    src='/images/aimanmanchout.jpg'
                    alt='Aiman Manchout'
                    width={100}
                    height={100}
                    className="w-20 h-20 sm:w-30 sm:h-30 rounded-[4rem]"
                >
                </Image>
            </Link>
            {isAdrian && (
                <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href='https://www.linkedin.com/in/adrian-rabian-0455a326b/'
                    className="absolute z-10 rounded-[4rem] left-45 sm:left-75 cursor-pointer transition duration-300 ease-in-out hover:border-[var(--main-color)] border-2 border-[var(--border-gray)]"
                >
                    <Image
                        src='/images/adrianrabiant.jpg'
                        alt='Adrian Rabiant'
                        width={100}
                        height={100}
                        className="w-20 h-20 sm:w-30 sm:h-30 rounded-[4rem]"
                    >
                    </Image>
                </Link>
            )}
        </div>
    )
}