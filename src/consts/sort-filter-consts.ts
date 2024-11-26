import {SortFilter} from '../types/sort-filter.ts';

export const DefaultSort: SortFilter = {
  filter: 'default'
};

export const RatingDescendingSort : SortFilter = {
  filter: 'rating',
  order: 'desc'
};

export const PriceDescendingSort : SortFilter = {
  filter: 'price',
  order: 'desc'
};

export const PriceAscendingSort : SortFilter = {
  filter: 'price',
  order: 'asc'
};
