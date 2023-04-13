import { createSlice } from "@reduxjs/toolkit";

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
        toggleEditorIsLoading: (state) => {
            state.value = !state.value;
          },
    }
});

export default editorIsLoadingSlice.reducer;
export const { toggleEditorIsLoading } = editorIsLoadingSlice.actions;