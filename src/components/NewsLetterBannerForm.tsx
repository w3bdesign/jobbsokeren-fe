import { XMarkIcon } from "@heroicons/react/24/outline";
import { Transition } from '@headlessui/react';
import React, { FormEvent } from 'react';


interface Props {
    newsLetterIsVisible: boolean;
    onSubmit: (e: FormEvent) => void;
    emailRef: React.RefObject<HTMLInputElement>;
    apiStatus: string;
    handleClose: () => void;
}

const NewsLetterBannerForm: React.FC<Props>  = ({newsLetterIsVisible, onSubmit, emailRef, apiStatus, handleClose }) => {
    return (
        <Transition
          show={newsLetterIsVisible}
          enter="transition-opacity duration-1000"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
            <div id="newsletter-banner" className="fixed left-0 z-50 flex justify-between w-full p-4 border-b border-gray-200 bg-gray-50">
                <div className="flex items-center flex-shrink-0 w-full mx-auto sm:w-auto">
                <form onSubmit={onSubmit} method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="flex flex-col items-center w-full md:flex-row">
                      <label htmlFor="email" id="mce-EMAIL" className="flex-shrink-0 mb-2 mr-auto text-sm text-gray-500 md:mb-0 md:mr-4  md:m-0">Få gratis jobbsøker tips og triks</label>
                      <input ref={emailRef} type="email" name="EMAIL" id="email" placeholder="Skriv inn e-post adresse" className="bg-white border border-gray-300 text-gray-900 md:w-64 mb-2 md:mb-0 md:mr-4 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder:text-indigo-600/40 " required />
                      <button type="submit" className="px-5 py-2.5 font-medium rounded-lg text-sm w-full sm:w-auto text-white border bg-indigo-600 border-indigo-600 hover:text-indigo-600 hover:border-indigo-600 hover:bg-transparent ">Ja, takk!</button>
                    </form>
                   {apiStatus && <div className="text-xs text-red-500">{apiStatus}</div>}
                </div>
                <div className="flex items-center absolute top-2.5 right-2.5 md:relative md:top-auto md:right-auto">
                    <button onClick={handleClose} type="button" className=" border-none flex-shrink-0 inline-flex justify-center items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ">
                        <XMarkIcon className="w-6 h-6 text-gray-600" aria-hidden="true" />
                        <span className="sr-only">Lukk</span>
                    </button>
                </div>
                <div>
                </div>
            </div>
        </Transition>
    )
}

export default NewsLetterBannerForm