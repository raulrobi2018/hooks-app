import React, {useMemo, useState} from "react";
import {useCounterQuote} from "../../hooks/useCounterQuote";
import "./styles.css";
import {hardProcess} from "../../helpers/hardProcess";

export const MemoHook = () => {
    const {counter, increment} = useCounterQuote(5000);
    const [show, setShow] = useState(true);

    // Si el counter cambia (segundo parámetro) necesito una nueva versión memorizada
    // de la función hardProcess
    //Solo se dispara la función cuando el counter cambia. Si presiono el botón
    // Show/Hide, no se ejecuta
    const memoHardProcess = useMemo(() => hardProcess(counter), [counter]);

    return (
        <div>
            <h1>Memo Hook</h1>
            <hr></hr>

            <p>Counter: {counter}</p>

            <p>{memoHardProcess}</p>

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
