import { XMarkIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

import CloseButton from './CloseButton';
import DeleteButton from './DeleteButton';

interface WarningModalProps {
    show: boolean;
    setShow: (show: boolean) => void;
    title: string;
    confirmMessage: string;
    closeMessage: string;
    onConfirm: () => void;
    onCancel: () => void;   
}

const WarningModal : React.FC<WarningModalProps> = ({show, title, confirmMessage, closeMessage, onConfirm, onCancel}) => {

    if (!show) {
        return null;
    }

    return(
        <div id="popup-modal" className="fixed bg-opacity-50 bg-slate-700 inset-0 z-50 flex items-center justify-center overflow-y-auto">
            <div className="relative w-full max-w-md mx-auto">
                <div className="relative bg-white rounded-lg shadow">
                    <button onClick={onCancel} type="button" className=" absolute top-3 right-2.5 border-none flex-shrink-0 inline-flex justify-center items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ">
                        <XMarkIcon className="w-6 h-6 text-gray-600" aria-hidden="true" />
                        <span className="sr-only">Lukk</span>
                    </button>
                    <div className="px-6 py-12 text-center">
                        <div className="flex items-center justify-center w-12 h-12 mx-auto py-6 bg-red-100 rounded-full">
                            <ExclamationTriangleIcon className="w-6 h-6 text-red-600" aria-hidden="true" />
                        </div>
                        <h3 className="my-4 text-xl  text-gray-900">{title}</h3>
                        <div className="flex md:columns-2 gap-2">
                            <DeleteButton handleDelete={onConfirm} isLoading={false} buttonText={confirmMessage}/>
                            <CloseButton onClick={onCancel} text={closeMessage} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WarningModal;