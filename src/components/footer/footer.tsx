import {Link} from 'react-router-dom';

export function Footer(): JSX.Element {
  return (
    <footer className="footer container">
      <Link className="header__logo-link" to="/">
        <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
      </Link>
    </footer>
  );
}
