import React, {useState} from "react";
import {useCounterQuote} from "../../hooks/useCounterQuote";
import {Small} from "./Small";
import "./styles.css";

export const Memorize = () => {
    const {counter, increment} = useCounterQuote(10);
    const [show, setShow] = useState(true);

    return (
        <div>
            <h1>useMemo</h1>
            <hr></hr>

            <p>
                <Small value={counter} />
            </p>

            <button className="btn btn-primary" onClick={increment}>
                +1
            </button>

            <button
                className="btn btn-secondary ml-3"
                onClick={() => {
                    setShow(!show);
                }}
            >
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    );
};
