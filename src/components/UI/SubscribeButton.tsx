import ButtonLoadingIndicator from '@/components/UI/ButtonLoadingIndicator';

interface SubscriptionButtonProps {
    isActive: boolean;
    isLoading: boolean;
    onClick: () => void;
    buttonText: string;
}


const SubscriptionButton = ({ isActive, isLoading, onClick, buttonText } : SubscriptionButtonProps )  => {
    const buttonClass = `w-full py-4 my-4 text-white transition duration-300 border rounded-md ${
        isActive ? 'bg-green-600 border-green-600 hover:border-green-700' :
        'bg-indigo-600 border-indigo-600 hover:border-indigo-700 hover:text-indigo-600'
    } ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-transparent'}`;

    return (
        <button disabled={isLoading} onClick={onClick} className={buttonClass}>
            {isLoading ? <ButtonLoadingIndicator/> : buttonText}
        </button>
    );
};

export default SubscriptionButton;
