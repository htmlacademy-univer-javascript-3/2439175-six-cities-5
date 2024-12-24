import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeCity} from '../../store/action.ts';
import {Reducers} from '../../types/reducer.ts';
import {CITIES} from '../../consts/cities.ts';

function CitiesList(): JSX.Element {
  const currentCity = useAppSelector((state) => state[Reducers.Main].city);
  const dispatch = useAppDispatch();
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITIES.map((city) => {
          const activeCity = city.name === currentCity.name ? 'tabs__item--active' : '';
          return (
            <li className="locations__item" key={city.name}
              onClick={() => {
                dispatch(changeCity(city));
              }}
            >
              <a className={`locations__item-link tabs__item ${activeCity}`} href="#">
                <span>{city.name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default CitiesList;
