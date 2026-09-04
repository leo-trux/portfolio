import React, {useState} from "react";
import {IoMdClose} from "react-icons/io";

interface TextareaProps {
    id: string;
    name: string;
    label: string;
    isError: boolean;
    value?: string;
    resetSpecificField: (field: "name" | "message" | "email" ) => void;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function Textarea({id, name, label, isError, value = "", resetSpecificField, onChange, ...register}: TextareaProps) {
    const [changeBg, setChangeBg] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>(value);
    const [displayIcon, setDisplayIcon] = useState<boolean>(false);
    const hasValue = inputValue !== "";

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputValue(e.target.value);
        if (onChange) {
            onChange(e);
        }
    }

    const handleFocus = () => {
        setChangeBg(true);
        setDisplayIcon(true);
    }

    const handleBlur = () => {
        setChangeBg(false);
        setTimeout(() => setDisplayIcon(false), 100);
    }

    const removeValue= () => {
        resetSpecificField("message");
        setInputValue("");
    }

    return (
        <div className="relative w-full group">
            <div className="relative">
                <textarea
                    id={id}
                    value={inputValue}
                    onChange={handleChange}
                    className={` ${isError ? "border-[var(--form-error)]" : "border-[var(--main-color)] border-transparent "} resize-none z-20 relative w-full h-50 transition duration-300 ease-in-out border-2 border-solid focus:border-2 focus:bg-white focus:border-[var(--main-color)] pt-7 pl-4 pr-8 rounded-[.5rem] outline-none bg-[var(--form-bg)]`}
                    name={name}
                    onFocus={handleFocus}
                    onBlurCapture={handleBlur}
                    {...register}
                />
                <label htmlFor={id}
                       className={`${hasValue ? "top-4 text-xs" : "top-7"} ${changeBg ? "bg-white pointer-events-none mx-4 w-10/11" : "bg-[var(--form-bg)] w-15/16 ml-4 "} z-20 h-7 flex items-center group-focus-within:text-xs group-focus-within:top-4 text-[var(--dark-gray)] absolute left-0 transform -translate-y-1/2 transition-all duration-300 ease-in-out`}>{label}</label>

            </div>
            <IoMdClose fontSize={25}
                       onClick={removeValue}
                       className={` ${displayIcon ? "z-50" : "z-10"} cursor-pointer transition duration-300 ease-in-out group-focus-within:opacity-100 opacity-0 absolute right-3 top-3 font-size text-[var(--dark-gray)]`}
            />
        </div>
    );
}