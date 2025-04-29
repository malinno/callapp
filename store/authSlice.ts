import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  token: string | null;
  role: string | null;
  user: any | null;
}

const initialState: AuthState = {
  token: null,
  role: null,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<AuthState>) => {
      state.token = action.payload.token;
      state.role = action.payload.role;
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.token = null;
      state.role = null;
      state.user = null;
    },
  },
});

export const { setAuth, logout } = authSlice.actions;
export default authSlice.reducer;
