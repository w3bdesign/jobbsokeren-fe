import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FetchedDataModel } from "@/models/fetchedDataModel"

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

const initialState = {
    value: emptyFetchedData
}

export const editorFetchedDataSlice = createSlice({
    name: "editorFetchedData",
    initialState,
    reducers: {
        setEditorFetchedData: (state, action: PayloadAction<FetchedDataModel>) => {
            state.value = action.payload;
        }
    }
});

export default editorFetchedDataSlice.reducer;
export const { setEditorFetchedData } = editorFetchedDataSlice.actions;