import { EditorFormModel} from "@/models/editorFormModel"
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import {setEditorFetchedData} from "@/store/slices/editor/editorFetchedDataSlice";
import { toggleEditorIsLoading } from "@/store/slices/editor/editorIsLoadingSlice";
import { setEditorData } from '@/store/slices/editor/editorDataSlice';
import { incrementSubmitCount } from '@/store/slices/editor/editorSubmitCountSlice'; // new import
import useApi from "@/hooks/useApi";
import { AxiosResponse } from 'axios';

const errorMessage = "<p>Something went wrong fetching data, please try again later</p>";
const emptyFormValues: EditorFormModel = {
    applicant_name: '',
    applicant_email: '',
    applicant_address: '',
    applicant_zip_code:'',
    applicant_city: '',
    applicant_job_advertisement_url: ''
}


export const UseInputBar = () => {
    const [formValues, setFormValues] = useState<EditorFormModel>(emptyFormValues);
    const editorIsLoading = useSelector((state: RootState) => state.editorIsLoading.value);
    const dispatch = useDispatch();
    const postJobApplicationData = useApi('job-application-data','post' );
    
    
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };
    
    const handleSubmit = async (event  : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        dispatch(incrementSubmitCount());
        dispatch(toggleEditorIsLoading());
        dispatch(setEditorData(""));

        try {
            const response : AxiosResponse = await postJobApplicationData(formValues);
            if (response.status === 200) {
                const { data } = response;
                dispatch(setEditorFetchedData(data));
            } else {
                dispatch(setEditorData(errorMessage));
            }
        } catch (error) {
            dispatch(setEditorData(errorMessage));
        }

        dispatch(toggleEditorIsLoading());

    };

    return {
        formValues,
        editorIsLoading,
        setFormValues,
        handleInputChange,
        handleSubmit,
    };

}
