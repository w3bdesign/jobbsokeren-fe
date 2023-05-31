import SuccessToast from "./SuccessToast";
import React from 'react';

interface Props {
    success: boolean;
    text: string;
}

const SuccessBottomBanner: React.FC<Props> = ({success, text}) => {
    return (
        <div id="bottom-banner" className={`fixed bottom-0 left-0 z-50 flex justify-between w-full p-4 border-t border-gray-200 bg-gray-50 transition-transform duration-300 transform ${success ? 'translate-y-0' : 'translate-y-full'}`}>
            <div className="flex items-center mx-auto">
                <SuccessToast display={true} text={text} />
            </div>
        </div>
    )
}

export default SuccessBottomBanner;
