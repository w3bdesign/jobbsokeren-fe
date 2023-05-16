import { configureStore } from "@reduxjs/toolkit";
import editorFetchedDataReducer from "./slices/editor/editorFetchedDataSlice";
import editorIsLoadingReducer from "./slices/editor/editorIsLoadingSlice";
import editorDataReducer from "./slices/editor/editorDataSlice";
import editorSubmitCountReducer from "./slices/editor/editorSubmitCountSlice";

export const store = configureStore({ 
    reducer: {
        editorFetchedData: editorFetchedDataReducer,
        editorIsLoading: editorIsLoadingReducer,
        editorData: editorDataReducer,
        editorSubmitCount: editorSubmitCountReducer

    }
});

export type RootState = ReturnType<typeof store.getState>; 
export type AppDispatch = typeof store.dispatch; 