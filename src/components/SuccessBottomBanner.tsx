import SuccessToast from "./SuccessToast";
import React, { useState } from 'react';

interface Props {
    success: boolean;
}

const SuccessBottomBanner: React.FC<Props> = ({success}) => {
    return (
        <div id="bottom-banner" className={`fixed bottom-0 left-0 z-50 flex justify-between w-full p-4 border-t border-gray-200 bg-gray-50 transition-transform duration-300 transform ${success ? 'translate-y-0' : 'translate-y-full'}`}>
            <div className="flex items-center mx-auto">
                <SuccessToast display={true} text="Din profil er oppdatert!" />
            </div>
        </div>
    )
}

export default SuccessBottomBanner;
