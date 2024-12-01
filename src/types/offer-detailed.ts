import {OfferType} from '../enums/offer-type.ts';
import {Location} from './location.ts';
import {City} from './city.ts';
import {OfferExtras} from '../enums/offer-extras.ts';
import Host from './host.ts';

export type OfferDetailed = {
  id: string;
  title: string;
  type: OfferType;
  price: number;
  city: City;
  location: Location;
  isFavourite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: OfferExtras[];
  host: Host;
  images: string[];
  maxAdults: number;
}
