import {
  PRODUCT_LIST_FETCH,
  PRODUCT_LIST_FETCH_SUCCESS,
  PRODUCT_LIST_FETCH_FAIL,
  PRODUCTS_FILTER_CHANGED,
  PRODUCT_FETCH,
  PRODUCT_FETCH_SUCCESS,
  PRODUCT_FETCH_FAIL,
  PRODUCT_SELECT
} from '../actions/types';

const INITIAL_STATE = {
  list: [],
  filterdList: [],
  error: '',
  listFetching: false,
  productFetching: false,
  selectedProduct: {},
  filterText:'',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PRODUCT_LIST_FETCH:
      return { ...state, listFetching: true };
    case PRODUCT_LIST_FETCH_SUCCESS:
      return { ...state, ...action.payload, filterdList: action.payload.list, listFetching: false };
    case PRODUCT_LIST_FETCH_FAIL:
      return { ...state, ...action.payload, listFetching: false };
    case PRODUCT_FETCH:
      return { ...state, productFetching: true };
    case PRODUCT_FETCH_SUCCESS:
      return { ...state, ...action.payload, productFetching: false };
    case PRODUCT_FETCH_FAIL:
      return { ...state, ...action.payload, productFetching: false };
    case PRODUCT_SELECT:
      return { ...state, ...action.payload };
    case PRODUCTS_FILTER_CHANGED:
      return { ...state, ...action.payload, listFetching: false };
    default:
      return state;
  }
};
