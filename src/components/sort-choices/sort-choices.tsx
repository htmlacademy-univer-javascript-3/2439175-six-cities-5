import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeSort, changeSortsOpened} from '../../store/action.ts';
import {
  DefaultSort,
  PriceAscendingSort,
  PriceDescendingSort,
  RatingDescendingSort
} from '../../consts/sort-filter-consts.ts';
import {SortFilter} from '../../types/sort-filter.ts';
import {Reducers} from '../../types/reducer.ts';
import {useState} from 'react';
import {UserOderType} from '../../types/user-order-type.ts';

function SortChoices(): JSX.Element {
  const [orderType, setOrderType] = useState('Popular');
  const dispatch = useAppDispatch();
  const handleSortChange = (sortType : SortFilter, userSortType: string) => () => {
    setOrderType(userSortType);
    dispatch(changeSort(sortType));
  };
  const handleOpenSorts = () => () => {
    dispatch(changeSortsOpened());
  };
  const isSortsOpened = useAppSelector((state) => state[Reducers.Main].sortsOpened);
  return (
    <form className="places__sorting" action="#" method="get" onClick={handleOpenSorts()}>
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>{orderType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isSortsOpened ? 'places__options--opened' : ''}`}>
        <li className="places__option places__option--active" tabIndex={0}
          onClick={handleSortChange(DefaultSort, UserOderType.Popular)}
        >Popular
        </li>
        <li className="places__option" tabIndex={0}
          onClick={handleSortChange(PriceAscendingSort, UserOderType.PriceAsc)}
        >Price: low to high
        </li>
        <li className="places__option" tabIndex={0}
          onClick={handleSortChange(PriceDescendingSort, UserOderType.PriceDesc)}
        >Price: high to low
        </li>
        <li className="places__option" tabIndex={0}
          onClick={handleSortChange(RatingDescendingSort, UserOderType.Rating)}
        >Top rated first
        </li>
      </ul>
    </form>
  );
}

export default SortChoices;
