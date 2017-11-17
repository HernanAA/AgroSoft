import { Actions } from 'react-native-router-flux';
import api from './../helpers/api'
import { genericListFetch } from './UtilActions'

import {
    PRODUCT_LIST_FETCH,
    PRODUCT_LIST_FETCH_SUCCESS,
    PRODUCT_LIST_FETCH_FAIL,
    PRODUCTS_FILTER_CHANGED,
    PRODUCT_FETCH,
    PRODUCT_FETCH_SUCCESS,
    PRODUCT_FETCH_FAIL,
    PRODUCT_SELECT
} from './types';

export const productListFetch = () => {
    // return (dispatch) => {
    //     PRODUCT_LIST_FETCH_SUCCESS
    // }

    return (dispatch) => {
        return dispatch(genericListFetch(
            PRODUCT_LIST_FETCH,
            PRODUCT_LIST_FETCH_SUCCESS,
            PRODUCT_LIST_FETCH_FAIL,
            api.getProductListlUrl(),
            "el listado de productos. Por favor, verifique su conexion a internet."))
    }
};

export const productFetch = (id) => {
    return (dispatch, getState) => {

        dispatch({ type: PRODUCT_FETCH });

        var url = api.getProductListlUrl() + id;
        fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then((response) => {
                return response.json()
            })
            .then((rjson) => {
                if (rjson !== null) {
                    dispatch({ type: PRODUCT_FETCH_SUCCESS, payload: { selectedProduct: rjson } });
                }
                else {
                    dispatch({ type: PRODUCT_FETCH_SUCCESS, payload: { selectedProduct: {} } });
                }
            })
            .catch((error) => {
                console.error(error)
                dispatch({ type: PRODUCT_FETCH_FAIL, payload: { error: 'Ha ocurrido un error al cargar los productos.' } })
            })
    }
};

export const searchChanged = ({ text }) => {
    return (dispatch, getState) => {
        dispatch({ type: PRODUCT_LIST_FETCH });

        const newData = getState().products.list.filter((item) => {
            const itemData = item.Descripcion.toUpperCase()
            const textData = text.toUpperCase()
            return itemData.indexOf(textData) > -1
        })

        dispatch({ type: PRODUCTS_FILTER_CHANGED, payload: { filterText: text, filterdList: newData } });
    }
}

export const productSelect = (selectedProduct) => {
    return ({
        type: PRODUCT_SELECT,
        payload: { selectedProduct }
    });
}