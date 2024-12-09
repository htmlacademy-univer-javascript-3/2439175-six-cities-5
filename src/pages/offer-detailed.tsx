import SendComment from '../components/comment/send-comment.tsx';
import {ReviewList} from '../components/review-list/review-list.tsx';
import NearPlacesList from '../components/near-places-list/near-places-list.tsx';
import Map from '../components/map/map.tsx';
import {useAppDispatch, useAppSelector} from '../hooks';
import {Header} from '../components/header/header.tsx';
import NotFound from './not-found.tsx';
import {convertRatingToWidth} from '../helpers.ts';
import {changeFavourites, fetchComments, fetchOfferAction, fetchOffersNearby} from '../store/api-actions.ts';
import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {AuthorizationStatus} from '../enums.ts';
import {Spinner} from './spinner/spinner.tsx';

function OfferDetailed(): JSX.Element {
  const {offerId} = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchOfferAction({offerId}));
    dispatch(fetchComments({offerId}));
    dispatch(fetchOffersNearby({offerId}));
  }, [offerId, dispatch]);
  const offer = useAppSelector((state) => state.offer);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isOfferPageLoading = useAppSelector((state) => state.offerDataLoadingStatus);
  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;
  if (isOfferPageLoading) {
    return <Spinner />;
  }
  if (offer === null) {
    return (
      <NotFound />
    );
  }
  const changeFavouriteStatus = () => {
    dispatch(changeFavourites({offerId: offer.id, status: offer.isFavorite ? 0 : 1}));
  };
  const bookMarkClasses = `offer__bookmark-button ${offer.isFavorite && 'offer__bookmark-button--active'} button`;
  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {offer.images.map((image) => (
                <div className="offer__image-wrapper" key={image}>
                  <img className="offer__image" src={image} alt="Photo studio"></img>
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {offer.isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {offer.title}
                </h1>
                <button className={bookMarkClasses} type="button" onClick={changeFavouriteStatus}>
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span> {/*should bookmark*/}
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width: convertRatingToWidth(offer.rating)}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {offer.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {offer.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {offer.maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{offer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {offer.goods.map((good) => (
                    <li className="offer__inside-item" key={good}>
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74"
                      alt="Host avatar"
                    >
                    </img>
                  </div>
                  <span className="offer__user-name">
                    {offer.host.name}
                  </span>
                  {offer.host.isPro && (
                    <span className="offer__user-status">
                    Pro
                    </span>
                  )}
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {offer.description}
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <ReviewList />
                {isAuthorized && (
                  <SendComment />
                )}
              </section>
            </div>
          </div>
          <Map view='offer'/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <NearPlacesList />
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferDetailed;
