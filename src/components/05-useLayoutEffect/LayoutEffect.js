import React, {useRef, useLayoutEffect, useState} from "react";
import {useFetch} from "../03-examples/useFetch";
import "./styles.css";
import {useCounterQuote} from "../../hooks/useCounterQuote";

export const LayoutEffect = () => {
    const {counter, increment, decrement, reset} = useCounterQuote(1);

    const {data} = useFetch(
        `https://www.breakingbadapi.com/api/quotes/${counter}`
    );

    // !!data: conviente el null a un booleano y lo niega. !data lo convierte a booleano y luego !!data lo niega
    // Si es true, devuelve data[0]
    const {quote} = !!data && data[0];

    // Hago referencia al p del blockquote
    const pQuote = useRef();

    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect(() => {
        setBoxSize(pQuote.current.getBoundingClientRect());
    }, [quote]);

    return (
        <>
            <h4>useLayoutEffect</h4>
            <hr />

            <blockquote className="blockquote">
                <p className="mb-1" ref={pQuote}>
                    {counter} - {quote}
                </p>
            </blockquote>

            <pre>{JSON.stringify(boxSize, null, 3)}</pre>

            <div className="row">
                <div className="col-4">
                    <button
                        className="btn btn-secondary"
                        onClick={() => decrement()}
                    >
                        Previous quote
                    </button>
                </div>
                <div className="col-4">
                    <button
                        className="btn btn-primary ml-1"
                        onClick={() => increment()}
                    >
                        Next quote
                    </button>
                </div>
                <div className="col-4">
                    <button
                        className="btn btn-success ml-1"
                        onClick={() => reset()}
                    >
                        Reset
                    </button>
                </div>
            </div>
        </>
    );
};
