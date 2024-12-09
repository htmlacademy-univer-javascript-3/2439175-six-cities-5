import {filterOffersByCity, sortOffers} from '../helpers.ts';
import {createSelector} from '@reduxjs/toolkit';
import {InitialState} from './reducer.ts';

const getOffersList = (state: InitialState) => state.offersList;
const getCity = (state: InitialState) => state.city;
const getSortFilter = (state: InitialState) => state.sortFilter;

export const getSortedOffers = createSelector(
  [getOffersList, getCity, getSortFilter],
  (offersList, city, sortFilter) => sortOffers(filterOffersByCity(offersList, city), sortFilter)
);

export const getFilteredOffers = createSelector(
  [getOffersList, getCity],
  (offersList, city) => filterOffersByCity(offersList, city));
