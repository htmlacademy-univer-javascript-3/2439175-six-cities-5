import {OfferType} from '../enums/offer-type.ts';
import Coords from './hotel-coords.ts';
import {City} from './city.ts';

type Offer = {
  title: string;
  isPremium: boolean;
  photo: string;
  rating: number;
  type: OfferType;
  id: number;
  price: number;
  coordinates: Coords;
  city: City;
  isFavourite: boolean;
}

export default Offer;
