
import React from 'react';

import ButtonLoadingIndicator from '@/components/UI/ButtonLoadingIndicator';

interface SubmitButtonProps {
    isLoading: boolean;
    buttonText: string;
    type?: 'button' | 'submit' | 'reset' | undefined;
    handleClick?: () => void;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ isLoading, buttonText, type='submit', handleClick }) => {
    const baseButtonClass ='w-full py-4 my-4 text-white border bg-indigo-600 border-indigo-600 hover:text-indigo-600 hover:border-indigo-600 rounded-md';
    const buttonLoading = isLoading ? 'hover:bg-indigo-600' : 'hover:bg-transparent';
    return (
        <button
            type={type}
            onClick={handleClick}
            disabled={isLoading}
            className={`${baseButtonClass} ${buttonLoading}`}>
            {isLoading ? <ButtonLoadingIndicator /> : buttonText}
        </button>
    );
};

export default SubmitButton;
