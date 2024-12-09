import {City} from './city.ts';
import Offer from './offer.ts';
import {SortFilter} from './sort-filter.ts';

export type MainReducer = {
  city: City;
  offersList: Offer[];
  sortFilter: SortFilter;
  selectedOfferId: string | null;
  isOffersLoading: boolean;
  error: string | null;
  favoriteOffers: Offer[];
  favoriteOffersCount: number;
}
