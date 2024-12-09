import {OfferDetailed} from './offer-detailed.ts';
import Comment from './comment.ts';
import Offer from './offer.ts';

export type OfferReducer = {
  offer: OfferDetailed | null;
  comments: Comment[];
  offersNearby: Offer[];
  isLoading: boolean;
}
