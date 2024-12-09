import {store} from '../store';
import {setError} from '../store/action';
import {TIMEOUT_SHOW_ERROR} from '../consts/integer-consts.ts';

export const processErrorHandle = (message: string): void => {
  store.dispatch(setError(message));
  setTimeout(
    () => store.dispatch(setError(null)),
    TIMEOUT_SHOW_ERROR,
  );
};
