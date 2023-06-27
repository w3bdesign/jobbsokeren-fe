import { configureStore } from '@reduxjs/toolkit';

import authReducer from './slices/authentication/authSlice';
import editorDataReducer from './slices/editor/editorDataSlice';
import editorFetchedDataReducer from './slices/editor/editorFetchedDataSlice';
import editorIsLoadingReducer from './slices/editor/editorIsLoadingSlice';
import editorSubmitCountReducer from './slices/editor/editorSubmitCountSlice';


export const store = configureStore({ 
    reducer: {
        editorFetchedData: editorFetchedDataReducer,
        editorIsLoading: editorIsLoadingReducer,
        editorData: editorDataReducer,
        editorSubmitCount: editorSubmitCountReducer,
        auth: authReducer

    },
        middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
        serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>; 
export type AppDispatch = typeof store.dispatch; 