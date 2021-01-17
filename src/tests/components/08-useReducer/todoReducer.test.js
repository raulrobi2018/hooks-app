import {todoReducer} from "../../../components/08-useReducer/todoReducer";
import {demoTodos} from "../../resources/demoTodos";

describe("Testing todoReducer", () => {
    test("should return the default state", () => {
        const state = todoReducer(demoTodos, {});
        expect(state).toEqual(demoTodos);
    });

    test("should add a new todo", () => {
        const newTodo = {
            id: 3,
            desc: "Learn Angular",
            done: false
        };

        const state = todoReducer(demoTodos, {type: "add", payload: newTodo});
        //El nuevo state debe ser igual a todos los todos que habían más el nuevo todo
        expect(state).toEqual([...demoTodos, newTodo]);
    });
    test("should delete a todo", () => {
        const state = todoReducer(demoTodos, {type: "delete", payload: 1});
        //Solo debe de quedar el primero, o sea el de la posición 1
        expect(state).toEqual([demoTodos[1]]);
    });
    test("should toggle the todo", () => {
        const state = todoReducer(demoTodos, {type: "toggle", payload: 1});
        //El valor del done del elemento debe ser true
        expect(state[0].done).toBe(true);
    });
});
