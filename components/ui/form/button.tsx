import React from "react";

interface ButtonProps {
    id: string;
    name: string;
    label: string;
    isLoading: boolean;
}

export default function Button({id, name, label, isLoading}: ButtonProps) {
    return (
        <button
            type="submit"
            id={id}
            name={name}
            disabled={isLoading}
            className="active:scale-95 w-full transition-all duration-300 ease-in-out flex items-center cursor-pointer disabled:cursor-not-allowed disabled:opacity-70 bg-gradient-to-br text-white font-bold from-[var(--main-color)] to-[var(--main-color-2)] rounded-[.5rem] w-50 justify-center px-5 mt-6 h-15 hover:shadow-lg hover:shadow-[var(--main-color)]/20"
        >
            {isLoading && (<div className="loader"></div>)}
            {!isLoading && label}
        </button>
    );
}