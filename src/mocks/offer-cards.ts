import Offer from '../types/offer.ts';
import {OfferType} from '../enums/offer-type.ts';
import {AMSTERDAM, BRUSSELS, COLOGNE, DUSSELDORF, HAMBURG, PARIS} from './city-coords.ts';

export const offerCards : Offer[] = [
  {
    id: '1',
    title: 'Beautiful & luxurious studio at great location',
    isPremium: true,
    previewImage: 'img/room.jpg',
    rating: 4,
    type: OfferType.Apartment,
    price: 210,
    coordinates: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198
    },
    city: AMSTERDAM,
    isFavourite: false,
  },
  {
    id: '2',
    title: 'Roga i Kopyta',
    isPremium: false,
    previewImage: 'img/room.jpg',
    rating: 1,
    type: OfferType.Apartment,
    price: 696969,
    coordinates: {
      latitude: 48.856663,
      longitude: 2.351556,
    },
    city: PARIS,
    isFavourite: true,
  },
  {
    id: '3',
    title: 'Ya syel deda',
    isPremium: true,
    previewImage: 'img/room.jpg',
    rating: 3,
    type: OfferType.Apartment,
    price: 1337,
    coordinates: {
      latitude: 50.930779,
      longitude: 6.938399,
    },
    city: COLOGNE,
    isFavourite: false,
  },
  {
    id: '4',
    title: 'Level of Concern BRUSSELS',
    isPremium: false,
    previewImage: 'img/room.jpg',
    rating: 2,
    type: OfferType.Apartment,
    price: 420,
    coordinates: {
      latitude: 50.846697,
      longitude: 4.352544,
    },
    city: BRUSSELS,
    isFavourite: false,
  },
  {
    id: '5',
    title: 'Level of Concern HAMBURG',
    isPremium: false,
    previewImage: 'img/room.jpg',
    rating: 2,
    type: OfferType.Apartment,
    price: 420,
    coordinates: {
      latitude: 53.550688,
      longitude:  9.992895,
    },
    city: HAMBURG,
    isFavourite: false,
  },
  {
    id: '6',
    title: 'Level of Concern DUSSELDORF',
    isPremium: false,
    previewImage: 'img/room.jpg',
    rating: 2,
    type: OfferType.Apartment,
    price: 420,
    coordinates: {
      latitude: 53.550688,
      longitude:  9.992895,
    },
    city: DUSSELDORF,
    isFavourite: false,
  },
  {
    id: '7',
    title: 'Beautiful & luxurious studio at great location BUT MORE EXPENSIVE',
    isPremium: true,
    previewImage: 'img/room.jpg',
    rating: 5,
    type: OfferType.Apartment,
    price: 210000,
    coordinates: {
      latitude: 52.3909553943608,
      longitude: 4.85309666407198
    },
    city: AMSTERDAM,
    isFavourite: false,
  },
];