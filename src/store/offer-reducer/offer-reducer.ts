import {OfferReducer} from '../../types/offer-reducer.ts';
import {createSlice} from '@reduxjs/toolkit';
import {
  addComment,
  changeFavourites,
  fetchComments,
  fetchOfferAction,
  fetchOffersNearby
} from '../api-actions.ts';
import {Reducers} from '../../types/reducer.ts';


const initialState: OfferReducer = {
  offer: null,
  offersNearby: [],
  comments: [],
  isLoading: false,
};

export const offerReducer = createSlice({
  name: Reducers.Offer,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOfferAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(fetchOffersNearby.fulfilled, (state, action) => {
        state.offersNearby = action.payload;
      })
      .addCase(changeFavourites.fulfilled, (state, action) => {
        state.offer = action.payload;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        state.comments.push(action.payload);
      });
  },
});
