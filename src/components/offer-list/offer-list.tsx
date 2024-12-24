import OfferItem from './offer-item.tsx';
import {useAppDispatch, useAppSelector} from '../../hooks';
import SortChoices from '../sort-choices/sort-choices.tsx';
import {changeSelectedOfferId} from '../../store/action.ts';
import {getSortedOffers} from '../../store/selectors.ts';
import {Reducers} from '../../types/reducer.ts';

function OffersList(): JSX.Element {
  const offers = useAppSelector(getSortedOffers);
  const city = useAppSelector((state) => state[Reducers.Main].city);
  const dispatch = useAppDispatch();
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offers.length} places to stay in {city.name}</b>
      <SortChoices />
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => (
          <OfferItem offer={offer} key={offer.id} onCardHovered={
            (id) => dispatch(changeSelectedOfferId(id))
          }
          view={'cities'}
          />
        ))}
      </div>
    </section>
  );
}

export default OffersList;
