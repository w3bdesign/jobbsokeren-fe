
interface CloseButtonProps {
    text: string;
    onClick?: () => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({text, onClick}) => {
    const baseButtonClass ="w-full py-4 my-4 text-gray-800 bg-gray-200 border border-gray-300 hover:bg-white hover:text-gray-700 hover:border-gray-400 rounded-md flex justify-center items-center space-x-2 gap-2";
    return (
        <button
            onClick={onClick}
            className={`${baseButtonClass}`}>
            {text}
        </button>
    )
}

export default CloseButton

