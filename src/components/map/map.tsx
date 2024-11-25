import 'leaflet/dist/leaflet.css';
import {useEffect, useRef} from 'react';
import {Icon, layerGroup, Marker} from 'leaflet';
import {City} from '../../types/city.ts';
import useMap from './use-map.tsx';
import Offer from '../../types/offer.ts';
import {CURRENT_MAP_ICON, DEFAULT_MAP_ICON} from '../../consts/map-icon-consts.ts';
import {useAppSelector} from '../../hooks';

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
  city: City;
  offers: Offer[];
  view: 'offer' | 'cities';
};

export default function Map(props: MapProps) {
  const {city, offers} = props;
  const selectedOfferId = useAppSelector((state) => state.selectedOfferId);
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((hotel) => {
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

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, selectedOfferId]);

  return <section className={`${props.view}__map`} ref={mapRef}></section>;
}
