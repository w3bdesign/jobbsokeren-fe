import React, {useState} from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import SubmitButton from "@/components/SubmitButton";
import FileInput from "@/components/FileInput";
import useUploadFirebaseUserFile from "@/hooks/useUploadFirebaseUserFile";
import LoadingDisplayer from "@/components/LoadingDisplayerBackground";
import ErrorDisplayer from "@/components/ErrorDisplayer";
import SuccessBottomBanner from "@/components/SuccessBottomBanner";

const ApplicantInfoForm: React.FC = () => {
    const user = useSelector((state: RootState) => state.auth.user);
    const { uploadFile, error, isLoading } = useUploadFirebaseUserFile();
    const [file, setFile] = useState<File | null>(null);
    const [success, setSuccess] = useState<boolean>(false);

    const handleFileSelected = (file: File) => {
        setFile(file);
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (user && file) {
            await uploadFile(user.uid, file);
            if (error) {
               console.log(error);
            } else {
                setSuccess(true);
                setTimeout(() => {
                    setSuccess(false);
                }, 3000);
            }
        }
    };
    

    return (
        <>
            {error && <ErrorDisplayer title={"Feil!"} errorMessage="Det skjedde en feil når vi prøvde å hente din profil. Prøv igjen senere"  errorCode={500}  />}
            <div className="w-full">
                <form onSubmit={handleSubmit}>
                    <div className="justify-center sm:p-28">
                        <div className="mb-5">
                            <div className="my-8 sm:w-1/2">
                                <h2 className="text-base font-semibold leading-7 text-gray-900">Min CV</h2>
                                <p className="mt-1 text-sm leading-6 text-gray-600">Vennligst last opp din CV. Vi vil hente informasjon fra CV-en når vi lager jobbsøknad for å skreddersy din søknad så mye som mulig ut i fra dine erfaringer, kompetanse og personlige egenskaper.</p>
                            </div>
                            <div className="flex flex-wrap justify-between">
                                <FileInput file={file} setFile={setFile} onFileUpload={handleFileSelected} />
                            </div>
                        </div>
                        <div className="sm:w-1/3 ml-auto">
                            <SubmitButton isLoading={isLoading} buttonText={"Last opp CV"}/>
                        </div>
                    </div>
                </form>
            </div>
            <SuccessBottomBanner success={success} text="Din CV er lastet opp!" />
        </>
    );
}

export default ApplicantInfoForm;
