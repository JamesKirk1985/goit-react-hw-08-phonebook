import { createSlice } from '@reduxjs/toolkit';
import {
  loginThunk,
  refreshUserThunk,
  signUpThunk,
  logoutThunk,
} from './authOperations';

const initialState = {
  token: '',
  profile: {},
  isLoggedIn: false,
  isLoading: false,
  // isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: state => {
      state.token = '';
      state.profile = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(signUpThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(signUpThunk.fulfilled, (state, action) => {
        state.profile = action.payload.user;
        state.token = action.payload.token;
        state.isRefreshing = true;
        state.isLoading = false;
      })
      .addCase(signUpThunk.rejected, state => {
        state.isLoading = false;
      })

      .addCase(loginThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.profile = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(loginThunk.rejected, state => {
        state.isLoading = false;
      })

      .addCase(logoutThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(logoutThunk.fulfilled, state => {
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(logoutThunk.rejected, state => {
        state.isLoading = false;
      })

      .addCase(refreshUserThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(refreshUserThunk.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(refreshUserThunk.rejected, state => {
        state.isLoading = false;
      });
  },
});

export const authReducer = authSlice.reducer;
export const { logout } = authSlice.actions;
