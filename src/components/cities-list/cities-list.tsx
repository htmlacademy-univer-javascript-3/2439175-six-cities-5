import {City} from '../../types/city.ts';
import {useAppDispatch} from '../../hooks';
import {changeCity} from '../../store/action.ts';

type CitiesListProps = {
  cities: City[];
}

function CitiesList({cities}: CitiesListProps): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city) => (
          <li className="locations__item" key={city.title}
            onClick={() => {
              dispatch(changeCity({city: city}));
            }}
          >
            <a className="locations__item-link tabs__item" href="#">
              <span>{city.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CitiesList;
