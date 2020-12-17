import React, {useState, useEffect} from "react";

export const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    });

    useEffect(() => {
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
