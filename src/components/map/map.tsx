import 'leaflet/dist/leaflet.css';
import {useEffect, useRef} from 'react';
import {Icon, layerGroup, Marker} from 'leaflet';
import {City} from '../../types/city.ts';
import useMap from './use-map.tsx';
import Offer from '../../types/offer.ts';
import {CURRENT_MAP_ICON, DEFAULT_MAP_ICON} from '../../const.ts';

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
  selectedHotelId?: number;
  view: 'offer' | 'cities';
};

export default function Map(props: MapProps) {
  const {city, offers, selectedHotelId} = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((hotel) => {
        const marker = new Marker({
          lat: hotel.coordinates.latitude,
          lng: hotel.coordinates.longitude
        });

        marker
          .setIcon(
            selectedHotelId && hotel.id === selectedHotelId
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, selectedHotelId]);

  return <section className={`${props.view}__map`} ref={mapRef}></section>;
}
