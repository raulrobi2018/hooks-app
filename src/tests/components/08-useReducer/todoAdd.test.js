import {shallow} from "enzyme";
import {TodoAdd} from "../../../components/08-useReducer/TodoAdd";

describe("Testing TodoAdd", () => {
    const addTodo = jest.fn();
    const wrapper = shallow(<TodoAdd addTodo={addTodo} />);

    test("should display the component correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });

    test("should not call the addTodo function", () => {
        //Busca la función disparada por onSubmit
        const formSubmit = wrapper.find("button").prop("onClick");
        formSubmit({preventDefault() {}});

        //Se esperaría que se haya llamado 0 veces
        expect(addTodo).toHaveBeenCalledTimes(0);
    });

    test("should call the addTodo function", () => {
        // Primero se debe cambiar el valor del campo
        const value = "Learn React";
        wrapper.find("input").simulate("change", {
            target: {
                value,
                name: "description"
            }
        });
        const formSubmit = wrapper.find("button").prop("onClick");
        formSubmit({preventDefault() {}});
        expect(addTodo).toHaveBeenCalledTimes(1);
        expect(addTodo).toHaveBeenCalledWith({
            // Se espera que el id sea un número
            id: expect.any(Number),
            desc: value,
            done: false
        });

        // Luego que se agregue el nuevo todo, se espera que quede
        // vacío el campo debido a que llama a la función reset()
        expect(wrapper.find("input").prop("value")).toBe("");
    });
});
