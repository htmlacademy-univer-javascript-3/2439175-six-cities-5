import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.ts';
import {AxiosInstance} from 'axios';
import Offer from '../types/offer.ts';
import {
  addComments,
  addNearestOffers,
  addNewComment,
  addOffer,
  addOffers,
  addToFavorites,
  addUser,
  deleteFromFavorites,
  redirectBack,
  redirectToRoute,
  requireAuthorization,
  setError,
  setOfferDataLoadingStatus,
  setOffersDataLoadingStatus,
  updateFavourites
} from './action.ts';
import {APIRoute, AppRoute, AuthorizationStatus} from '../enums.ts';
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
  'data/clearError',
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
    dispatch(setOfferDataLoadingStatus(true));
    const {data} = await api.get<OfferDetailed>(`/offers/${offerId}`);
    dispatch(addOffer(data));
    dispatch(setOfferDataLoadingStatus(false));
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
    dispatch(addUser(null));
    dispatch(updateFavourites([]));
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
  async ({comment, offerId}, {dispatch, extra: api}) => {
    const {data} = await api.post<Comment>(`comments/${offerId}`, comment);
    dispatch(addNewComment(data));
  }
);

export const getFavorites = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/getFavorites',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Offer[]>(APIRoute.Favorite);
      dispatch(updateFavourites(data));
    } catch {
      dispatch(updateFavourites([]));
    }
  }
);

export const changeFavourites = createAsyncThunk<void, {offerId: string | undefined; status: 0 | 1}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/changeFavourites',
  async ({offerId, status}, {dispatch, extra: api}) => {
    try {
      const {data} = await api.post<Offer>(`/favorite/${offerId}/${status}`);
      if (status === 1) {
        dispatch(addToFavorites(data));
      } else {
        dispatch(deleteFromFavorites(data));
      }
    } catch (e) {
      if (e.status === 401) {
        dispatch(redirectToRoute(AppRoute.Login));
      }
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
    const {data: {isPro, name, avatarUrl, token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(addUser({isPro, name, email, avatar: avatarUrl}));
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectBack());
  },
);
