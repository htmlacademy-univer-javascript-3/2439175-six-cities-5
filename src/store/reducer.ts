import {createReducer} from '@reduxjs/toolkit';
import {PARIS} from '../mocks/city-coords.ts';
import {filterOffersByCity, sortOffers} from '../helpers.ts';
import {offerCards} from '../mocks/offer-cards.ts';
import {addOffers, changeCity, changeSelectedOfferId, changeSort} from './action.ts';
import {City} from '../types/city.ts';
import Offer from '../types/offer.ts';
import {SortFilter} from '../types/sort-filter.ts';

const initialState : {city: City; offersList: Offer[]; sortFilter: SortFilter; selectedOfferId?: number} = {
  city: PARIS,
  sortFilter: {
    filter: 'default'
  },
  offersList: sortOffers(filterOffersByCity(offerCards, PARIS), {filter: 'default'}),
};

const reducer = createReducer(
  initialState, (builder) => {
    builder.addCase(changeCity, (state, action) => {
      state.city = action.payload.city;
      state.offersList = sortOffers(filterOffersByCity(offerCards, state.city), state.sortFilter);
    })
      .addCase(addOffers, (state, action) => {
        state.offersList = action.payload.offers;
      })
      .addCase(changeSort, (state, action) => {
        state.sortFilter = action.payload.sort;
        state.offersList = sortOffers(state.offersList, action.payload.sort);
      })
      .addCase(changeSelectedOfferId, (state, action) => {
        state.selectedOfferId = action.payload.id;
      });
  }
);

export {reducer};
