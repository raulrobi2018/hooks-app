import React from "react";
import {useFetch} from "./useFetch";
import "./styles.css";

export const MultipleCustomHooks = () => {
    console.log(useFetch(`https://www.breakingbadapi.com/api/quotes/1`));
    return (
        <>
            <h1>MultipleCustomHooks</h1>
        </>
    );
};
