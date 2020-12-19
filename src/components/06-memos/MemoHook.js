import React, {useState} from "react";
import {useCounterQuote} from "../../hooks/useCounterQuote";
import "./styles.css";

export const MemoHook = () => {
    const {counter, increment} = useCounterQuote(10);
    const [show, setShow] = useState(true);

    const hardProcess = (iteractions) => {

for (let i = 0; i < iteractions; i++) {
    console.log()
}
    
    return (
        <div>
            <h1>Memo Hook</h1>
            <hr></hr>

            <p>Counter: {counter}</p>

            <button className="btn btn-primary mr-3" onClick={increment}>
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
