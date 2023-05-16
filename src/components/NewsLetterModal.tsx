import { Transition } from '@headlessui/react'
import React, { useState, FormEvent, useRef } from 'react'
import { XMarkIcon } from "@heroicons/react/24/outline";
import SubmitButton from './SubmitButton';
import useApi from "@/hooks/useApi";
import { AxiosError } from 'axios';
import { useApiInterface } from "@/models/useApiModel";
import SuccessToast from './SuccessToast';

interface Props {
  startModal: boolean;
  handleModal: (status: boolean) => void;
}

const NewsLetterModal  : React.FC<Props> = ({startModal, handleModal}) => {
    const emailRef = useRef<HTMLInputElement | null>(null);
    const [apiStatus, setApiStatus] = useState<string>('');
    const [submitted, setSubmitted] = useState<boolean>(false);

  
    const onSubmit  = async (e: FormEvent)  =>  {
        e.preventDefault();
        const email_address = emailRef.current?.value;
        const status = "subscribed";
        const exportEditorContentAPI = useApi('/subscribe-to-mailchimp','post');
        try {
          const response = await exportEditorContentAPI({email_address, status});
          if (response.data.statusCode === 200) {
            setSubmitted(true);
            setTimeout(() => {
                handleModal(false);
            }, 4000);
          }  else if (response.data.statusCode === 400) {
            setApiStatus('Denne e-postadressen er allerede registrert.');
          }
        } catch (error) {
          const axiosError = error as AxiosError;
          if (axiosError.response) {
            const data = axiosError.response.data as useApiInterface;
            if (data.statusCode === 422) {
              setApiStatus('Vennligst skriv inn en gyldig e-postadresse.');
            } else {
              setApiStatus('Noe gikk galt. Prøv igjen senere.');
            }
          }
        }
    };

    return (
            <>   
              <Transition show={startModal} as={React.Fragment}>
                  <div id="authentication-modal" aria-hidden={true} className="bg-opacity-50 bg-slate-700 fixed top-0 left-0 right-0 z-10  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full flex items-center justify-center">
                    <div className="relative w-full max-w-md max-h-full">
                  <Transition.Child
                        enter="ease-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0">
                          <div className="relative bg-white rounded-lg shadow ">
                              <button onClick={() => handleModal(false)} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent border-none hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                              <XMarkIcon className="w-6 h-6 text-gray-600" aria-hidden="true" />
                                  <span className="sr-only">Close modal</span>
                              </button>
                              <div className="px-6 py-6 lg:px-8">
                                  <h3 className="mb-4 text-xl  text-gray-900 ">Få gratis jobbsøkertips og triks</h3>
                                  {!submitted && <form onSubmit={onSubmit} className="space-y-6 py-4">
                                      <div>
                                          <label htmlFor="email" className="block mb-2 text-sm text-gray-500">E-post</label>
                                          <input ref={emailRef} type="email" name="EMAIL" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder:text-indigo-600/40" placeholder="olanordman@company.com" required />
                                      </div>
                                      <SubmitButton
                                          isLoading={false}
                                          buttonText="Ja, takk!"/>
                                      <div className="text-sm text-red-500">
                                          {apiStatus}
                                      </div>
                                  </form>}
                              <SuccessToast display={submitted} text="Takk for at du meldte deg på nyhetsbrevet!"/>
                              </div>
                          </div>
                      </Transition.Child>
                      </div>
                  </div>
              </Transition>
            </>
          )
      }
      
      export default NewsLetterModal