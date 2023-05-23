import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FirebaseUser } from '@/models/firebaseUserModel';


  
  interface AuthState {
    user: FirebaseUser | null;
    loading: boolean;
    error: string | null;
  }
  
  const initialState: AuthState = {
    user: null,
    loading: false,
    error: null,
  };
  
  const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      loginStart: (state) => {
        state.loading = true;
        state.error = null;
      },
      loginSuccess: (state, action: PayloadAction<FirebaseUser>) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      },
      loginFailure: (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.user = null;
        state.error = action.payload;
      },
      logout: (state) => {
        state.user = null;
      },
    },
  });
  
  export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;
  
  export default authSlice.reducer;
  
  
