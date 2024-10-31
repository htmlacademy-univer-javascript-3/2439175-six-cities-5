import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {offerCards} from './mocks/offer_cards';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offers={offerCards} />
  </React.StrictMode>
);
