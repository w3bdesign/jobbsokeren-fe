import { ThreeDots } from "react-loader-spinner";
import { EditorFormModel} from "@/models/editorFormModel"
import { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { toggleInputBarFormSubmit } from "@/store/slices/inputBarFormSubmitSlice";
import {setEditorFetchedData} from "@/store/slices/editorFetchedDataSlice";
import { toggleEditorIsLoading } from "@/store/slices/editorIsLoadingSlice";
import { setEditorData } from '@/store/slices/editorDataSlice';

const InputBar : React.FC = () => {


    const emptyFormValues: EditorFormModel = {
        applicant_name: '',
        applicant_email: '',
        applicant_address: '',
        applicant_zip_code:'',
        applicant_city: '',
        applicant_job_advertisement_url: ''
    }
  
    const [isError, setIsError] = useState(false);
    const [formValues, setFormValues] = useState<EditorFormModel>(emptyFormValues);
    const editorIsLoading = useSelector((state: RootState) => state.editorIsLoading.value);
    const buttonLoading = editorIsLoading ? "hover:bg-indigo-600" : "hover:bg-transparent";
    const dispatch = useDispatch();
    
    
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (event  : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(toggleEditorIsLoading(true));
        dispatch(setEditorData(""));
        // set initial value to empty string to avoid showing old data
        axios({
            method: "post",
            url: "http://127.0.0.1:3000/api/jobApplicationData",
            data: formValues,
        })
        .then(response => {
            const { data } = response;
            dispatch(toggleEditorIsLoading(false));
            dispatch(setEditorFetchedData(data));
            dispatch(toggleInputBarFormSubmit(true));
        })
        .catch(response => {
            setIsError(response.status);
            dispatch(toggleInputBarFormSubmit(true));            
            dispatch(toggleEditorIsLoading(false));
        });
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
                            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Fullt navn</label>
                            <input 
                                name="applicant_name" 
                                autoComplete="on" 
                                type="text" 
                                placeholder="Ola Norman"
                                value={formValues.applicant_name}
                                onChange={handleInputChange}
                                className="block mt-2 w-full px-5 py-2.5 rounded-md  ext-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-indigo-600/40 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6   " />
                            {false && <p className="mt-3 text-xs text-red-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>}
                        </div>

                        <div className="my-6">
                            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">E-post</label>
                            <input name="applicant_email" 
                                autoComplete="on" 
                                type="email" 
                                placeholder="olanorman@gmail.com" 
                                value={formValues.applicant_email}
                                onChange={handleInputChange}
                                className="block mt-2 w-full px-5 py-2.5 rounded-md  ext-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-indigo-600/40 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6   " />
                                {false && <p className="mt-3 text-xs text-red-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>}
                        </div>
                        <div className="my-6">
                            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Gate adresse</label>
                            <input 
                                name="applicant_address"  
                                autoComplete="on" 
                                type="text" 
                                placeholder="Slottsparken 1" 
                                value={formValues.applicant_address}
                                onChange={handleInputChange}
                                className="block mt-2 w-full px-5 py-2.5 rounded-md  ext-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-indigo-600/40 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6   " />
                                {false && <p className="mt-3 text-xs text-red-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>}
                        </div> 

                        <div className="grid md:grid-cols-2 gap-4  my-6">
                            <div>
                                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">By</label>
                                <input 
                                    name="applicant_city" 
                                    autoComplete="on" 
                                    type="text" 
                                    placeholder="Bergen"
                                    value={formValues.applicant_city}
                                    onChange={handleInputChange}
                                    className="w-full mt-2 pl-5 py-2.5 rounded-md  ext-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-indigo-600/40 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6   " />
                                    {false && <p className="mt-3 text-xs text-red-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>}
                            </div>
                            <div>
                                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Postkode</label>
                                <input 
                                    name="applicant_zip_code" 
                                    autoComplete="on" 
                                    type="number" 
                                    placeholder="5071"
                                    value={formValues.applicant_zip_code}
                                    onChange={handleInputChange}
                                    className="w-full mt-2 pl-5 py-2.5 rounded-md  ext-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-indigo-600/40 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6   " />
                                    {false && <p className="mt-3 text-xs text-red-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>}
                            </div>
                        </div>      
                            
                        </div>
                        <div>
                            <div className="my-8">
                                <h2 className="text-base font-semibold leading-7 text-gray-900">Annonse informasjon</h2>
                                <p className="mt-1 text-sm leading-6 text-gray-600">Legg inn lenken til FINN.no Annonsen. Så order vi resten!</p>
                            </div>                
                            <div className="my-6">
                                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">FINN.no lenke</label>
                                <input
                                    name="applicant_job_advertisement_url" 
                                    type="text" 
                                    placeholder="https://www.finn.no/job/fulltime/ad.html?finnkode=255413380"
                                    value={formValues.applicant_job_advertisement_url}
                                    onChange={handleInputChange}
                                    className="block mt-2 w-full px-5 py-2.5 rounded-md  ext-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-indigo-600/40 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6   " />
                                    {false && <p className="mt-3 text-xs text-red-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>}
                            </div>
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