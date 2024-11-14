import Offer from '../../types/offer.ts';
import {useState} from 'react';
import OfferItem from '../offer-list/offer-item.tsx';

type NearPlacesListProps = {
  offers: Offer[];
}

function NearPlacesList({offers}: NearPlacesListProps): JSX.Element {
  const [, setActiveOffer] = useState(0);
  return (
    <div className="near-places__list places__list">
      {offers.map((offer: Offer) => (
        <OfferItem key={offer.id} offer={offer} onCardHovered={(id) => setActiveOffer(id)}
          view={'near-places-list'}
        />
      ))}
    </div>
  );
}

export default NearPlacesList;
