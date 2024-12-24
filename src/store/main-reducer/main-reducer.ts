import {MainReducer} from '../../types/main-reducer.ts';
import {PARIS} from '../../consts/cities.ts';
import {createSlice} from '@reduxjs/toolkit';
import {changeFavourites, fetchFavorites, getOffers, logoutAction,} from '../api-actions.ts';
import {changeCity, changeSelectedOfferId, changeSort, changeSortsOpened, setError} from '../action.ts';
import {Reducers} from '../../types/reducer.ts';
import {OrderType} from '../../types/order-type.ts';
import Offer from '../../types/offer.ts';

const initialState: MainReducer = {
  city: PARIS,
  sortFilter: {
    filter: OrderType.Default
  },
  selectedOfferId: null,
  isOffersLoading: false,
  error: null,
  favoriteOffers: [],
  favoriteOffersCount: 0,
  offersList: [],
  sortsOpened: false,
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
      .addCase(getOffers.fulfilled, (state, action) => {
        state.offersList = action.payload;
        state.isOffersLoading = false;
      })
      .addCase(getOffers.pending, (state) => {
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
        if (action.payload.isFavorite) {
          state.favoriteOffers.push(action.payload as Offer);
          state.offersList.map((o) => {
            if (o.id === action.payload.id) {
              o.isFavorite = true;
            }
          });
          state.favoriteOffersCount++;
        } else {
          state.favoriteOffers = state.favoriteOffers.filter((o) => o.id !== action.payload.id);
          state.offersList.map((o) => {
            if (o.id === action.payload.id) {
              o.isFavorite = false;
            }
          });
          state.favoriteOffersCount--;
        }
      })
      .addCase(changeSortsOpened, (state) => {
        state.sortsOpened = !state.sortsOpened;
      }).addCase(logoutAction.fulfilled, (state) => {
        state.favoriteOffers = [];
        state.favoriteOffersCount = 0;
        state.offersList.forEach((o) => {
          o.isFavorite = false;
        });
      });
  },
});
