import {PayloadAction} from '@reduxjs/toolkit';
import browserHistory from '../../browser-history';
import {Middleware} from 'redux';
import {reducer} from '../reducer';

type Reducer = ReturnType<typeof reducer>;

export const redirectBack: Middleware<unknown, Reducer> =
  () =>
    (next) =>
      (action: PayloadAction<null>) => {
        if (action.type === 'server/redirectBack') {
          browserHistory.back();
        }

        return next(action);
      };
