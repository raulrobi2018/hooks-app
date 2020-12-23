import React, {useEffect, useReducer} from "react";
import {useForm} from "../../hooks/useForm";

import "./styles.css";
import {todoReducer} from "./todoReducer";

// Inicializa el initialState
const init = () => {
    // Inicializo con los TODO's que estén guardados en el localstorage
    // Si no hay, el JSON.parse retorna 'null' y devolvemos un array vacío
    return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
    // La función init sirve para que el reducer no se esté ejecutando cada vez que se
    // renderiza el componente. En este caso lo que hacía el 'initialState' lo pasamos al init
    const [todoList, dispatch] = useReducer(todoReducer, [], init);

    // Utilizo mi custom hook definido en el archivo useForm.js
    // Extraigo la descripción del estado devuelto y la función que deseo manejar
    const [{description}, {handleInputChange, reset}] = useForm({
        description: ""
    });

    // Cuando la lista de TODO's tenga cualquier cambio; agrego, elimino o modifico en el localStorage
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todoList));
    }, [todoList]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        const action = {
            type: "add",
            payload: newTodo
        };

        // El dispatch será el encargado de cambiar el estado
        // con la información recibida en el payload
        dispatch(action);
        reset();
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
                    <div className="col-8">
                        <input
                            type="text"
                            name="description"
                            placeholder="Description..."
                            autoComplete="off"
                            onChange={handleInputChange}
                            value={description}
                        ></input>
                    </div>
                    <div className="col-2">
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
