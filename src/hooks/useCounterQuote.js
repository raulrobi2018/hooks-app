import {useState} from "react";

// initialState con valor por defecto de 10
export const useCounterQuote = (initialState = 10) => {
    const [counter, setCounter] = useState(initialState);

    const increment = () => {
        setCounter(counter + 1);
    };

    const decrement = () => {
        counter > 1 ? setCounter(counter - 1) : setCounter(1);
    };

    const reset = () => {
        setCounter(initialState);
    };

    return {
        counter,
        increment,
        decrement,
        reset
    };
};
