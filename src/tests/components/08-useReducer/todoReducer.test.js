import { todoReducer } from "../../../components/08-useReducer/todoReducer";

const demoTodos = [
  {
    id: 1,
    desc: "Learn React",
    done: false
  },
  { id: 2, dscc: "Learn Mongo", done: false }
];

describe("Testing todoReducer", () => {
  test("should return the default state", () => {
    const state = todoReducer();
  });
});
