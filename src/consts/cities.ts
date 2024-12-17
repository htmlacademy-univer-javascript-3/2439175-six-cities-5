import {City} from '../types/city.ts';

export const AMSTERDAM: City = {
  name: 'Amsterdam',
  location: {
    latitude: 52.374,
    longitude: 4.88969,
    zoom: 12
  }
};

export const PARIS: City = {
  name: 'Paris',
  location: {
    latitude: 48.856663,
    longitude: 2.351556,
    zoom: 12
  }
};

export const COLOGNE: City = {
  name: 'Cologne',
  location: {
    latitude: 50.930779,
    longitude: 6.938399,
    zoom: 12
  }
};

export const BRUSSELS: City = {
  name: 'Brussels',
  location: {
    latitude: 50.846697,
    longitude: 4.352544,
    zoom: 12
  }
};

export const HAMBURG: City = {
  name: 'Hamburg',
  location: {
    latitude: 53.550688,
    longitude:  9.992895,
    zoom: 12
  }
};

export const DUSSELDORF: City = {
  name: 'Dusseldorf',
  location: {
    latitude: 51.230569,
    longitude:  6.787428,
    zoom: 12
  }
};

export const CITIES = [AMSTERDAM, PARIS, COLOGNE, BRUSSELS, HAMBURG, DUSSELDORF];
