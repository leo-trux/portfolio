import {IoMdClose} from "react-icons/io";
import {motion} from "framer-motion";
import Image from "next/image";
import {JSX, useEffect} from "react";

interface ModalProps {
    image: {
        src: string,
        alt: string,
    };
    title: string;
    subTitle: string;
    message: string;
    buttonLabel: string;
    isOpen: boolean;
    closeModal: () => void;
}

export default function Modal({image, title, subTitle, message, buttonLabel, isOpen, closeModal}: ModalProps): JSX.Element {

    useEffect(() => {
        const handleEscapeDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                closeModal();
            }
        }
        document.addEventListener("keydown", handleEscapeDown);
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
        };

    },[closeModal, isOpen]);

    return (
        <div className="fixed flex px-6 top-0 left-0 z-50 inset-0 flex justify-center items-center bg-[#2b3247]/50">
            <motion.div
                initial={{y: 100, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                exit={{y: 100, opacity: 0}}
                transition={{duration: 0.3, ease: "easeOut"}}
                className="w-150 z-[60] bg-white h-125 rounded-xl"
            >
                <div className="relative flex p-5 border-b border-[var(--border-gray)] items-center">
                    <span
                        className="absolute left-1/2 -translate-x-1/2 text-center mt-1 font-semibold">{title}</span>
                    <IoMdClose fontSize={25}
                               className="mr-auto text-[var(--dark-gray)] cursor-pointer transition duration-300 ease-in-out rounded-[1rem] hover:bg-[var(--border-gray)]"
                               onClick={closeModal}
                    />
                </div>
                <div className="flex flex-col items-center p-5 sm:mx-30 mx-4 h-full">
                    <Image src={image.src}
                           width="120"
                           height="120"
                           alt={image.alt}
                           className="mb-5 w-25 sm:w-30 select-none"
                    />
                    <span className="text-2xl font-bold mb-4 text-center">{subTitle}</span>
                    <span className="text-center text-[var(--gray)]">{message}</span>
                    <button
                        onClick={closeModal}
                        className="active:scale-95 mt-10 w-full transition duration-300 ease-in-out flex items-center cursor-pointer bg-gradient-to-br text-white font-bold from-[var(--main-color)] to-[#825df6] rounded-[.5rem] w-50 justify-center px-5 h-15">
                        {buttonLabel}
                    </button>
                </div>
            </motion.div>
        </div>
    );
}