import {MainReducer} from '../../types/main-reducer.ts';
import {PARIS} from '../../mocks/city-coords.ts';
import {createSlice} from '@reduxjs/toolkit';
import {Reducers} from '../../enums.ts';
import {
  changeFavourites,
  fetchFavorites,
  fetchOffersAction,
} from '../api-actions.ts';
import {changeCity, changeSelectedOfferId, changeSort, setError} from '../action.ts';

const initialState: MainReducer = {
  city: PARIS,
  sortFilter: {
    filter: 'default'
  },
  selectedOfferId: null,
  isOffersLoading: false,
  error: null,
  favoriteOffers: [],
  favoriteOffersCount: 0,
  offersList: [],
};

export const mainReducer = createSlice({
  name: Reducers.Main,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(changeCity, (state, action) => {
        state.city = action.payload;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offersList = action.payload;
        state.isOffersLoading = false;
      })
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersLoading = true;
      })
      .addCase(changeSort, (state, action) => {
        state.sortFilter = action.payload;
      })
      .addCase(changeSelectedOfferId, (state, action) => {
        state.selectedOfferId = action.payload;
      })
      .addCase(setError, (state, action) => {
        state.error = action.payload;
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
        state.favoriteOffersCount = action.payload.length;
      })
      .addCase(changeFavourites.fulfilled, (state, action) => {
        state.offersList.forEach((offer) => {
          if (offer.id === action.payload.id) {
            offer.isFavorite = action.payload.isFavorite;
          }
        });
      });
  },
});
