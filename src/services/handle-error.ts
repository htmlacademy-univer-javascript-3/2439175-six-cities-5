import {store} from '../store';
import {setError} from '../store/action.ts';
import {TIMEOUT_SHOW_ERROR} from '../consts/integer-consts.ts';

export const processErrorHandle = (msg: string): void => {
  store.dispatch(setError(msg));
  setTimeout(() => store.dispatch(setError(null)), TIMEOUT_SHOW_ERROR);
};
