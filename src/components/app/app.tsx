import MainScreen from '../../pages/main';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NotFound from '../../pages/not_found';
import Login from '../../pages/login';
import {AppRoute, AuthorizationStatus} from '../../../enums';
import PrivateRoute from '../private-route/private-route';
import Favorites from '../../pages/favorites';
import Offer from '../../types/offer.tsx';
import OfferDetailed from '../../pages/offer_detailed';
import {review} from '../../mocks/review.tsx';
import {offerCards} from '../../mocks/offer_cards.tsx';

type AppScreenProps = {
  offers: Offer[];
}

function App({offers}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainScreen offers={offers} /> }
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Favorites}
          element={<PrivateRoute authorizationStatus={AuthorizationStatus.Auth}><Favorites offers={offers}/></PrivateRoute> }
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
