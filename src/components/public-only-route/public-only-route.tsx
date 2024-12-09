import {useAppSelector} from '../../hooks';
import {AppRoute, AuthorizationStatus, Reducers} from '../../enums.ts';
import {Navigate} from 'react-router-dom';

type PublicOnlyRouteProps = {
  children: JSX.Element;
}

export function PublicOnlyRoute({children}: PublicOnlyRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state[Reducers.Auth].status);
  return (
    authorizationStatus !== AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.Root} />
  );
}
