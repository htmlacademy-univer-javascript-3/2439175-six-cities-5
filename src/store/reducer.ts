import {createReducer} from '@reduxjs/toolkit';
import {PARIS} from '../mocks/city-coords.ts';
import {filterOffersByCity, sortOffers} from '../helpers.ts';
import {
  addOffers,
  changeCity,
  changeSelectedOfferId,
  changeSort,
  requireAuthorization,
  setOffersDataLoadingStatus
} from './action.ts';
import {City} from '../types/city.ts';
import Offer from '../types/offer.ts';
import {SortFilter} from '../types/sort-filter.ts';
import {AuthorizationStatus} from '../enums.ts';

type InitialState = {
  city: City;
  offersList: Offer[];
  sortFilter: SortFilter;
  selectedOfferId?: string;
  offers: Offer[];
  authorizationStatus: AuthorizationStatus;
  offersDataLoadingStatus: boolean;
}

const initialState : InitialState = {
  city: PARIS,
  sortFilter: {
    filter: 'default'
  },
  offersList: [],
  offers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  offersDataLoadingStatus: false,
};

const reducer = createReducer(
  initialState, (builder) => {
    builder.addCase(changeCity, (state, action) => {
      state.city = action.payload;
      state.offersList = sortOffers(filterOffersByCity(state.offers, state.city), state.sortFilter);
    })
      .addCase(addOffers, (state, action) => {
        state.offers = action.payload;
        state.offersList = sortOffers(filterOffersByCity(state.offers, state.city), state.sortFilter);
      })
      .addCase(changeSort, (state, action) => {
        state.sortFilter = action.payload;
        state.offersList = sortOffers(state.offersList, action.payload);
      })
      .addCase(changeSelectedOfferId, (state, action) => {
        state.selectedOfferId = action.payload;
      })
      .addCase(requireAuthorization, (state, action) => {
        state.authorizationStatus = action.payload;
      })
      .addCase(setOffersDataLoadingStatus, (state, action) => {
        state.offersDataLoadingStatus = action.payload;
      });
  }
);

export {reducer};
