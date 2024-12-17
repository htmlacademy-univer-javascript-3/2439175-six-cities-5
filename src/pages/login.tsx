import Logo from '../components/logo/logo';
import {LoginForm} from '../components/login-form/login-form.tsx';
import {Link, Navigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../hooks';
import {Reducers} from '../types/reducer.ts';
import {AuthorizationStatus} from '../types/authorization-status.ts';
import {AppRoute} from '../types/app-route.ts';
import {getRandomElement} from '../helpers.ts';
import {CITIES} from '../consts/cities.ts';
import {changeCity} from '../store/action.ts';

function Login(): JSX.Element {
  const authStatus = useAppSelector((state) => state[Reducers.Auth].status);
  const dispatch = useAppDispatch();
  if (authStatus === AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.Root} />;
  }
  const randomCity = getRandomElement(CITIES);
  const handleClick = () => () => {
    dispatch(changeCity(randomCity));
  };

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <LoginForm />
          </section>
          <section className="locations locations--login locations--current">
            <Link to={AppRoute.Root}>
              <div className="locations__item" onMouseEnter={handleClick()}>
                <a className="locations__item-link" href="#">
                  <span>{randomCity.name}</span>
                </a>
              </div>
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Login;
