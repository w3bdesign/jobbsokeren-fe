import InputBar from "./components/InputBar"
import TextEditor from "./components/TextEditor"
import { useState } from "react"
import { EditorFormModel} from "@/models/editorFormModel"
import { FetchedDataModel } from "@/models/fetchedDataModel"
import axios from "axios";

// empty fetchedData object
const emptyFetchedData: FetchedDataModel = {
    employer_job_title: '',
    employer_name:  '',
    employeer_address:  '',
    employer_zip_code:  '',
    employeer_keywords:  '',
    employeer_job_description:  '',
    applicant_name:  '',
    applicant_email:  '',
    applicant_address:  '',
    applicant_city:  '',
    applicant_zip_code:  '',
    applicant_job_advertisement_url:  '',
    applicant_cover_letter:  '',
}

// empty formValues object
const emptyFormValues: EditorFormModel = {
    applicant_name: '',
    applicant_email: '',
    applicant_address: '',
    applicant_zip_code:'',
    applicant_city: '',
    applicant_job_advertisement_url: ''
}

const EditorPage = () => {

    const [formSubmited, setFormSubmited] = useState<boolean>(false);
    const [fetchedData, setfetchedData] = useState<FetchedDataModel>(emptyFetchedData);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [formValues, setFormValues] = useState<EditorFormModel>(emptyFormValues);
    const [initialValue, setInitialValue] = useState("<h1>Fyll ut skjemaet til venstre for å generere søknaden</h1>");

    const handleSubmit = (event  : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
        setInitialValue("");
        axios({
            method: "post",
            url: "http://127.0.0.1:3000/api/jobApplicationData",
            data: formValues,
        })
        .then(response => {
            const { data } = response;
            setfetchedData(data);
            setIsLoading(false);
            setFormSubmited(true);
        })
        .catch(response => {
            setIsError(response.status);            
            setIsLoading(false);
            setFormSubmited(true);
        });
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    


    return (
        <div className="w-full bg-zinc-100 pb-6 grid md:grid-cols-12 pt-[80px]">
            <div className="md:col-span-4">
                <InputBar
                    isLoading={isLoading} 
                    formValues={formValues} 
                    handleInputChange={handleInputChange}
                    handleSubmit={handleSubmit}/>
            </div>
            <div className="md:col-span-8 min-h-[600px] ">
                <TextEditor
                    initialValue={initialValue}
                    setInitialValue={setInitialValue}
                    fetchedData={fetchedData}
                    formSubmited={formSubmited}
                    isLoading={isLoading}
                    setFormSubmited={setFormSubmited}/>
            </div>
        </div>
    )
}

export default EditorPage


