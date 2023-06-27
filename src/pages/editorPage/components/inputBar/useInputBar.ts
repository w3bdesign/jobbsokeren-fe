import { AxiosResponse } from 'axios';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import useApi from '@/hooks/useApi';
import useFetchFirebaseUserData from '@/hooks/useFetchFirebaseUserData';
import { EditorFormModel} from '@/models/editorFormModel'
import { FirebasePersonalUserData } from '@/models/firebasePersonalUserDataModel';
import { setEditorData } from '@/store/slices/editor/editorDataSlice';
import {setEditorFetchedData} from '@/store/slices/editor/editorFetchedDataSlice';
import { toggleEditorIsLoading } from '@/store/slices/editor/editorIsLoadingSlice';
import { incrementSubmitCount } from '@/store/slices/editor/editorSubmitCountSlice'; 
import { RootState } from '@/store/store';



const errorMessage = '<p>Something went wrong fetching data, please try again later</p>';
const emptyFormValues: EditorFormModel = {
    applicant_name: '',
    applicant_email: '',
    applicant_address: '',
    applicant_zip_code:'',
    applicant_city: '',
    applicant_cv_summary: '',
    applicant_job_advertisement_url: ''
}


export const UseInputBar = () => {
    const [formValues, setFormValues] = useState<EditorFormModel>(emptyFormValues);
    const editorIsLoading = useSelector((state: RootState) => state.editorIsLoading.value);
    const user = useSelector((state: RootState) => state.auth.user);
    const dispatch = useDispatch();
    const postJobApplicationData = useApi('openai/job-application-data','post');
    const { error: personalDataError, data : personalData } = useFetchFirebaseUserData(user, 'personalInformation');
    const { data: cvData} = useFetchFirebaseUserData(user, 'cvSummaries');

    const normalizeData = (data: FirebasePersonalUserData): EditorFormModel => {
        return {
            applicant_name: data.applicant_name || '',
            applicant_email: data.applicant_email || '',
            applicant_address: data.applicant_address || '',
            applicant_zip_code: data.applicant_zip_code || '',
            applicant_city: data.applicant_city || '',
            applicant_cv_summary: data.applicant_cv_summary || '',
            applicant_job_advertisement_url: data.applicant_job_advertisement_url || ''
        };
    }
    
    // if the user has data in firebase, set the form values to the data
    useEffect(() => {
        if (personalData && !personalDataError) {
            setFormValues(normalizeData(personalData));
        }
      
    }, [personalData, personalDataError]);
    
    
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };
    
    const handleSubmit = async (event  : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
        // Merge formValues with cvData
        const dataToSubmit = {
            ...formValues,
            applicant_cv_summary: cvData?.applicant_cv_summary || formValues.applicant_cv_summary
        };
    
        dispatch(incrementSubmitCount());
        dispatch(toggleEditorIsLoading());
        dispatch(setEditorData(''));
    
        try {
            const response : AxiosResponse = await postJobApplicationData(dataToSubmit);
            if (response.status === 200) {
                const { data } = response.data;
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
