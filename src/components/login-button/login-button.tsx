import {useAppDispatch, useAppSelector} from '../../hooks';
import {Link} from 'react-router-dom';
import {logoutAction} from '../../store/api-actions.ts';
import {Reducers} from '../../types/reducer.ts';
import {AuthorizationStatus} from '../../types/authorization-status.ts';

export function LoginButton(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state[Reducers.Auth].status);
  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;
  const dispatch = useAppDispatch();
  if (!isAuthorized) {
    return (
      <Link to={'/login'}>
        <span className="header__signout">Sign in</span>
      </Link>
    );
  }
  return (
    <a className="header__nav-link" href="#">
      <span className="header__signout" onClick={(evt) => {
        evt.preventDefault();
        dispatch(logoutAction());
      }}
      >Sign out
      </span>
    </a>
  );
}
