import {combineReducers} from '@reduxjs/toolkit';
import {mainReducer} from './main-reducer/main-reducer.ts';
import {offerReducer} from './offer-reducer/offer-reducer.ts';
import {authReducer} from './auth-reducer/auth-reducer.ts';
import {Reducers} from '../types/reducer.ts';

export const reducer = combineReducers({
  [Reducers.Main]: mainReducer.reducer,
  [Reducers.Offer]: offerReducer.reducer,
  [Reducers.Auth]: authReducer.reducer,
});
