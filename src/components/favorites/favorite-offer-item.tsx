import Offer from '../../types/offer.ts';
import {convertRatingToWidth} from '../../helpers.ts';
import {Link} from 'react-router-dom';
import {changeFavourites} from '../../store/api-actions.ts';
import {useAppDispatch} from '../../hooks';

export type FavoriteOfferItemProps = {
  offer: Offer;
}

export function FavoriteOfferItem({offer}: FavoriteOfferItemProps): JSX.Element {
  const dispatch = useAppDispatch();
  const changeFavouriteStatus = () => {
    dispatch(changeFavourites({offerId: offer.id, status: offer.isFavorite ? 0 : 1}));
  };
  return (
    <article className="favorites__card place-card" key={offer.id}>
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={offer.previewImage} width="150"
            height="110"
            alt="Place image"
          />
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className="place-card__bookmark-button place-card__bookmark-button--active button"
            type="button" onClick={() => changeFavouriteStatus()}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: convertRatingToWidth(offer.rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <Link to={`/offer/${offer.id}`}>
          <h2 className="place-card__name">
            <a>{offer.title}</a>
          </h2>
        </Link>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}
