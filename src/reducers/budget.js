import {CREATE_ORDER, MOVE_ORDER_TO_FARM} from '../actions/marketTypes';
import {MOVE_ORDER_TO_CUSTOMER}  from '../actions/farmTypes';

const initState = {
    profit: 0,
    marketExpanse: 0,
    farmExpanse: 0,
    deliveryExpanse: 0
};

export const budget = (state = initState, action) => {
  switch (action.type) {
    case CREATE_ORDER:
      return {
          ...state,
          profit: state.profit + action.payload.price,
          marketExpanse: state.marketExpanse + 20
    };
    case MOVE_ORDER_TO_FARM:
      return {
        ...state,
        farmExpanse: state.farmExpanse + 100
    };
    case MOVE_ORDER_TO_CUSTOMER:
        return {
            ...state,
            deliveryExpanse: state.deliveryExpanse + 20
        };
    default:
      return state;
  }
};

export const getProfit = state => state.budget.profit;
export const getMarketExpanse = state => state.budget.marketExpanse;
export const getFarmExpanse = state => state.budget.farmExpanse;
export const getDeliveryExpanse = state => state.budget.deliveryExpanse;