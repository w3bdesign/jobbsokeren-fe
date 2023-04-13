
import ButtonLoadingIndicator from "@/components/ButtonLoadingIndicator";
import React from "react";

interface SubmitButtonProps {
    isLoading: boolean;
    buttonText: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ isLoading, buttonText }) => {
    const baseButtonClass ="w-full py-4 my-4 text-white border bg-indigo-600 border-indigo-600 hover:text-indigo-600 hover:border-indigo-600 rounded-md";
    const buttonLoading = isLoading ? "hover:bg-indigo-600" : "hover:bg-transparent";
    return (
        <button
            type="submit"
            disabled={isLoading}
            className={`${baseButtonClass} ${buttonLoading}`}>
            {isLoading ? <ButtonLoadingIndicator /> : buttonText}
        </button>
    );
};

export default SubmitButton;
