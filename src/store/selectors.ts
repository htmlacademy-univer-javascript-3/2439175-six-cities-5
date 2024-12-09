import {filterOffersByCity, sortOffers} from '../helpers.ts';
import {createSelector} from '@reduxjs/toolkit';
import {reducer} from './reducer.ts';
import {Reducers} from '../enums.ts';

const getOffersList = (state: ReturnType<typeof reducer>) => state[Reducers.Main].offersList;
const getCity = (state: ReturnType<typeof reducer>) => state[Reducers.Main].city;
const getSortFilter = (state: ReturnType<typeof reducer>) => state[Reducers.Main].sortFilter;

export const getSortedOffers = createSelector(
  [getOffersList, getCity, getSortFilter],
  (offersList, city, sortFilter) => sortOffers(filterOffersByCity(offersList, city), sortFilter)
);

export const getFilteredOffers = createSelector(
  [getOffersList, getCity],
  (offersList, city) => filterOffersByCity(offersList, city));
