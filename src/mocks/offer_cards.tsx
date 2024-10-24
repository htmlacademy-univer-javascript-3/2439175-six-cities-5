import OfferCard from '../types/offer_card';
import {OfferType} from '../enums/offer_type_enums';

export const offerCards : OfferCard[] = [
  {
    id: 1,
    title: 'Beautiful & luxurious studio at great location',
    isPremium: true,
    photo: 'img/room.jpg',
    rating: 4,
    type: OfferType.Apartment,
    price: 210,
  },
  {
    id: 2,
    title: 'Roga i Kopyta',
    isPremium: false,
    photo: 'img/room.jpg',
    rating: 1,
    type: OfferType.Apartment,
    price: 696969,
  },
  {
    id: 3,
    title: 'Ya syel deda',
    isPremium: true,
    photo: 'img/room.jpg',
    rating: 3,
    type: OfferType.Apartment,
    price: 1337,
  },
  {
    id: 4,
    title: 'Level of Concern',
    isPremium: false,
    photo: 'img/room.jpg',
    rating: 2,
    type: OfferType.Apartment,
    price: 420,
  },
  {
    id: 5,
    title: 'My type',
    isPremium: true,
    photo: 'img/room.jpg',
    rating: 4,
    type: OfferType.Apartment,
    price: 42,
  }
];
