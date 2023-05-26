import SuccessToast from "./SuccessToast";
import { XMarkIcon } from "@heroicons/react/24/outline";
import React, { useState } from 'react';

interface Props {
    success: boolean;
}

const SuccessBottomBanner: React.FC = ({success}) => {
    const [show, setShow] = useState(false)

    const handleClose = () => {
        setShow(false)
    }

    return (
        <div id="bottom-banner" className={`fixed bottom-0 left-0 z-50 flex justify-between w-full p-4 border-t border-gray-200 bg-gray-50 transition-transform duration-300 transform ${success ? 'translate-y-0' : 'translate-y-full'}`}>
            <div className="flex items-center mx-auto">
                <SuccessToast display={true} text="Din profil er oppdatert!" />
            </div>
            <div className="flex items-center">
                <button onClick={handleClose} type="button" className=" border-none flex-shrink-0 inline-flex justify-center items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ">
                    <XMarkIcon className="w-6 h-6 text-gray-600" aria-hidden="true" />
                    <span className="sr-only">Lukk</span>
                </button>
            </div>
        </div>
    )
}

export default SuccessBottomBanner;
