import OffersList from '../components/offer-list/offer-list.tsx';
import CitiesList from '../components/cities-list/cities-list.tsx';
import {useAppSelector} from '../hooks';
import Map from '../components/map/map.tsx';
import {Header} from '../components/header/header.tsx';
import {getFilteredOffers} from '../store/selectors.ts';
import MainEmpty from './main-empty.tsx';
import {Spinner} from './spinner/spinner.tsx';
import {Reducers} from '../types/reducer.ts';

function Main(): JSX.Element {
  const dataOffersLoadingStatus =
    useAppSelector((state) => state[Reducers.Main].isOffersLoading);
  const offers = useAppSelector(getFilteredOffers);

  if (dataOffersLoadingStatus) {
    return (
      <Spinner />
    );
  }

  if (!offers) {
    return (
      <MainEmpty />
    );
  }
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
              <Map view='cities' />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
