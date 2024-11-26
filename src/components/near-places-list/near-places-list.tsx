import Offer from '../../types/offer.ts';
import OfferItem from '../offer-list/offer-item.tsx';
import {useAppDispatch} from '../../hooks';
import {changeSelectedOfferId} from '../../store/action.ts';

type NearPlacesListProps = {
  offers: Offer[];
}

function NearPlacesList({offers}: NearPlacesListProps): JSX.Element {
  const dispatcher = useAppDispatch();
  return (
    <div className="near-places__list places__list">
      {offers.map((offer: Offer) => (
        <OfferItem key={offer.id} offer={offer}
          onCardHovered={(id) => dispatcher(changeSelectedOfferId(id))}
          view={'near-places-list'}
        />
      ))}
    </div>
  );
}

export default NearPlacesList;
