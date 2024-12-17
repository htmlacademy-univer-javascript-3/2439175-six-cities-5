import {filterOffersByCity, SliceOptionally, sortByCreationTime, sortOffers} from '../helpers.ts';
import {createSelector} from '@reduxjs/toolkit';
import {reducer} from './reducer.ts';
import {Reducers} from '../types/reducer.ts';
import {MAX_COMMENTS_COUNT, MAX_OFFERS_NEARBY_COUNT} from '../consts/integer-consts.ts';

const getOffersList = (state: ReturnType<typeof reducer>) => state[Reducers.Main].offersList;
const getCity = (state: ReturnType<typeof reducer>) => state[Reducers.Main].city;
const getSortFilter = (state: ReturnType<typeof reducer>) => state[Reducers.Main].sortFilter;
const getComments = (state: ReturnType<typeof reducer>) => state[Reducers.Offer].comments;
const getOffersNearby = (state: ReturnType<typeof reducer>) => state[Reducers.Offer].offersNearby;

export const getSortedOffers = createSelector(
  [getOffersList, getCity, getSortFilter],
  (offersList, city, sortFilter) => sortOffers(filterOffersByCity(offersList, city), sortFilter)
);

export const getFilteredOffers = createSelector(
  [getOffersList, getCity],
  (offersList, city) => filterOffersByCity(offersList, city));

export const getSortedComments = createSelector(
  [getComments],
  (comments) => sortByCreationTime(SliceOptionally(MAX_COMMENTS_COUNT, [...comments])));

export const getOffersNearbySliced = createSelector(
  [getOffersNearby],
  (offers) => SliceOptionally(MAX_OFFERS_NEARBY_COUNT, offers));
