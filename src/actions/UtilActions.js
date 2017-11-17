export const genericListFetch = (_type, typeSuccess, typeFail, url, errorText) => {
    return (dispatch) => {
        dispatch({ type: _type });

        fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then((rjson) => {
                if (rjson !== null) {
                    dispatch({ type: typeSuccess, payload: { list: rjson } });
                }
                else {
                    dispatch({ type: typeSuccess, payload: { list: [] } });
                }
            })
            .catch((error) => {
                //console.error(error)
                dispatch({ type: typeFail, payload: { error: 'Ha ocurrido un error al cargar ' + errorText } })
            })
    }
};