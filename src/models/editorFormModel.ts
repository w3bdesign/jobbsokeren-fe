import { FetchedDataModel } from "./fetchedDataModel";

export interface EditorFormModel {
    applicant_name: string,
    applicant_email: string,
    applicant_address: string,
    applicant_zip_code: string,
    applicant_city: string,
    applicant_job_advertisement_url: string,
   
}

export interface EditorFormPropsModel {
    initialValue: string;
    setInitialValue: React.Dispatch<React.SetStateAction<string>>;
    fetchedData: FetchedDataModel;
    formSubmited: boolean;
    isLoading: boolean;
    setFormSubmited:  React.Dispatch<React.SetStateAction<boolean>>;
}

