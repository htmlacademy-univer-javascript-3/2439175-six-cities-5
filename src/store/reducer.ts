import {createReducer} from '@reduxjs/toolkit';
import {PARIS} from '../mocks/city-coords.ts';
import {
  addComments, addNearestOffers, addNewComment,
  addOffer,
  addOffers, addToFavorites, addUser,
  changeCity,
  changeSelectedOfferId,
  changeSort, deleteFromFavorites,
  requireAuthorization, setError, setOfferDataLoadingStatus,
  setOffersDataLoadingStatus, updateFavourites
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
  offerDataLoadingStatus: boolean;
  error: string | null;
  userInfo: UserInfo | null;
  offer: OfferDetailed | null;
  comments: Comment[];
  nearestOffers: Offer[];
  favouriteOffers: Offer[];
}

const initialState : InitialState = {
  city: PARIS,
  sortFilter: {
    filter: 'default'
  },
  offersList: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  offersDataLoadingStatus: false,
  offerDataLoadingStatus: false,
  error: null,
  userInfo: null,
  offer: null,
  comments: [],
  nearestOffers: [],
  favouriteOffers: [],
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
      })
      .addCase(updateFavourites, (state, action) => {
        state.favouriteOffers = action.payload;
      })
      .addCase(addNewComment, (state, action) => {
        state.comments.push(action.payload);
      })
      .addCase(addToFavorites, (state, action) => {
        state.favouriteOffers.push(action.payload);
        if (state.offer && state.offer.id === action.payload.id) {
          state.offer.isFavorite = true;
        }
        state.offersList.map((offer) => {
          if (offer.id === action.payload.id) {
            offer.isFavorite = true;
          }
        });
      })
      .addCase(deleteFromFavorites, (state, action) => {
        state.favouriteOffers = state.favouriteOffers.filter((offer) => offer.id !== action.payload.id);
        if (state.offer && state.offer.id === action.payload.id) {
          state.offer.isFavorite = false;
        }
        state.offersList.map((offer) => {
          if (offer.id === action.payload.id) {
            offer.isFavorite = false;
          }
        });
      })
      .addCase(setOfferDataLoadingStatus, (state, action) => {
        state.offerDataLoadingStatus = action.payload;
      });
  }
);

export {reducer};
