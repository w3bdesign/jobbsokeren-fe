import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface EditorData {
    value: string;
}

const initialState : EditorData  = {
    value: '<h1>Fyll ut skjemaet til venstre for å generere søknaden</h1>'
}

export const editorDataSlice = createSlice({
    name: 'editorData',
    initialState,
    reducers: {
        setEditorData: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        }
    }
});

export default editorDataSlice.reducer;
export const { setEditorData } = editorDataSlice.actions;