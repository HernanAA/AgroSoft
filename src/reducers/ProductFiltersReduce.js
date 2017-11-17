import {
  BRAND_LIST_FETCH,
  BRAND_LIST_FETCH_SUCCESS,
  BRAND_LIST_FETCH_FAIL,
  SELECTED_BRAND_CHANGED,
  CATEGORY_LIST_FETCH,
  CATEGORY_LIST_FETCH_SUCCESS,
  CATEGORY_LIST_FETCH_FAIL,
  SELECTED_CATEGORY_CHANGED,
  SUBCATEGORY_LIST_FETCH,
  SUBCATEGORY_LIST_FETCH_SUCCESS,
  SUBCATEGORY_LIST_FETCH_FAIL,
  SELECTED_SUBCATEGORY_CHANGED,
  SELECTED_CODE_CHANGED,
  SELECTED_DESCRIPTION_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
  brandsList: [
    { id: 1, name: 'Marca 1' },
    { id: 2, name: 'Marca 2' },
    { id: 3, name: 'Marca 3' },
    { id: 4, name: 'Marca 4' },
    { id: 5, name: 'Marca 5' },
    { id: 6, name: 'Marca 6' },
    { id: 7, name: 'Marca ' },
    { id: 8, name: 'Marca ' },
    { id: 9, name: 'Marca ' },
    { id: 10, name: 'Marca 10' },
    { id: 11, name: 'Marca ' },
    { id: 12, name: 'Marca ' },
    { id: 14, name: 'Marca ' },
    { id: 13, name: 'Marca ' },
    { id: 15, name: 'Marca 15' },
    { id: 16, name: 'Marca ' },
    { id: 21, name: 'Marca ' },
    { id: 22, name: 'Marca ' },
    { id: 23, name: 'Marca ' },
    { id: 25, name: 'Marca 20' },
    { id: 24, name: 'Marca ' },
    { id: 33, name: 'Marca ' },
    { id: 32, name: 'Marca ' },
    { id: 31, name: 'Marca ' },
    { id: 43, name: 'Marca 25' },
    { id: 55, name: 'Marca ' },
    { id: 66, name: 'Marca ' },
    { id: 77, name: 'Marca ' },
    { id: 88, name: 'Marca ' },
    { id: 89, name: 'Marca 30' },
    { id: 90, name: 'Marca 31' },
    { id: 91, name: 'Marca 32' },
    { id: 92, name: 'Marca fin ' },
  ],
  selectedBrand: [],

  categoryList: [
    { id: 1, name: 'Rubro 1' },
    { id: 2, name: 'Rubro 2' },
    { id: 3, name: 'Rubro 3' },
    { id: 4, name: 'Rubro 4' },
    { id: 5, name: 'Rubro 5' },
    { id: 6, name: 'Rubro ' },
    { id: 7, name: 'Rubro ' },
    { id: 8, name: 'Rubro ' },
    { id: 9, name: 'Rubro ' },
    { id: 10, name: 'Rubro ' },
    { id: 11, name: 'Rubro ' },
    { id: 12, name: 'Rubro ' },
    { id: 14, name: 'Rubro ' },
    { id: 13, name: 'Rubro ' },
    { id: 15, name: 'Rubro ' },
    { id: 16, name: 'Rubro ' },
    { id: 21, name: 'Rubro ' },
    { id: 22, name: 'Rubro ' },
    { id: 23, name: 'Rubro ' },
    { id: 25, name: 'Rubro ' },
    { id: 24, name: 'Rubro ' },
    { id: 33, name: 'Rubro ' },
    { id: 32, name: 'Rubro ' },
    { id: 31, name: 'Rubro ' },
    { id: 43, name: 'Rubro ' },
    { id: 55, name: 'Rubro ' },
    { id: 66, name: 'Rubro ' },
    { id: 77, name: 'Rubro ' },
    { id: 88, name: 'Rubro ' },
    { id: 99, name: 'Rubro ' },
    { id: 97, name: 'Rubro ' },
    { id: 98, name: 'Rubro ' },
    { id: 95, name: 'Rubro ' },
  ],
  selectedCategory: [],

  subCategoryList: [
    { id: 1, name: 'Sub Rubro 1' },
    { id: 2, name: 'Sub Rubro 2' },
    { id: 3, name: 'Sub Rubro 3' },
    { id: 4, name: 'Sub Rubro 4' },
    { id: 5, name: 'Sub Rubro 5' },
    { id: 6, name: 'Sub Rubro ' },
    { id: 7, name: 'Sub Rubro ' },
    { id: 8, name: 'Sub Rubro ' },
    { id: 9, name: 'Sub Rubro ' },
    { id: 10, name: 'Sub Rubro ' },
    { id: 11, name: 'Sub Rubro ' },
    { id: 12, name: 'Sub Rubro ' },
    { id: 14, name: 'Sub Rubro ' },
    { id: 13, name: 'Sub Rubro ' },
    { id: 15, name: 'Sub Rubro ' },
    { id: 16, name: 'Sub Rubro ' },
    { id: 21, name: 'Sub Rubro ' },
    { id: 22, name: 'Sub Rubro ' },
    { id: 23, name: 'Sub Rubro ' },
    { id: 25, name: 'Sub Rubro ' },
    { id: 24, name: 'Sub Rubro ' },
    { id: 33, name: 'Sub Rubro ' },
    { id: 32, name: 'Sub Rubro ' },
    { id: 31, name: 'Sub Rubro ' },
    { id: 43, name: 'Sub Rubro ' },
    { id: 55, name: 'Sub Rubro ' },
    { id: 66, name: 'Sub Rubro ' },
    { id: 77, name: 'Sub Rubro ' },
    { id: 88, name: 'Sub Rubro ' },
    { id: 99, name: 'Sub Rubro ' },
    { id: 97, name: 'Sub Rubro ' },
    { id: 98, name: 'Sub Rubro ' },
    { id: 95, name: 'Sub Rubro ' },
  ],
  selectedSubCategory: [],

  brandFetching: false,
  categoryFetching: false,
  subCategoryFetching: false,
  selectedCode:'',
  selectedDescription:'',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BRAND_LIST_FETCH:
      return { ...state, brandFetching: true };
    case BRAND_LIST_FETCH_SUCCESS:
      return { ...state, ...action.payload, brandsList: action.payload.list, brandFetching: false };
    case BRAND_LIST_FETCH_FAIL:
      return { ...state, ...action.payload, brandFetching: false };
    case SELECTED_BRAND_CHANGED:
      return { ...state, selectedBrand: action.payload };
    case CATEGORY_LIST_FETCH:
      return { ...state, categoryFetching: true };
    case CATEGORY_LIST_FETCH_SUCCESS:
      return { ...state, ...action.payload, categoryList: action.payload.list, categoryFetching: false };
    case CATEGORY_LIST_FETCH_FAIL:
      return { ...state, ...action.payload, categoryFetching: false };
    case SELECTED_CATEGORY_CHANGED:
      return { ...state, selectedCategory: action.payload };
    case SUBCATEGORY_LIST_FETCH:
      return { ...state, subCategoryFetching: true };
    case SUBCATEGORY_LIST_FETCH_SUCCESS:
      return { ...state, ...action.payload, subCategoryList: action.payload.list, subCategoryFetching: false };
    case SUBCATEGORY_LIST_FETCH_FAIL:
      return { ...state, ...action.payload, subCategoryFetching: false };
    case SELECTED_SUBCATEGORY_CHANGED:
      return { ...state, selectedSubCategory: action.payload };
    case SELECTED_CODE_CHANGED:
      return { ...state, selectedCode: action.payload };
    case SELECTED_DESCRIPTION_CHANGED:
      return { ...state, selectedDescription: action.payload };

    default:
      return state;
  }
};
