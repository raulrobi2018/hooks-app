import React, {useState, useEffect} from "react";

export const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    });

    useEffect(() => {
        // Para que cada vez que cargue un quote nuevo muestre el mensaje de loading,
        // vuelvo a setear el state
        setState({
            data: null,
            loading: true,
            error: null
        });

        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                // Una vez que obtenemos la data, seteamos los valores
                setState({
                    data,
                    loading: false,
                    error: null
                });
            });
    }, [url]);

    return state;
};
