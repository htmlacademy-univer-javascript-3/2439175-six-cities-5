import 'leaflet/dist/leaflet.css';
import {useEffect, useRef} from 'react';
import {Icon, layerGroup, Marker} from 'leaflet';
import {City} from '../../types/city.ts';
import useMap from './useMap.tsx';
import Offer from '../../types/offer.tsx';
import {CURRENT_MAP_ICON, DEFAULT_MAP_ICON} from '../../../const.tsx';

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

type MapProps = {
  city: City;
  hotels: Offer[];
  selectedHotelId?: number;
  view: 'offer' | 'cities';
};

export default function Map(props: MapProps) {
  const {city, hotels, selectedHotelId} = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      hotels.forEach((hotel) => {
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
  }, [map, hotels, selectedHotelId]);

  return <section className={`${props.view}__map`} ref={mapRef}></section>;
}
