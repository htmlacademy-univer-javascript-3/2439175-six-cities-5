import {useAppDispatch} from '../../hooks';
import {changeSort} from '../../store/action.ts';
import {
  DefaultSort,
  PriceAscendingSort,
  PriceDescendingSort,
  RatingDescendingSort
} from '../../consts/sort-filter-consts.ts';

function SortChoices(): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <ul className="places__options places__options--custom places__options--opened">
      <li className="places__option places__option--active" tabIndex={0}
        onClick={() => dispatch(changeSort(DefaultSort))}
      >Popular
      </li>
      <li className="places__option" tabIndex={0}
        onClick={() => dispatch(changeSort(PriceAscendingSort))}
      >Price: low to high
      </li>
      <li className="places__option" tabIndex={0}
        onClick={() => dispatch(changeSort(PriceDescendingSort))}
      >Price: high to low
      </li>
      <li className="places__option" tabIndex={0}
        onClick={() => dispatch(changeSort(RatingDescendingSort))}
      >Top rated first
      </li>
    </ul>
  );
}

export default SortChoices;
