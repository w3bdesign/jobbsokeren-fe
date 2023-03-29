export interface EditorFormModel {
    name: string;
    email: string;
    address: string;
    city: string;
    postalcode: string;
    jobtitle: string;
    finnlink: string;
}

export interface EditorFormPropsModel {
    formValues: EditorFormModel;
    formSubmited: boolean;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    setFormSubmited:  React.Dispatch<React.SetStateAction<boolean>>;
}

