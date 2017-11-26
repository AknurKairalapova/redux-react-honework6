import {CREATE_ORDER, MOVE_ORDER_TO_FARM} from '../actions/marketTypes';
import {sortOrderFn} from './helpers';

export const market = (state = {orders: []}, action) => {
  switch (action.type) {
    case CREATE_ORDER:
      return {
        orders: [...state.orders, action.payload].sort(sortOrderFn)
    };
    case MOVE_ORDER_TO_FARM:
      return {
        ...state,
        orders: state.orders.filter(order => order.id !== action.payload.id)
    };
    default:
      return state;
  }
};

export const getOrders = state => state.market.orders;