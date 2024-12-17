import {UserInfo} from './user-info.ts';
import {AuthorizationStatus} from './authorization-status.ts';

export type AuthReducer = {
  status: AuthorizationStatus;
  user: UserInfo | null;
};
