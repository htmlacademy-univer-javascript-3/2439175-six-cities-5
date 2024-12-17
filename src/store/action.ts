import {createAction} from '@reduxjs/toolkit';
import {City} from '../types/city.ts';
import {SortFilter} from '../types/sort-filter.ts';

export const changeCity = createAction<City>('user/changeCity');

export const changeSort = createAction<SortFilter>('user/changeSort');

export const changeSelectedOfferId = createAction<string>('user/changeSelectedOfferId');

export const setError = createAction<string | null>('data/setError');

export const changeSortsOpened = createAction('user/changeSortsOpened');
