import 'leaflet/dist/leaflet.css';
import {useEffect, useRef} from 'react';
import {Icon, layerGroup, Marker} from 'leaflet';
import useMap from './use-map.tsx';
import {CURRENT_MAP_ICON, DEFAULT_MAP_ICON} from '../../consts/map-icon-consts.ts';
import {useAppSelector} from '../../hooks';
import {MapView} from '../../types/map-view.ts';
import {getFilteredOffers, getOffersNearbySliced} from '../../store/selectors.ts';
import {Reducers} from '../../types/reducer.ts';

const defaultCustomIcon = new Icon({
  iconUrl: DEFAULT_MAP_ICON,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: CURRENT_MAP_ICON,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

export type MapProps = {
  view: MapView;
};

export default function Map({view}: MapProps) {
  const city = useAppSelector((state) => state[Reducers.Main].city);
  const offers = useAppSelector(getFilteredOffers);
  const nearestOffers = useAppSelector(getOffersNearbySliced);
  const currentOffer = useAppSelector((state) => state[Reducers.Offer].offer);
  const offersToDraw = view === 'cities' ? offers : nearestOffers;
  const selectedOfferId = useAppSelector((state) => state[Reducers.Main].selectedOfferId);
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offersToDraw.forEach((hotel) => {
        const marker = new Marker({
          lat: hotel.location.latitude,
          lng: hotel.location.longitude
        });

        marker
          .setIcon(
            selectedOfferId && hotel.id === selectedOfferId
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      if (view === 'offer' && currentOffer) {
        const marker = new Marker({
          lat: currentOffer.location.latitude,
          lng: currentOffer.location.longitude
        });

        marker
          .setIcon(currentCustomIcon)
          .addTo(markerLayer);
      }

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [currentOffer, map, offersToDraw, selectedOfferId, view]);

  return <section className={`${view}__map`} ref={mapRef}></section>;
}
