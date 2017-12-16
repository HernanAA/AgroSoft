//import { Actions } from 'react-native-router-flux';
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

const rjson = [
    {
        "id": 749,
        "caravana": "A123-465",
        "caravanaAuxiliar": "B056",
        "fotoPerfil": "http://estaticos01.elmundo.es/elmundo/imagenes/2009/04/23/1240508553_0.jpg",
        "pesoIngreso": "200",
        "pesoEgreso": "400",
        "peso": "400",
        "valorIngreso": "5000",
        "valorEgreso": "11000",
        "fechaIngreso": "01-12-2017",
        "fechaEgreso": "01-12-2018",
        "nacida": false, //Si nacio en el campo o fue comprada afuera
        "arregloEconomico": {
            "id": "4",
            "valor": "50" //50% de la ganacia para anibal 
        },
        "tipo": {
            "id": "4",
            "valor": "Vaquilla"
        },
        "pelaje": {
            "id": "4",
            "valor": "P. Colorado"
        },
        "madre": {
            "id": "4",
            "caravana": "A123-460"
        },
        "padre": {
            "id": "1",
            "caravana": "Inseminado"
        },
        "campo": {
            "id": "4",
            "valor": "Feedlot"
        },
        "destino": {
            "id": "1",
            "valor": "Feedlot"
        },
        "estado": {
            "id": "1",
            "valor": "Activo"
        },
        "dueñoAnterior": {
            "id": "1",
            "valor": "Luis Lado"
        },
        "hijos": [
            {
                "id": "1",
                "caravana": "A123-460"
            },
            {
                "id": "2",
                "caravana": "A123-461"
            },
            {
                "id": "3",
                "caravana": "A123-462"
            }
        ],
        "anotaciones": [
            {
                "id": "1",
                "fecha": "01/12/2017",
                "valor": "El otro dia no la pudimos encontrar"
            },
            {
                "id": "2",
                "fecha": "01/12/2017",
                "valor": "El otro dia en el campo de los del terol se la vio re hinchada como para parir mal."
            },
            {
                "id": "3",
                "fecha": "01/12/2017",
                "valor": "El otro dia no la pudimos encontrar"
            }
        ],
        "ultimaVisualizacion":"18/12/2017"
    }

]

export const productListFetch = () => {
    return (dispatch) => {
        dispatch({ type: PRODUCT_LIST_FETCH_SUCCESS, payload: { list: rjson } });
    }
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