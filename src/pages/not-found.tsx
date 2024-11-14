import {Link} from 'react-router-dom';
import {Fragment} from 'react';


function NotFound(): JSX.Element {
  return (
    <Fragment>
      <h1>404 Not Found</h1>
      <Link to={'/'}>Go to main page</Link>
    </Fragment>
  );
}

export default NotFound;
