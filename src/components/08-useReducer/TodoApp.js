import React, {useReducer} from "react";

import "./styles.css";
import {todoReducer} from "./todoReducer";

const initialState = [
    {
        id: new Date().getTime(),
        desc: "Buy bread",
        done: false
    }
];

export const TodoApp = () => {
    const [todoList, dispatch] = useReducer(todoReducer, initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = {
            id: new Date().getTime(),
            desc: "Go to the supermarket",
            done: false
        };

        const action = {
            type: "add",
            payload: newTodo
        };

        // El dispatch será el encargado de cambiar el estado
        // con la información recibida en el payload
        dispatch(action);
    };

    return (
        <>
            <h1>TODO Reducer</h1>
            <hr />
            <div className="row mb-3">
                <div className="col">
                    <strong>Number of TODO's: </strong> {todoList.length}
                </div>
            </div>

            <form className="mb-3">
                <div className="row">
                    <div className="col-10">
                        <input
                            type="text"
                            name="description"
                            placeholder="Description..."
                            autoComplete="off"
                        ></input>
                    </div>
                    <div className="col">
                        <button
                            className="btn btn-success btn-block"
                            type="submit"
                            onClick={handleSubmit}
                        >
                            Add
                        </button>
                    </div>
                </div>
            </form>

            <hr />

            {todoList.map((t, i) => {
                return (
                    <div key={t.id} className="row mb-2">
                        <div className="col-10 text-left item">
                            {i + 1} - {t.desc}
                        </div>
                        <div className="col-2">
                            <button className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                );
            })}
        </>
    );
};
