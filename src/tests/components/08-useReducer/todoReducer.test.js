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
});
