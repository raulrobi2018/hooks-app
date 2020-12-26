import React from "react";

export const TodoItem = ({todo, index, handleDelete, handleToggle}) => {
    return (
        <div className="row mb-2">
            <div
                className={`${
                    todo.done
                        ? "col-10 text-left item complete"
                        : "col-10 text-left item"
                }`}
                onClick={() => handleToggle(todo.id)}
            >
                {index + 1} - {todo.desc}
            </div>
            <div className="col-2">
                <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(todo.id)}
                    type="button"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};
