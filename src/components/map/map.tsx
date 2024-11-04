import 'leaflet/dist/leaflet.css';
import {useEffect, useRef} from 'react';
import {Icon, layerGroup, Marker} from 'leaflet';
import {City} from '../../types/city.ts';
import useMap from './useMap.tsx';
import Hotel from '../../types/hotel.tsx';
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
  hotels: Hotel[];
  selectedHotel: Hotel | undefined;
};

export default function Map(props: MapProps) {
  const {city, hotels, selectedHotel} = props;

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
            selectedHotel !== undefined && hotel.title === selectedHotel.title
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, hotels, selectedHotel]);

  return <section className="cities__map" ref={mapRef}></section>;
}
