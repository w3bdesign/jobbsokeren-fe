
import ButtonLoadingIndicator from "@/components/ButtonLoadingIndicator";
import React from "react";
import { TrashIcon } from '@heroicons/react/24/solid';

interface SubmitButtonProps {
    isLoading: boolean;
    buttonText: string;
}

const DeleteButton: React.FC<SubmitButtonProps> = ({ isLoading, buttonText }) => {
    const baseButtonClass ="w-full py-4 my-4 text-white bg-red-600 border border-red-600 hover:bg-white hover:text-red-600 hover:border-red-600 rounded-md flex justify-center items-center space-x-2 gap-2";
    const buttonLoading = isLoading ? "hover:bg-indigo-600" : "hover:bg-transparent";
    return (
        <button
            type="submit"
            disabled={isLoading}
            className={`${baseButtonClass} ${buttonLoading}`}>
            {isLoading ? <ButtonLoadingIndicator /> : buttonText}
            <TrashIcon className="w-5 h-5 inline-block" />
        </button>
    );
};

export default DeleteButton;
