import Hotel from '../types/hotel.tsx';
import {OfferType} from '../enums/offer_type_enums';
import {AMSTERDAM} from './city_coords.ts';

export const offerCards : Hotel[] = [
  {
    id: 1,
    title: 'Beautiful & luxurious studio at great location',
    isPremium: true,
    photo: 'img/room.jpg',
    rating: 4,
    type: OfferType.Apartment,
    price: 210,
    coordinates: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198
    },
    city: AMSTERDAM,
  },
  {
    id: 2,
    title: 'Roga i Kopyta',
    isPremium: false,
    photo: 'img/room.jpg',
    rating: 1,
    type: OfferType.Apartment,
    price: 696969,
    coordinates: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198
    },
    city: AMSTERDAM,
  },
  {
    id: 3,
    title: 'Ya syel deda',
    isPremium: true,
    photo: 'img/room.jpg',
    rating: 3,
    type: OfferType.Apartment,
    price: 1337,
    coordinates: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
    },
    city: AMSTERDAM,
  },
  {
    id: 4,
    title: 'Level of Concern',
    isPremium: false,
    photo: 'img/room.jpg',
    rating: 2,
    type: OfferType.Apartment,
    price: 420,
    coordinates: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
    },
    city: AMSTERDAM,
  }
];
