import React from "react";
import {TodoItem} from "./TodoItem";

export const TodoList = ({todoList, handleDelete, handleToggle}) => {
    return (
        <>
            {todoList.map((t, i) => (
                <TodoItem
                    key={t.id}
                    todo={t}
                    index={i}
                    handleDelete={handleDelete}
                    handleToggle={handleToggle}
                />
            ))}
        </>
    );
};
