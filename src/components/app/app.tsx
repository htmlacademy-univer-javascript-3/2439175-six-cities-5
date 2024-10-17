import MainScreen from '../../pages/main';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NotFound from '../../pages/not_found';
import Login from '../../pages/login';
import Offer from '../../pages/offer';
import {AppRoute, AuthorizationStatus} from '../../../constants';
import PrivateRoute from '../private-route/private-route';
import Favorites from '../../pages/favorites';

type AppScreenPros = {
  offersAmount: number;
}

function App({offersAmount}: AppScreenPros): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainScreen offersAmount={offersAmount} /> }
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Favorites}
          // element={<PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth} children={<Favorites />} />}
          element={<PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}><Favorites /></PrivateRoute> }
        />
        <Route
          path={AppRoute.OfferWithId}
          element={<Offer />}
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
