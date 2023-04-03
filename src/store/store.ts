import { configureStore } from "@reduxjs/toolkit";
import inputBarFormSubmitReducer from "./slices/inputBarFormSubmitSlice";
import editorFetchedDataReducer from "./slices/editorFetchedDataSlice";
import editorIsLoadingReducer from "./slices/editorIsLoadingSlice";
import editorDataReducer from "./slices/editorDataSlice";

export const store = configureStore({ 
    reducer: {
        inputBarFormSubmitStatus: inputBarFormSubmitReducer,
        editorFetchedData: editorFetchedDataReducer,
        editorIsLoading: editorIsLoadingReducer,
        editorData: editorDataReducer,

    }
});

export type RootState = ReturnType<typeof store.getState>; 
export type AppDispatch = typeof store.dispatch; 