import {AuthorizationStatus} from '../enums.ts';
import {UserInfo} from './user-info.ts';

export type AuthReducer = {
  status: AuthorizationStatus;
  user: UserInfo | null;
};
