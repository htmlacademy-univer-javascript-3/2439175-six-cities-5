import Offer from '../../types/offer.tsx';
import {useState} from 'react';
import OfferItem from '../offer/offer_item.tsx';

type NearPlacesListProps = {
  offers: Offer[];
}

function NearPlacesList({offers}: NearPlacesListProps): JSX.Element {
  const [, setActiveOffer] = useState(0);
  return (
    <div className="near-places__list places__list">
      {offers.map((offer: Offer) => (
        <OfferItem key={offer.id} offer={offer} onCardHovered={(id) => setActiveOffer(id)}
          view={'near-places'}
        />
      ))}
    </div>
  );
}

export default NearPlacesList;
