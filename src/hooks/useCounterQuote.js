import {useState} from "react";

// initialState con valor por defecto de 10
export const useCounterQuote = (initialState = 1) => {
    const [counter, setCounter] = useState(initialState);

    const increment = () => {
        setCounter(counter + 1);
    };

    const decrement = () => {
        setCounter(counter - 1);
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
