import {createAction} from '@reduxjs/toolkit';
import Offer from '../types/offer.ts';
import {City} from '../types/city.ts';

export const changeCity = createAction<{city: City}>('changeCity');

export const addOffers = createAction<{offers: Offer[]}>('addOffers');
