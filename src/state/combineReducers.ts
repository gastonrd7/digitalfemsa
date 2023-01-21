import { combineReducers } from 'redux';
import { reducer as Products, 
    State as ProductsState } from './reducers/products';

export type RootState = {
  Products: ProductsState;
}

export const rootReducer = combineReducers<RootState>({
  Products
});