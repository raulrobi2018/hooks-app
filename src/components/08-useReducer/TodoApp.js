import React, {useReducer} from "react";

import "./styles.css";
import {todoReducer} from "./todoReducer";

const initialState = {
    id: new Date().getTime(),
    todo: "Buy bread",
    done: false
};

export const TodoApp = () => {
    const [todos] = useReducer(todoReducer, initialState);

    return (
        <>
            <h1>TODO Reducer</h1>
            <hr />

            <p></p>
        </>
    );
};
