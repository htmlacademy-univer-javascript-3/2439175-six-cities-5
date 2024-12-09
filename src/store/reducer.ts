import {combineReducers} from '@reduxjs/toolkit';
import {Reducers} from '../enums.ts';
import {mainReducer} from './main-reducer/main-reducer.ts';
import {offerReducer} from './offer-reducer/offer-reducer.ts';
import {authReducer} from './auth-reducer/auth-reducer.ts';

export const reducer = combineReducers({
  [Reducers.Main]: mainReducer.reducer,
  [Reducers.Offer]: offerReducer.reducer,
  [Reducers.Auth]: authReducer.reducer,
});
