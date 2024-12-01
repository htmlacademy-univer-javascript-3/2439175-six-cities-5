import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.ts';
import {AxiosInstance} from 'axios';
import Offer from '../types/offer.ts';
import {
  addComments, addNearestOffers,
  addOffer,
  addOffers,
  addUser, redirectBack,
  requireAuthorization,
  setError,
  setOffersDataLoadingStatus
} from './action.ts';
import {APIRoute, AuthorizationStatus} from '../enums.ts';
import {AuthData} from '../types/auth-data.ts';
import {UserData} from '../types/user-data.ts';
import {dropToken, saveToken} from '../services/token.ts';
import {TIMEOUT_SHOW_ERROR} from '../consts/integer-consts.ts';
import {store} from './index.ts';
import {UserInfo} from '../types/user-info.ts';
import Comment from '../types/comment.ts';
import {OfferDetailed} from '../types/offer-detailed.ts';
import {SendCommentData} from '../types/send-comment-data.ts';


export const clearErrorAction = createAsyncThunk(
  'game/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<Offer[]>(APIRoute.Offers);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(addOffers(data));
  }
);

export const fetchOfferAction = createAsyncThunk<void, {offerId: string | undefined}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffer',
  async ({offerId}, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<OfferDetailed>(`/offers/${offerId}`);
      dispatch(addOffer(data));
    } catch {
      dispatch(addOffer(null));
    }
  }
);

export const fetchOffersNearby = createAsyncThunk<void, {offerId: string | undefined}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchComments',
  async ({offerId}, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Offer[]>(`offers/${offerId}/nearby`);
      dispatch(addNearestOffers(data));
    } catch {
      dispatch(addNearestOffers([]));
    }
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data: {email, avatar, name, isPro}} = await api.get<UserInfo>(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(addUser({email, avatar, name, isPro}));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
      dispatch(addUser(null));
    }
  }
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    try {
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(redirectBack());
    } catch { /* empty */ }
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
);

export const fetchComments = createAsyncThunk<void, {offerId: string | undefined}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchComments',
  async ({offerId}, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Comment[]>(`comments/${offerId}`);
      dispatch(addComments(data));
    } catch {
      dispatch(addComments([]));
    }
  }
);

export const addComment = createAsyncThunk<void, {comment: SendCommentData; offerId: string | undefined}, {
  state: State;
  extra: AxiosInstance;
}>(
  'data/addComment',
  async ({comment, offerId}, {extra: api}) => {
    await api.post<SendCommentData>(`comments/${offerId}`, comment);
  }
);
