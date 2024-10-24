import {OfferType} from '../enums/offer_type_enums';

type OfferCard = {
  title: string;
  isPremium: boolean;
  photo: string;
  rating: number;
  type: OfferType;
  id: number;
  price: number;

}

export default OfferCard;
