import {Navigate} from 'react-router-dom';
import {useAppSelector} from '../../hooks';
import {Reducers} from '../../types/reducer.ts';
import {AuthorizationStatus} from '../../types/authorization-status.ts';
import {AppRoute} from '../../types/app-route.ts';

type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute({children}: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state[Reducers.Auth].status);
  return (
    authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
