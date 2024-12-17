import {Header} from '../components/header/header.tsx';
import {useAppSelector} from '../hooks';
import FavoritesEmpty from './favorites-empty.tsx';
import {CITIES} from '../consts/cities.ts';
import {filterOffersByCity} from '../helpers.ts';
import {Footer} from '../components/footer/footer.tsx';
import {FavoritesOffersByCity} from '../components/favorites/favorites-by-city.tsx';
import {Navigate} from 'react-router-dom';
import {Reducers} from '../types/reducer.ts';
import {AuthorizationStatus} from '../types/authorization-status.ts';
import {AppRoute} from '../types/app-route.ts';

function Favorites(): JSX.Element {
  const authStatus = useAppSelector((state) => state[Reducers.Auth].status);
  const favorites = useAppSelector((state) => state[Reducers.Main].favoriteOffers);
  if (favorites.length === 0) {
    return <FavoritesEmpty />;
  }

  if (authStatus !== AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.Login} />;
  }

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {CITIES.map((city) => {
                const filteredByCurrentCity = filterOffersByCity(favorites, city);
                if (filteredByCurrentCity.length !== 0) {
                  return (<FavoritesOffersByCity offers={filteredByCurrentCity} city={city} key={city.name} />);
                }
              })}
            </ul>
          </section>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default Favorites;
