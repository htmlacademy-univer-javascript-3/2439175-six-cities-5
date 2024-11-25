import Offer from './types/offer.ts';
import {City} from './types/city.ts';
import {SortFilter} from './types/sort-filter.ts';

export function convertRatingToWidth(rating: number): string {
  return `${rating * 20}%`;
}

export function getMonthAndYear(date: Date): string {
  return date.toLocaleString('en-US', {
    month: 'long',
    year: 'numeric'
  });
}

export function formatDateToYMD(date: Date): string {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return `${year}-${month}-${day}`;
}

export function filterOffersByCity(offers: Offer[], city: City): Offer[] {
  return offers.filter((offer) => offer.city.name === city.name);
}

export function sortOffersByPrice(offers: Offer[], asc: boolean): Offer[] {
  const coefficient = asc ? 1 : -1;
  return offers.sort((a, b) => coefficient * (a.price - b.price));
}

export function sortOffersByRating(offers: Offer[]): Offer[] {
  return offers.sort((a, b) => b.rating - a.rating);
}

export function sortOffers(offers: Offer[], sortFilter: SortFilter): Offer[] {
  switch (sortFilter.filter) {
    case 'default':
      return offers;
    case 'price':
      return sortOffersByPrice(offers, sortFilter.order === 'asc');
    case 'rating':
      return sortOffersByRating(offers);
    default:
      return offers;
  }
}
