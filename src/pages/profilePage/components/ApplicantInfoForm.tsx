import React, {useState, useEffect} from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import SubmitButton from "@/components/SubmitButton";
import FileInput from "@/components/FileInput";
import useUploadFirebaseUserFile from "@/hooks/useUploadFirebaseUserFile";
import LoadingDisplayer from "@/components/LoadingDisplayerBackground";
import ErrorDisplayer from "@/components/ErrorDisplayer";
import SuccessBottomBanner from "@/components/SuccessBottomBanner";
import MiniPdfViewer from "@/components/MiniPdfViewer";
import DeleteButton from "@/components/DeleteButton";
import CloseButton from "@/components/CloseButton";
import WarningModal from "@/components/WarningModal";
import useDeleteFirebaseUserFile from "@/hooks/useDeleteFirebaseUserFile";
import { parsePdf } from "@/utils/extractPdfContent";
import useApi from "@/hooks/useApi";

const ApplicantInfoForm: React.FC = () => {
    const postCVSummary = useApi('firebase/firebase-store-cv-content','post');
    const user = useSelector((state: RootState) => state.auth.user);
    const { uploadFile, error, isLoading, getFileUrl } = useUploadFirebaseUserFile();
    const {error: deleteFileError, isLoading: deleteFileIsLoading, deleteFile } = useDeleteFirebaseUserFile();
    const [file, setFile] = useState<File | null>(null);
    const [success, setSuccess] = useState<boolean>(false);
    const [fileUrl, setFileUrl] = useState<string | null>(null);
    const [showPdf, setShowPdf] = useState<boolean>(true);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [delteSuccess, setDeleteSuccess] = useState<boolean>(false);

    useEffect(() => {
        if (user) {
            getFileUrl(user.uid).then((url) => {
                if (url !== undefined) {
                    setFileUrl(url);
                } 
            });
        }
    }, [user, getFileUrl]);

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
                try {
                    const text: string = await parsePdf(file);
                    setSuccess(true);
                    setShowPdf(true);
                    setTimeout(() => {
                        setSuccess(false);
                    }, 3000);
                    try {
                        const response = await postCVSummary({uid: user.uid, cv_content: text});
                      
                        if (response.status === 200) {
                              console.log(response);               
                        } else {
                           console.log(response);
                        }
                    } catch (error) {
                      console.log(error);
                    }
                } catch (error) {
                    console.error(error);
                }
            }
        }
    };

    const handleTogglePdf = () => {
        setShowPdf(!showPdf);
        setFile(null);
    };

    const handleDelete = () => {
        setShowModal(true);
    }

    return (
        <>
            {error && <ErrorDisplayer title={"Feil!"} errorMessage="Det skjedde en feil når vi prøvde å hente din profil. Prøv igjen senere"  errorCode={500}  />}
            <WarningModal  
                show={showModal} 
                setShow={setShowModal} 
                title={"Er du sikker på at du vil slette din CV?"} 
                confirmMessage={"Ja, slett min CV"} 
                closeMessage={"Nei, behold min CV"}
                onConfirm={() => {
                    deleteFile(user);
                    setDeleteSuccess(true);
                    setTimeout(() => {
                        setDeleteSuccess(false);
                    }, 3000);

                    handleTogglePdf();
                    setShowModal(false);
                }} 
                onCancel={() => setShowModal(false)} 
                />
            {(!fileUrl || !showPdf) && 
                <div className="w-full sm:p-28">
                    <form onSubmit={handleSubmit}>
                        <div className="justify-center">
                            <div className="mb-5">
                                <div className="my-8 sm:w-1/2">
                                    <h2 className="text-base font-semibold leading-7 text-gray-900">Min CV</h2>
                                    <p className="mt-1 text-sm leading-6 text-gray-600">Vennligst last opp din CV. Vi vil hente informasjon fra CV-en når vi lager jobbsøknad for å skreddersy din søknad så mye som mulig ut i fra dine erfaringer, kompetanse og personlige egenskaper.</p>
                                </div>
                                    <div className="flex flex-wrap justify-between">
                                        <FileInput file={file} setFile={setFile} onFileUpload={handleFileSelected} />
                                    </div>
                            </div>
                            <div className="sm:w-1/2 ml-auto flex gap-3">
                                <CloseButton onClick={handleTogglePdf} text="Avbryt" />
                                <SubmitButton type="submit" isLoading={isLoading} buttonText={fileUrl ? "Last opp ny CV" : "Last opp CV"}/>
                            </div>
                        </div>
                    </form>
                </div>
            }
            {fileUrl && showPdf &&
                <div className="w-full flex flex-col gap-16 sm:p-28">
                    <div className="flex flex-col justify-around md:flex-row gap-7">
                        <div className="flex flex-col justify-center  sm:flex-1 p-12 ">
                            <div className="md:mr-32">
                                <h2 className="text-base font-semibold leading-7 text-gray-900">Min CV</h2>
                                <p className="mt-1 text-sm leading-6 text-gray-600">Her er CV-en du har lastet opp. Vi bruker den i jobbsøkeren til å skreddersy din søknad så mye som mulig ut i fra dine erfaringer, kompetanse og personlige egenskaper. Det kan ta et par minutter fra du laster opp til jobbsøkeren tar i bruk informasjonen fra CV-en.</p>
                            </div>
                        </div>
                        <div>
                        <div className="sm:w-flex-1">
                            <MiniPdfViewer url={fileUrl} />
                        </div>
                        </div>
                    </div>
                    <div className="sm:w-1/2 ml-auto flex gap-3 z-50">
                        <DeleteButton handleDelete={handleDelete} isLoading={isLoading} buttonText="Slett CV"/>
                        <SubmitButton handleClick={handleTogglePdf} isLoading={isLoading} buttonText={"Last opp ny CV"}/>
                    </div>
                </div>
            } 
            <SuccessBottomBanner success={success} text="Din CV er lastet opp!" />
            <SuccessBottomBanner success={delteSuccess} text="Din CV er fjernet!" />
        </>
    );
}

export default ApplicantInfoForm;
