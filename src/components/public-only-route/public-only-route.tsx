import {useAppSelector} from '../../hooks';
import {AppRoute, AuthorizationStatus} from '../../enums.ts';
import {Navigate} from 'react-router-dom';

type PublicOnlyRouteProps = {
  children: JSX.Element;
}

export function PublicOnlyRoute({children}: PublicOnlyRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  return (
    authorizationStatus !== AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.Root} />
  );
}
