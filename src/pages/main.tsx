import OffersList from '../components/offer-list/offer-list.tsx';
import CitiesList from '../components/cities-list/cities-list.tsx';
import {useAppSelector} from '../hooks';
import Map from '../components/map/map.tsx';
import {Header} from '../components/header/header.tsx';
import {getFilteredOffers} from '../store/selectors.ts';

function Main(): JSX.Element {
  const offers = useAppSelector(getFilteredOffers);
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <OffersList />
            <div className="cities__right-section">
              <Map offers={offers} view='cities' />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
