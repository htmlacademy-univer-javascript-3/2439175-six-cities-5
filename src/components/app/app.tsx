import Main from '../../pages/main';
import {Route, Routes} from 'react-router-dom';
import NotFound from '../../pages/not-found.tsx';
import Login from '../../pages/login';
import {AppRoute, AuthorizationStatus} from '../../enums.ts';
import PrivateRoute from '../private-route/private-route';
import Favorites from '../../pages/favorites';
import OfferDetailed from '../../pages/offer-detailed.tsx';
import {offerCards} from '../../mocks/offer-cards.ts';
import {useAppSelector} from '../../hooks';
import {Spinner} from '../../pages/spinner/spinner.tsx';
import {PublicOnlyRoute} from '../public-only-route/public-only-route.tsx';
import HistoryRouter from '../history-route/history-route.tsx';
import browserHistory from '../../browser-history.ts';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const dataOffersLoadingStatus = useAppSelector((state) => state.offersDataLoadingStatus);

  if (authorizationStatus === AuthorizationStatus.Unknown || dataOffersLoadingStatus) {
    return (
      <Spinner />
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<Main /> }
        />
        <Route
          path={AppRoute.Login}
          element={<PublicOnlyRoute><Login /></PublicOnlyRoute>}
        />
        <Route
          path={AppRoute.Favorites}
          element={<PrivateRoute><Favorites offers={offerCards}/></PrivateRoute> }
        />
        <Route
          path={AppRoute.OfferWithId}
          element={<OfferDetailed />}
        />
        <Route
          path={'*'}
          element={<NotFound />}
        />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
