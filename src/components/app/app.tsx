import Main from '../../pages/main';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NotFound from '../../pages/not-found.tsx';
import Login from '../../pages/login';
import {AppRoute, AuthorizationStatus} from '../../enums.ts';
import PrivateRoute from '../private-route/private-route';
import Favorites from '../../pages/favorites';
import OfferDetailed from '../../pages/offer-detailed.tsx';
import {review} from '../../mocks/review.ts';
import {offerCards} from '../../mocks/offer-cards.ts';
import {CITIES} from '../../mocks/city-coords.ts';
import {useAppSelector} from '../../hooks';
import {Spinner} from '../../pages/spinner/spinner.tsx';

function App(): JSX.Element {
  const authorizationStatus = AuthorizationStatus.NoAuth;
  const dataOffersLoadingStatus = useAppSelector((state) => state.offersDataLoadingStatus);

  if (dataOffersLoadingStatus) {
    return (
      <Spinner />
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<Main cities={CITIES} /> }
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Favorites}
          element={<PrivateRoute authorizationStatus={authorizationStatus}><Favorites offers={offerCards}/></PrivateRoute> }
        />
        <Route
          path={AppRoute.OfferWithId}
          element={<OfferDetailed reviews={[review]} nearestHotels={offerCards.slice(1)}/>}
        />
        <Route
          path={'*'}
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
