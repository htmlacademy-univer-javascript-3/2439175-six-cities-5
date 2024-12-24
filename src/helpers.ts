import Offer from './types/offer.ts';
import {City} from './types/city.ts';
import {SortFilter} from './types/sort-filter.ts';
import Comment from './types/comment.ts';
import {OrderType} from './types/order-type.ts';
import {SortOrder} from './types/sort-order.ts';

export function convertRatingToWidth(rating: number): string {
  return `${Math.round(rating) * 20}%`;
}

export function getMonthAndYear(dt: Date): string {
  const date = new Date(dt);
  return date.toLocaleString('en-US', {
    month: 'long',
    year: 'numeric'
  });
}

export function PluralOptionally(n: number, word: string): string {
  return n > 1 ? `${word}s` : word;
}

export function SliceOptionally<T>(threshold: number, range: T[]): T[] {
  return range.length > threshold ? range.slice(0, threshold) : range;
}

export function formatDateToYMD(dt: Date): string {
  const date = new Date(dt);
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
    case OrderType.Default:
      return offers;
    case OrderType.Price:
      return sortOffersByPrice(offers, sortFilter.order === SortOrder.Ascending);
    case OrderType.Rating:
      return sortOffersByRating(offers);
    default:
      return offers;
  }
}

export function sortByCreationTime(comments: Comment[]): Comment[] {
  return comments.sort((a, b) => {
    const aDt = new Date(a.date);
    const bDt = new Date(b.date);
    return bDt.getTime() - aDt.getTime();
  });
}

export function getRandomElement<T>(array: T[]): T {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}


