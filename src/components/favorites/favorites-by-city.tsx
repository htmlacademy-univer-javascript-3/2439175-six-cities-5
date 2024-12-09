import Offer from '../../types/offer.ts';
import {City} from '../../types/city.ts';
import {FavoriteOfferItem} from './favorite-offer-item.tsx';

export type FavoritesOffersByCityProps = {
  offers: Offer[];
  city: City;
}

export function FavoritesOffersByCity({offers, city}: FavoritesOffersByCityProps): JSX.Element {
  return (
    <li className="favorites__locations-items" key={city.name}>
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city.name}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer) => (
          <FavoriteOfferItem offer={offer} key={offer.id}/>
        ))}
      </div>
    </li>
  );
}
