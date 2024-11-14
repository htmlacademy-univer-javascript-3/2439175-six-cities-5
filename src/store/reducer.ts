import {createReducer} from '@reduxjs/toolkit';
import {PARIS} from '../mocks/city-coords.ts';
import {filterOffersByCity} from '../helpers.ts';
import {offerCards} from '../mocks/offer-cards.ts';
import {addOffers, changeCity} from './action.ts';

const initialState = {
  city: PARIS,
  offersList: filterOffersByCity(offerCards, PARIS)
};

const reducer = createReducer(
  initialState, (builder) => {
    builder.addCase(changeCity, (state, action) => {
      state.city = action.payload.city;
      state.offersList = filterOffersByCity(offerCards, state.city);
    })
      .addCase(addOffers, (state, action) => {
        state.offersList = action.payload.offers;
      });
  }
);

export {reducer};
