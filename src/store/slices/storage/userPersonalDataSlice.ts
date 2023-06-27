import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserPersonalData {
    applicant_name: string,
    applicant_email: string,
    applicant_address: string,
    applicant_zip_code: string,
    applicant_city: string
}

const initialState : UserPersonalData  = {
    applicant_name: '',
    applicant_email: '',
    applicant_address: '',
    applicant_zip_code: '',
    applicant_city: ''
}

export const userPersonalDataSlice = createSlice({
    name: 'userPersonalData',
    initialState,
    reducers: {
        setUserPersonalDataSlice: (state, action: PayloadAction<UserPersonalData>) => {
            return action.payload;
        }
    }
});

export default userPersonalDataSlice.reducer;
export const { setUserPersonalDataSlice } = userPersonalDataSlice.actions;