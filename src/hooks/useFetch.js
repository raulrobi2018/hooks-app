import React, {useState, useEffect, useRef} from "react";

export const useFetch = (url) => {
    // La idea de este useRef es que mantenga la refencia mientras el componente
    // está montado. Cuando sea false, se cancelará las peticiones que se hayan hecho
    const isMounted = useRef(true);
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    });

    // Cuando el componente se desmonte, se cambiará el valor de isMounted a false
    useEffect(() => {
        return () => {
            isMounted.current = false;
        };
    }, []);

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
                // Solo seteará los datos si el componente está montado
                if (isMounted.current) {
                    // Una vez que obtenemos la data, seteamos los valores
                    setState({
                        data,
                        loading: false,
                        error: null
                    });
                }
            })
            .catch(() => {
                setState({
                    data: null,
                    loading: false,
                    error: "No se pudo cargar la info"
                });
            });
    }, [url]);

    return state;
};
