import Offer from '../../types/offer.ts';
import {Link} from 'react-router-dom';
import {convertRatingToWidth} from '../../helpers.ts';

type OfferItemProps = {
  offer: Offer;
  onCardHovered: (id: number) => void;
  view: 'cities' | 'near-places-list';
}

function OfferItem({offer, onCardHovered, view}: OfferItemProps): JSX.Element {
  const bookMarkClasses = `place-card__bookmark-button ${offer.isFavourite && 'place-card__bookmark-button--active'} button`;
  return (
    <article className={`${view}__card place-card`} onMouseEnter={() => {
      onCardHovered(offer.id);
    }} onMouseLeave={() => onCardHovered(0)}
    >
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${view}__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={offer.photo} width="260" height="200" alt="Place image"></img>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={bookMarkClasses} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
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
            <span>{offer.title}</span>
          </h2>
        </Link>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default OfferItem;
