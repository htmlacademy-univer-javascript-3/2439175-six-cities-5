import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.ts';
import {AxiosInstance} from 'axios';
import Offer from '../types/offer.ts';
import {AuthData} from '../types/auth-data.ts';
import {UserData} from '../types/user-data.ts';
import {UserInfo} from '../types/user-info.ts';
import Comment from '../types/comment.ts';
import {OfferDetailed} from '../types/offer-detailed.ts';
import {SendCommentData} from '../types/send-comment-data.ts';
import {APIRoute} from '../types/api-route.ts';

export const getOffers = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Offer[]>(APIRoute.Offers);
    return data;
  }
);

export const fetchOfferAction = createAsyncThunk<OfferDetailed, {offerId: string | undefined}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffer',
  async ({offerId}, {extra: api}) => {
    const {data} = await api.get<OfferDetailed>(`/offers/${offerId}`);
    return data;
  }
);

export const fetchOffersNearby = createAsyncThunk<Offer[], {offerId: string | undefined}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffersNearby',
  async ({offerId}, {extra: api}) => {
    const {data} = await api.get<Offer[]>(`offers/${offerId}/nearby`);
    return data;
  }
);

export const checkAuthAction = createAsyncThunk<UserInfo, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<UserInfo>(APIRoute.Login);
    return data;
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
  }
);

export const fetchComments = createAsyncThunk<Comment[], {offerId: string | undefined}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchComments',
  async ({offerId}, {extra: api}) => {
    const {data} = await api.get<Comment[]>(`comments/${offerId}`);
    return data;
  }
);

export const addComment = createAsyncThunk<Comment, {comment: SendCommentData; offerId: string | undefined}, {
  state: State;
  extra: AxiosInstance;
}>(
  'data/addComment',
  async ({comment, offerId}, {extra: api}) => {
    const {data} = await api.post<Comment>(`comments/${offerId}`, comment);
    return data;
  }
);

export const fetchFavorites = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/getFavorites',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Offer[]>(APIRoute.Favorite);
    return data;
  }
);

export const changeFavourites = createAsyncThunk<OfferDetailed | Offer, {offerId: string | undefined; status: 0 | 1}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/changeFavourites',
  async ({offerId, status}, {extra: api}) => {
    const {data} = await api.post<OfferDetailed>(`/favorite/${offerId}/${status}`);
    return data;
  }
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email, password}, {extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    return data;
  },
);
