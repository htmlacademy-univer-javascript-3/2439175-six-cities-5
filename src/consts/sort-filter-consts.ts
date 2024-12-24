import {SortFilter} from '../types/sort-filter.ts';
import {OrderType} from '../types/order-type.ts';
import {SortOrder} from '../types/sort-order.ts';

export const DefaultSort: SortFilter = {
  filter: OrderType.Default
};

export const RatingDescendingSort : SortFilter = {
  filter: OrderType.Rating,
  order: SortOrder.Descending
};

export const PriceDescendingSort : SortFilter = {
  filter: OrderType.Price,
  order: SortOrder.Descending
};

export const PriceAscendingSort : SortFilter = {
  filter: OrderType.Price,
  order: SortOrder.Ascending
};
