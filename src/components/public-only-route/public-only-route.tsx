import {useAppSelector} from '../../hooks';
import {Navigate} from 'react-router-dom';
import {Reducers} from '../../types/reducer.ts';
import {AuthorizationStatus} from '../../types/authorization-status.ts';
import {AppRoute} from '../../types/app-route.ts';

type PublicOnlyRouteProps = {
  children: JSX.Element;
}

export function PublicOnlyRoute({children}: PublicOnlyRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state[Reducers.Auth].status);
  return (
    authorizationStatus !== AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.Root} />
  );
}
