import Offer from '../../types/offer.ts';
import OfferItem from '../offer-list/offer-item.tsx';
import {useAppSelector} from '../../hooks';
import {Reducers} from '../../enums.ts';

function NearPlacesList(): JSX.Element {
  const nearestOffers = useAppSelector((state) => state[Reducers.Offer].offersNearby);
  return (
    <div className="near-places__list places__list">
      {nearestOffers.map((offer: Offer) => (
        <OfferItem key={offer.id} offer={offer}
          view={'near-places-list'}
        />
      ))}
    </div>
  );
}

export default NearPlacesList;
