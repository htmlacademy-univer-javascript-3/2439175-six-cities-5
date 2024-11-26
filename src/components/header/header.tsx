import Logo from '../logo/logo.tsx';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {AuthorizationStatus} from '../../enums.ts';
import {Link} from 'react-router-dom';
import {logoutAction} from '../../store/api-actions.ts';

export function Header(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;
  const dispatch = useAppDispatch();
  const signButton = !isAuthorized ? (
    <Link to={'/login'}>
      <span className="header__signout">Sign in</span>
    </Link>
  ) : (
    <a className="header__nav-link" href="#">
      <span className="header__signout" onClick={(evt) => {
        evt.preventDefault();
        dispatch(logoutAction());
      }}
      >Sign out
      </span>
    </a>
  );
  const userInfo = useAppSelector((state) => state.userInfo);
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo/>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {isAuthorized && userInfo !== null &&
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">{userInfo.email}</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>}
              <li className="header__nav-item">
                {signButton}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
