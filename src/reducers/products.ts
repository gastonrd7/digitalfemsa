import { RootActions } from '../combineActions';
import { AxiosError } from 'axios';
import { IProduct, IListProduct } from '../interfaces/product';

export type State = {
  isFetching: boolean;
  totalProducts: IProduct[] | null;
  productsToDisplay: IProduct[] | null;
  wonProducts: IProduct[] | null;
  changedProducts: IProduct[] | null;
  error: AxiosError | null;
  total: number;
  isTheFilterApplied: boolean;
};

export const initialState: State = {
  isFetching: false,
  totalProducts: null,
  productsToDisplay: null,
  wonProducts: null,
  changedProducts: null,
  error: null,
  total: 0, 
  isTheFilterApplied: false
};

export function reducer(state: State = initialState, action: RootActions): State {
  switch (action.type) {
    case 'FETCH_PRODUCTS_REQUEST':
      return {
        ...state,
        isFetching: true,
      };
    case 'FETCH_PRODUCTS_SUCCESS':
      return {
        ...state,
        isFetching: false,
        totalProducts: action.payload,
        productsToDisplay: action.payload,
        wonProducts: action.payload && action.payload.filter(item => item.is_redemption === true),
        changedProducts: action.payload && action.payload.filter(item => item.is_redemption === false),
        total: action.payload ? action.payload.reduce((total, item) => {
          if(item.is_redemption)
            total -= item.points 
          else 
            total += item.points;
          return total;

        }, 0) : 0,
        error: null
      };
    case 'FETCH_PRODUCTS_FAILURE':
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    case 'FETCH_SET_FILTER':
      return {
        ...state,
        isTheFilterApplied: true,
        productsToDisplay: action.payload ? state.changedProducts : state.wonProducts,
      };
      case 'FETCH_CLEAN_FILTER':
      return {
        ...state,
        isTheFilterApplied: false,
        productsToDisplay:  state.totalProducts,
      };
    default:
      return state;
  }
}
