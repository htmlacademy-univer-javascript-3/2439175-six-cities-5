import Logo from '../logo/logo.tsx';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {AppRoute, AuthorizationStatus, Reducers} from '../../enums.ts';
import {LoginButton} from '../login-button/login-button.tsx';
import {Link} from 'react-router-dom';
import {fetchFavorites} from '../../store/api-actions.ts';

export function Header(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state[Reducers.Auth].status);
  const dispatch = useAppDispatch();
  dispatch(fetchFavorites());
  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;
  const userInfo = useAppSelector((state) => state[Reducers.Auth].user);
  const favoriteOffersCount = useAppSelector((state) => state[Reducers.Main].favoriteOffersCount);
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
                  <Link to={AppRoute.Favorites}>
                    <div className="header__nav-link header__nav-link--profile">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">{userInfo.email}</span>
                      <span className="header__favorite-count">{favoriteOffersCount}</span>
                    </div>
                  </Link>
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
