import { combineReducers } from 'redux';
import ProductsReducer from './ProductsReducer'
import ProductsFilterReducer from './ProductFiltersReduce'

export default combineReducers({
  products: ProductsReducer,
  productFilters: ProductsFilterReducer,
});