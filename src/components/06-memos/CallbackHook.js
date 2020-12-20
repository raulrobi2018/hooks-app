import React, {useCallback, useEffect, useState} from "react";
import {ShowIncrement} from "./ShowIncrement";
import "./styles.css";

// Uno de los usos del callbackHook es para cuando mandamos una función
// a un componente hijo. Si no se utiliza el useCallback, ese hijo siempre se
//va a estar generando porque React genera una nueva versión
export const CallbackHook = () => {
    const [counter, setCounter] = useState(10);

    // Va a devolver una versión memorizada de la función
    const increment = useCallback(
        (num) => {
            setCounter((c) => c + num);
        },
        [setCounter]
    );

    // El segundo uso del useCallback es cuando tenemos un useEffect y tiene como
    // dependencia la función que se envía al componente
    useEffect(() => {
        //
    }, [increment]);

    return (
        <div>
            <h1>useCallback Hook</h1>
            <hr />

            <p>Counter {counter}</p>

            <ShowIncrement increment={increment} />
        </div>
    );
};
