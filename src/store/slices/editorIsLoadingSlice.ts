import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface editorIsLoading {
    value: boolean;
  }
  
const initialState : editorIsLoading  = {
    value: false
}

export const editorIsLoadingSlice = createSlice({
    name: "editorIsLoading",
    initialState,
    reducers: {
        toggleEditorIsLoading: (state, action : PayloadAction<boolean>) => {
            console.log("changing editorIsLoading to: " + action.payload);
            state.value = action.payload;
        }
    }
});

export default editorIsLoadingSlice.reducer;
export const { toggleEditorIsLoading } = editorIsLoadingSlice.actions;