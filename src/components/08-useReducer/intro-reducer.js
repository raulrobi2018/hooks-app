const initialState = [
    {
        id: 1,
        todo: "Buy bread",
        done: false
    }
];

// En un reducer, la acción es la que va a modificar el state
const todoReducer = (state = initialState, action) => {
    // action?: evalúa si action es undefined, si lo es, no lee la propiedad type
    if (action?.type === "add") {
        // No se debe hacer un push cuando estamos modificando el state,
        // Por eso aquí primero obtenemos todos los elementos del array con el operador spred (...state) y
        // luego le agregamos el que viene nuevo
        return [...state, action.payload];
    }

    return state;
};

let todoList = todoReducer();

const newTodo = {
    id: 2,
    todo: "Buy milk",
    done: false
};

const action = {
    type: "add",
    payload: newTodo
};

todoList = todoReducer(todoList, action);

console.log(todoList);
