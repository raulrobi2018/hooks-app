import {mount, shallow, configure} from "enzyme";
import {TodoApp} from "../../../components/08-useReducer/TodoApp";
import {demoTodos} from "../../resources/demoTodos";
import {act} from "@testing-library/react";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

configure({adapter: new Adapter()});

describe("Testing TodoApp component", () => {
    Storage.prototype.setItem = jest.fn(() => {});
    const wrapper = shallow(<TodoApp />);

    test("should return the component correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });

    test("should add a Todo", () => {
        //El 'mount' funciona igual que el 'shallow' pero obtiene información
        //más completa acerca de sus hijos y otras cosas
        const wrapper = mount(<TodoApp />);

        act(() => {
            wrapper.find("TodoAdd").prop("addTodo")(demoTodos[0]);
            wrapper.find("TodoAdd").prop("addTodo")(demoTodos[1]);
        });

        expect(wrapper.find("#numElements").text().trim()).toBe(
            "Number of TODO's:  2"
        );

        //2 veces porque lo ejecutamos 2 veces en el act
        expect(localStorage.setItem).toHaveBeenCalledTimes(2);
    });

    test("should delete a todo", () => {
        wrapper.find("TodoAdd").prop("addTodo")(demoTodos[0]);
        wrapper.find("TodoList").prop("handleDelete")(demoTodos[0].id);

        expect(wrapper.find("#numElements").text().trim()).toBe(
            "Number of TODO's:  0"
        );
    });
});
