import React, {useState} from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import SubmitButton from "@/components/SubmitButton";
import FileInput from "@/components/FileInput";



const ApplicantInfoForm: React.FC = () => {
    const user = useSelector((state: RootState) => state.auth.user);
    
    return (
        <>
            <div className="w-full">
                <form >
                    <div className="justify-center sm:p-28">
                        <div className="mb-5">
                                <div className="my-8 sm:w-1/2">
                                    <h2 className="text-base font-semibold leading-7 text-gray-900">Min CV</h2>
                                    <p className="mt-1 text-sm leading-6 text-gray-600">Vennligst last opp din CV. Vi vil hente informasjon fra CV-en når vi lager jobbsøknad for å skreddersy din søknad så mye som mulig ut i fra dine erfaringer, kompetanse og personlige egenskaper.</p>
                                </div>
                            <div className="flex flex-wrap justify-between">
                                <FileInput />
                            </div>
                        </div>
                        <div className="sm:w-1/3 ml-auto">
                            <SubmitButton isLoading={false} buttonText={"Last opp CV"}/>
                        </div>
                    </div>
                </form>
            </div>
        </>
        );
}

export default ApplicantInfoForm