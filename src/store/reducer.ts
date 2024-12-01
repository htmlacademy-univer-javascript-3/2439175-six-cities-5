import {createReducer} from '@reduxjs/toolkit';
import {PARIS} from '../mocks/city-coords.ts';
import {
  addComments, addNearestOffers,
  addOffer,
  addOffers, addUser,
  changeCity,
  changeSelectedOfferId,
  changeSort,
  requireAuthorization, setError,
  setOffersDataLoadingStatus
} from './action.ts';
import {City} from '../types/city.ts';
import Offer from '../types/offer.ts';
import {SortFilter} from '../types/sort-filter.ts';
import {AuthorizationStatus} from '../enums.ts';
import {UserInfo} from '../types/user-info.ts';
import {OfferDetailed} from '../types/offer-detailed.ts';
import Comment from '../types/comment.ts';

export type InitialState = {
  city: City;
  offersList: Offer[];
  sortFilter: SortFilter;
  selectedOfferId?: string;
  authorizationStatus: AuthorizationStatus;
  offersDataLoadingStatus: boolean;
  error: string | null;
  userInfo: UserInfo | null;
  offer: OfferDetailed | null;
  comments: Comment[];
  nearestOffers: Offer[];
}

const initialState : InitialState = {
  city: PARIS,
  sortFilter: {
    filter: 'default'
  },
  offersList: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  offersDataLoadingStatus: false,
  error: null,
  userInfo: null,
  offer: null,
  comments: [],
  nearestOffers: [],
};

const reducer = createReducer(
  initialState, (builder) => {
    builder.addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
      .addCase(addOffers, (state, action) => {
        state.offersList = action.payload;
      })
      .addCase(changeSort, (state, action) => {
        state.sortFilter = action.payload;
      })
      .addCase(changeSelectedOfferId, (state, action) => {
        state.selectedOfferId = action.payload;
      })
      .addCase(requireAuthorization, (state, action) => {
        state.authorizationStatus = action.payload;
      })
      .addCase(setOffersDataLoadingStatus, (state, action) => {
        state.offersDataLoadingStatus = action.payload;
      })
      .addCase(setError, (state, action) => {
        state.error = action.payload;
      })
      .addCase(addUser, (state, action) => {
        state.userInfo = action.payload;
      })
      .addCase(addOffer, (state, action) => {
        state.offer = action.payload;
      })
      .addCase(addComments, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(addNearestOffers, (state, action) => {
        state.nearestOffers = action.payload;
      });
  }
);

export {reducer};
