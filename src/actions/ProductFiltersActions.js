import { Actions } from 'react-native-router-flux';
import api from './../helpers/api'
import { genericListFetch } from './UtilActions'

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
    SELECTED_DESCRIPTION_CHANGED,
    PRODUCT_LIST_FETCH,
    PRODUCT_LIST_FETCH_SUCCESS,
    PRODUCT_LIST_FETCH_FAIL,
} from './types';

const makeFilteredUrl = (filter) => {
        //"http://www.ruelo.com.ar/api/api/producto/0?Id=10048&Descripcion=0&Codigo=0&IdMarca=0&IdRubro=0&IdSubrubro=0",
        var url = api.getFilterProductListlUrl();
        const filterId = api.getFilterId() + "0";
        url = url + filterId;

        if (filter.selectedDescription !== '') {
            const description = api.getFilterDescription();
            url = url + description + filter.selectedDescription;
        }

        if (filter.selectedCode !== '') {
            const code = api.getFilterCode();
            url = url + code + filter.selectedCode;
        }

        const brand = api.getFilterBrandId();
        filter.selectedBrand.map((item) => {
            console.log(item)
            url = url + brand + item;
        })

        const category = api.getFilterCategoryId();
        filter.selectedCategory.map((item) => {
            url = url + category + item;
        })

        const subCategory = api.getFilterSubcategoryId();
        filter.selectedSubCategory.map((item) => {
            url = url + subCategory + item;
        })
        console.log(url)
        return url;
    
}

export const filteredProductListFetch = () => {
    return (dispatch, getState) => {
        
        const url = makeFilteredUrl(getState().productFilters)

        // return (dispatch) => {
        //     PRODUCT_LIST_FETCH_SUCCESS
        // }

        return dispatch(genericListFetch(
            PRODUCT_LIST_FETCH,
            PRODUCT_LIST_FETCH_SUCCESS,
            PRODUCT_LIST_FETCH_FAIL,
            url,
            " los productos filtrados"))
    }
};

export const selectedBrandChanged = (selected) => {
    return ({
        type: SELECTED_BRAND_CHANGED,
        payload: selected
    });
}

export const brandListFetch = () => {
    return (dispatch) => {
        return dispatch(genericListFetch(
            BRAND_LIST_FETCH,
            BRAND_LIST_FETCH_SUCCESS,
            BRAND_LIST_FETCH_FAIL,
            api.getBrandListlUrl(),
            " las marcas"))
    }
};

export const selectedCategoryChanged = (selected) => {
    return ({
        type: SELECTED_CATEGORY_CHANGED,
        payload: selected
    });
}

export const categoryListFetch = () => {
    return (dispatch) => {
        return dispatch(genericListFetch(
            CATEGORY_LIST_FETCH,
            CATEGORY_LIST_FETCH_SUCCESS,
            CATEGORY_LIST_FETCH_FAIL,
            api.getCategoryListlUrl(),
            " los rubros"))
    }
};

export const selectedSubCategoryChanged = (selected) => {
    return ({
        type: SELECTED_SUBCATEGORY_CHANGED,
        payload: selected
    });
}

export const subcategoryListFetch = () => {
    return (dispatch) => {
        return dispatch(genericListFetch(
            SUBCATEGORY_LIST_FETCH,
            SUBCATEGORY_LIST_FETCH_SUCCESS,
            SUBCATEGORY_LIST_FETCH_FAIL,
            api.getSubcategoryListUrl(),
            " los subrubros"))
    }
};

export const selectedCodeChanged = (selected) => {
    return ({
        type: SELECTED_CODE_CHANGED,
        payload: selected
    });
}

export const selectedDescriptionChanged = (selected) => {
    return ({
        type: SELECTED_DESCRIPTION_CHANGED,
        payload: selected
    });
}

