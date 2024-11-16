import {createAction} from '@reduxjs/toolkit';
import Offer from '../types/offer.ts';
import {City} from '../types/city.ts';
import {SortFilter} from '../types/sort-filter.ts';

export const changeCity = createAction<{city: City}>('changeCity');

export const addOffers = createAction<{offers: Offer[]}>('addOffers');

export const changeSort = createAction<{sort: SortFilter}>('changeSort');

export const changeSelectedOfferId = createAction<{id: number}>('changeSelectedOfferId');
