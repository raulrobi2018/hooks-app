import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = (todoList, handleDelete, handleToggle) => {
  console.log(todoList);
  return (
    <>
      {todoList.map((t, i) => {
        return (
          <TodoItem
            todo={t}
            index={i}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        );
      })}
      ;
    </>
  );
};
