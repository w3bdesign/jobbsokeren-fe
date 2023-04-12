import { ThreeDots } from "react-loader-spinner";
import { EditorFormModel} from "@/models/editorFormModel"
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import {setEditorFetchedData} from "@/store/slices/editor/editorFetchedDataSlice";
import { toggleEditorIsLoading } from "@/store/slices/editor/editorIsLoadingSlice";
import { setEditorData } from '@/store/slices/editor/editorDataSlice';
import TextInput from "./TextInput";
import useApi from "@/hooks/useApi";


const emptyFormValues: EditorFormModel = {
    applicant_name: '',
    applicant_email: '',
    applicant_address: '',
    applicant_zip_code:'',
    applicant_city: '',
    applicant_job_advertisement_url: ''
}

const errorMessage = "<p>Something went wrong fetching data, please try again later</p>";


const InputBar : React.FC = () => {


    const [formValues, setFormValues] = useState<EditorFormModel>(emptyFormValues);
    const editorIsLoading = useSelector((state: RootState) => state.editorIsLoading.value);
    const dispatch = useDispatch();
    const buttonLoading = editorIsLoading ? "hover:bg-indigo-600" : "hover:bg-transparent";
    const postJobApplicationData = useApi(
        'jobApplicationData',
        'post',
    );
    
    
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = async (event  : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(toggleEditorIsLoading(true));
        dispatch(setEditorData(""));
        try {
            const response = await postJobApplicationData(formValues);
            if (response.status === 200) {
                const { data } = response;
                dispatch(setEditorFetchedData(data));
            } else {
                dispatch(setEditorData(errorMessage));
            }
        } catch (error) {
            dispatch(setEditorData(errorMessage));
        }
        dispatch(toggleEditorIsLoading(false));
    };

    return (
        <div className="w-full bg-zinc-100">
            <form onSubmit={handleSubmit}>
                <div className="w-[80%] justify-center mx-auto pt-4">
                    <div className="md:mb-20">
                        <div className="my-6">
                            <div className="my-8">
                                <h2 className="text-base font-semibold leading-7 text-gray-900">Personlig info</h2>
                                <p className="mt-1 text-sm leading-6 text-gray-600">Denne informasjonen vil vår AI bruke for å skreddersy søknaden din i henhold til dine personlige opplysninger.</p>
                            </div>
                        </div>
                        <TextInput
                            id="applicant_name"
                            name="applicant_name"
                            autoComplete="on"
                            type="text"
                            placeholder="Ola Norman"
                            value={formValues.applicant_name}
                            onChange={handleInputChange}
                            required
                            label="Navn"/>
                        <TextInput
                            id="applicant_email"
                            name="applicant_email"
                            autoComplete="on"
                            type="email"
                            placeholder="olanorman@gmail.com" 
                            value={formValues.applicant_email}
                            onChange={handleInputChange}
                            required
                            label="E-post"/>
                        <TextInput
                            id="applicant_address"
                            name="applicant_address"
                            autoComplete="on"
                            type="text"
                            placeholder="Slottsparken 1" 
                            value={formValues.applicant_address}
                            onChange={handleInputChange}
                            required
                            label="Gate adresse"/>
                        <div className="grid md:grid-cols-2 gap-4 my-6">     
                            <TextInput
                                id="applicant_zip_code"
                                name="applicant_zip_code"
                                autoComplete="on"
                                type="text"
                                pattern="[0-9]*"
                                minLength={4}
                                maxLength={4}
                                placeholder="5071"
                                value={formValues.applicant_zip_code}
                                onChange={handleInputChange}
                                required
                                label="Postnummer"/>
                            <TextInput
                                id="applicant_city"
                                name="applicant_city"
                                autoComplete="on"
                                type="text"
                                placeholder="Bergen"
                                value={formValues.applicant_city}
                                onChange={handleInputChange}
                                required
                                label="By"/> 
                            </div>
                        </div>
                        <div>
                            <div className="my-8">
                                <h2 className="text-base font-semibold leading-7 text-gray-900">Annonse informasjon</h2>
                                <p className="mt-1 text-sm leading-6 text-gray-600">Legg inn lenken til FINN.no Annonsen. Så order vi resten!</p>
                            </div>
                            <TextInput
                                id="applicant_job_advertisement_url"
                                name="applicant_job_advertisement_url"
                                autoComplete="on"
                                type="text"
                                pattern="https://www.finn.no/job/.*"
                                placeholder="https://www.finn.no/job/fulltime/ad.html?finnkode=255413380"
                                value={formValues.applicant_job_advertisement_url}
                                onChange={handleInputChange}
                                required
                                label="FINN.no lenke"/>   
                        <div>
                            <button type="submit" disabled={editorIsLoading} className={`w-full py-4 my-4 text-white border bg-indigo-600 border-indigo-600 hover:text-indigo-600 hover:border-indigo-600 rounded-md ${buttonLoading}`}>
                                {editorIsLoading ? <ThreeDots 
                                    height="25" 
                                    width="25" 
                                    radius="9"
                                    color="#FFFFFF" 
                                    ariaLabel="three-dots-loading"
                                    wrapperStyle={{display: "flex", justifyContent: "center", alignItems: "center"}}
                                    visible={true}
                                />
                                : "Generer søknad"}
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default InputBar