import React from "react";
import {useFetch} from "./useFetch";
import "./styles.css";
import {useCounterQuote} from "../../hooks/useCounterQuote";

export const MultipleCustomHooks = () => {
    const {counter, increment, decrement, reset} = useCounterQuote(1);

    const {loading, data} = useFetch(
        `https://www.breakingbadapi.com/api/quotes/${counter}`
    );

    // !!data: conviente el null a un booleano y lo niega. !data lo convierte a booleano y luego !!data lo niega
    // Si es true, devuelve data[0]
    const {author, quote} = !!data && data[0];
    return (
        <>
            <h1>BrakingBad Quotes</h1>
            <hr />

            {loading ? (
                <div className="alert alert-info text-center">Loading...</div>
            ) : (
                <blockquote className="blockquote">
                    <p className="mb-1">{quote}</p>
                    <footer className="blockquote-footer mt-1">{author}</footer>
                </blockquote>
            )}

            <button className="btn btn-secondary" onClick={() => decrement()}>
                Previous quote
            </button>
            <button
                className="btn btn-primary ml-1"
                onClick={() => increment()}
            >
                Next quote
            </button>
            <button className="btn btn-success ml-1" onClick={() => reset()}>
                Reset
            </button>
        </>
    );
};
