import {OrderType} from './order-type.ts';
import {SortOrder} from './sort-order.ts';

export type SortFilter = {
  filter: OrderType;
  order?: SortOrder;
}
