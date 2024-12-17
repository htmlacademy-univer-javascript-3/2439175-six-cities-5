import {AuthReducer} from '../../types/auth-reducer.ts';
import {createSlice} from '@reduxjs/toolkit';
import {checkAuthAction, loginAction, logoutAction} from '../api-actions.ts';
import {dropToken, saveToken} from '../../services/token.ts';
import {AuthorizationStatus} from '../../types/authorization-status.ts';
import {Reducers} from '../../types/reducer.ts';

const initialState: AuthReducer = {
  status: AuthorizationStatus.Unknown,
  user: null,
};

export const authReducer = createSlice({
  name: Reducers.Auth,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(logoutAction.fulfilled, (state) => {
        dropToken();
        state.user = null;
        state.status = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        saveToken(action.payload.token);
        state.user = {
          avatar: action.payload.avatarUrl,
          name: action.payload.name,
          isPro: action.payload.isPro,
          email: action.payload.email,
        };
        state.status = AuthorizationStatus.Auth;
      })
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = AuthorizationStatus.Auth;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.status = AuthorizationStatus.NoAuth;
      });
  },
});
