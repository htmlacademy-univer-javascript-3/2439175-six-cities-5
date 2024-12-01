export enum AppRoute {
  Login = '/login',
  Root = '/',
  Favorites = '/favorites',
  OfferWithId = '/offer/:offerId',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
}
