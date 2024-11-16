import Map from './map.tsx';
import Offer from '../../types/offer.ts';
import {City} from '../../types/city.ts';

type OfferNearestMapProps = {
  offers: Offer[];
  city: City;
  selectedHotelId?: number;
}

function OfferNearestMap({offers, city, selectedHotelId}: OfferNearestMapProps): JSX.Element {
  return (
    <Map offers={offers} city={city} selectedHotelId={selectedHotelId} view='offer' />
  );
}

export default OfferNearestMap;
