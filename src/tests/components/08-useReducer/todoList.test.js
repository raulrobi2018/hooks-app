import { shallow } from "enzyme";
import { TodoList } from "../../../components/08-useReducer/TodoList";
import { demoTodos } from "../../resources/demoTodos";

describe("Testing todoList component", () => {
            const handleDel = jest.fn();
            const handleTog = jest.fn();
            console.log(demoTodos);
            const wrapper = shallow( < TodoList todoList = { demoTodos }
                handleDelete = { handleDel }
                handleToggle = { handleTog }

                />);

                test("should display the component correctly", () => {
                    expect(wrapper).toMatchSnapshot();
                });


            });