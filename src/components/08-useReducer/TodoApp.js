import React, {useEffect, useReducer} from "react";

import "./styles.css";
import {TodoAdd} from "./TodoAdd";
import {TodoList} from "./TodoList";
import {todoReducer} from "./todoReducer";

// Inicializa el initialState
const init = () => {
    // Inicializo con los TODO's que estén guardados en el localstorage
    // Si no hay, el JSON.parse retorna 'null' y devolvemos un array vacío
    return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
    // El todoReducer se encarga de modificar el estado y lo tomamos en 'todoList'
    // La función init sirve para que el reducer no se esté ejecutando cada vez que se
    // renderiza el componente. En este caso lo que hacía el 'initialState' lo pasamos al init
    // Adicionalmente el useReducer provee la función 'dispatch' que permitirá ejecutar una acción
    const [todoList, dispatch] = useReducer(todoReducer, [], init);

    // Cuando la lista de TODO's tenga cualquier cambio; agrego, elimino o modifico en el localStorage
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todoList));
    }, [todoList]);

    const addTodo = (todo) => {
        dispatch({
            type: "add",
            payload: todo
        });
    };

    const handleDelete = (todoId) => {
        const action = {
            type: "delete",
            payload: todoId
        };

        dispatch(action);
    };

    const handleToggle = (todoId) => {
        dispatch({
            type: "toggle",
            payload: todoId
        });
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

            <TodoAdd addTodo={addTodo} />

            <hr />

            <TodoList
                todoList={todoList}
                handleDelete={handleDelete}
                handleToggle={handleToggle}
            />
        </>
    );
};
