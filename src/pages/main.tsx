import Logo from '../components/logo/logo';
import OffersList from '../components/offer-list/offer-list.tsx';
import {City} from '../types/city.ts';
import CitiesList from '../components/cities-list/cities-list.tsx';
import {useAppSelector} from '../hooks';
import Map from '../components/map/map.tsx';

type MainScreenProps = {
  cities: City[];
}

function Main({cities}: MainScreenProps): JSX.Element {
  const offers = useAppSelector((state) => state.offersList);
  const city = useAppSelector((state) => state.city);
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList cities={cities} />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <OffersList />
            <div className="cities__right-section">
              <Map city={city} offers={offers} view='cities' />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
