import {configureStore} from '@reduxjs/toolkit';
import {reducer} from './reducer.ts';
import {CreateAPI} from '../services/api.ts';
import {redirectBack} from './middlewares/redirect-back.ts';

export const api = CreateAPI();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirectBack)
});
