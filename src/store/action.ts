import {createAction} from '@reduxjs/toolkit';
import Offer from '../types/offer.ts';
import {City} from '../types/city.ts';
import {SortFilter} from '../types/sort-filter.ts';
import {AuthorizationStatus} from '../enums.ts';
import {UserInfo} from '../types/user-info.ts';
import {OfferDetailed} from '../types/offer-detailed.ts';
import Comment from '../types/comment.ts';

export const changeCity = createAction<City>('user/changeCity');

export const addOffers = createAction<Offer[]>('data/addOffers');

export const changeSort = createAction<SortFilter>('user/changeSort');

export const changeSelectedOfferId = createAction<string>('user/changeSelectedOfferId');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const setError = createAction<string | null>('data/setError');

export const addUser = createAction<UserInfo | null>('server/addUser');

export const addOffer = createAction<OfferDetailed | null>('server/addOffer');

export const addComments = createAction<Comment[]>('server/addComments');

export const addNearestOffers = createAction<Offer[]>('server/addNearestOffers');

export const redirectBack = createAction('server/redirectBack');
