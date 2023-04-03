import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface inputBarFormSubmit {
    value: boolean;
}
const initialState : inputBarFormSubmit = {
    value: false
}

export const inputBarFormSubmitSlice = createSlice({
    name: "inputBarFormSubmit",
    initialState,
    reducers: {
        toggleInputBarFormSubmit: (state,  action : PayloadAction<boolean>  ) => {
            state.value = action.payload;
        }
    }
});

export default inputBarFormSubmitSlice.reducer;
export const { toggleInputBarFormSubmit } = inputBarFormSubmitSlice.actions;

