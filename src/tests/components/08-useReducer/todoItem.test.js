import { shallow } from "enzyme";
import { TodoItem } from "../../../components/08-useReducer/TodoItem";
import { demoTodos } from "../../resources/demoTodos";

describe("Testing todoItem component", () => {
  const handleDel = jest.fn();
  const handleTog = jest.fn();
  const wrapper = shallow(
    <TodoItem
      todo={demoTodos[0]}
      index={0}
      handleDelete={handleDel}
      handleToggle={handleTog}
    />
  );

  test("should display the component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should call the delete function", () => {
    wrapper.find("button").simulate("click");
    expect(handleDel).toHaveBeenCalledWith(demoTodos[0].id);
  });

  test("should call the toggle function", () => {
    wrapper.find("#toggle").simulate("click");
    expect(handleTog).toHaveBeenCalledWith(demoTodos[0].id);
  });

  test("should display the text value correctly", () => {
    const div = wrapper.find("#toggle");
    expect(div.text().trim()).toBe(`1 - ${demoTodos[0].desc}`);
  });

  test("should have the 'complete' class", () => {
    const todo = demoTodos[0];
    todo.done = true;
    const wrapper = shallow(<TodoItem todo={todo} />);

    expect(wrapper.find("#toggle").hasClass("complete")).toBe(true);
  });
});
