import {OfferType} from './offer-type.ts';
import {City} from './city.ts';
import {Location} from './location.ts';

type Offer = {
  title: string;
  isPremium: boolean;
  previewImage: string;
  rating: number;
  type: OfferType;
  id: string;
  price: number;
  location: Location;
  city: City;
  isFavorite: boolean;
}

export default Offer;
