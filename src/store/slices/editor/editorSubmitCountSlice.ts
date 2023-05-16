import { createSlice } from "@reduxjs/toolkit";

export interface SubmitCount {
    value: number;
}

const initialState: SubmitCount = {
    value: parseInt(localStorage.getItem("submitCount") || "0")
};

export const editorSubmitCountSlice = createSlice({
    name: "submitCount",
    initialState,
    reducers: {
        incrementSubmitCount: (state) => {
            state.value += 1;
            localStorage.setItem("submitCount", state.value.toString());
        },
        resetSubmitCount: (state) => {
            state.value = 0;
            localStorage.setItem("submitCount", "0");
        },
    }
});

export default editorSubmitCountSlice.reducer;
export const { incrementSubmitCount, resetSubmitCount } = editorSubmitCountSlice.actions;
