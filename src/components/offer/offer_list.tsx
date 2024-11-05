import Offer from '../../types/offer.tsx';
import {useState} from 'react';
import OfferItem from './offer_item.tsx';

type OffersListProps = {
  offers: Offer[];
}

function OffersList({offers}: OffersListProps): JSX.Element {
  const [, setActiveOffer] = useState(0);
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferItem offer={offer} key={offer.id} onCardHovered={(id) => setActiveOffer(id)}
          view={'cities'}
        />
      ))}
    </div>
  );
}

export default OffersList;
