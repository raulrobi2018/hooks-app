import React, {useReducer} from "react";

import "./styles.css";
import {todoReducer} from "./todoReducer";

const initialState = [
    {
        id: new Date().getTime(),
        todo: "Buy bread",
        done: false
    }
];

export const TodoApp = () => {
    const [todoList] = useReducer(todoReducer, initialState);

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
                        <button className="btn btn-success btn-block">
                            Add
                        </button>
                    </div>
                </div>
            </form>

            <hr />

            {todoList.map((t, i) => {
                return (
                    <div key={t.id} className="row">
                        <div className="col-10 text-left">
                            {i + 1} - {t.todo}
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
