import Logo from '../logo/logo.tsx';
import {useAppSelector} from '../../hooks';
import {AuthorizationStatus} from '../../enums.ts';
import {LoginButton} from '../login-button/login-button.tsx';
import {store} from '../../store';
import {getFavorites} from '../../store/api-actions.ts';
import {useEffect} from 'react';

export function Header(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;
  const userInfo = useAppSelector((state) => state.userInfo);
  useEffect(() => {
    store.dispatch(getFavorites());
  }, [authorizationStatus]);
  const favouriteOffers = useAppSelector((state) => state.favouriteOffers);
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
                    <span className="header__favorite-count">{favouriteOffers.length}</span>
                  </a>
                </li>}
              <li className="header__nav-item">
                <LoginButton/>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
