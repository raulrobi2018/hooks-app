import {shallow} from "enzyme";
import {TodoList} from "../../../components/08-useReducer/TodoList";
import {demoTodos} from "../../resources/demoTodos";

describe("Testing todoList component", () => {
    const handleDel = jest.fn();
    const handleTog = jest.fn();
    const wrapper = shallow(
        <TodoList
            todoList={demoTodos}
            handleDelete={handleDel}
            handleToggle={handleTog}
        />
    );

    test("should display the component correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });

    test("should have 2 todos item", () => {
        expect(wrapper.find("TodoItem").length).toBe(demoTodos.length);
    });

    test("should have functions", () => {
        // Se expera que la propiedad handleDelete sea una función
        expect(wrapper.find("TodoItem").at(0).prop("handleDelete")).toEqual(
            expect.any(Function)
        );
    });
});
