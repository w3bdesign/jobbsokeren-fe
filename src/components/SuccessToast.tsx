
import { Transition } from '@headlessui/react';
import {CheckCircleIcon} from "@heroicons/react/24/outline";

interface Props {
    display: boolean;
    text: string;
}

const SuccessToast: React.FC<Props> = ({display, text}) => {
    return (
        <Transition
          show={display}
          enter="transition-opacity duration-4000"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="w-full ">
          <div id="toast-success" className="flex mt-2 items-center w-full max-w-xs p-4 mb-4 text-gray-900 bg-white rounded-lg shadow" role="alert">
              <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg">
                  <CheckCircleIcon className="w-6 h-6 animate-bounce" aria-hidden="true" />
                  <span className="sr-only">Avkryssing ikon</span>
              </div>
              <div className="ml-3 text-sm font-normal">{text}</div>
            </div>
          </div>  
        </Transition>
    )
}


export default SuccessToast;