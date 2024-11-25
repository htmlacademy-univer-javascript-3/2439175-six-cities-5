import {createAction} from '@reduxjs/toolkit';
import Offer from '../types/offer.ts';
import {City} from '../types/city.ts';
import {SortFilter} from '../types/sort-filter.ts';
import {AuthorizationStatus} from '../enums.ts';

export const changeCity = createAction<City>('user/changeCity');

export const addOffers = createAction<Offer[]>('data/addOffers');

export const changeSort = createAction<SortFilter>('user/changeSort');

export const changeSelectedOfferId = createAction<string>('user/changeSelectedOfferId');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');