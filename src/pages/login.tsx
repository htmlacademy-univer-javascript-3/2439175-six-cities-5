import Logo from '../components/logo/logo';
import {LoginForm} from '../components/login-form/login-form.tsx';
import {AppRoute, AuthorizationStatus, Reducers} from '../enums.ts';
import {Navigate} from 'react-router-dom';
import {useAppSelector} from '../hooks';

function Login(): JSX.Element {
  const authStatus = useAppSelector((state) => state[Reducers.Auth].status);
  if (authStatus === AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.Root} />;
  }

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
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Login;
