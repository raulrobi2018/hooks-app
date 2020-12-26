import React from "react";
import {useForm} from "../../hooks/useForm";

export const TodoAdd = ({addTodo}) => {
    // Utilizo mi custom hook definido en el archivo useForm.js
    // Extraigo la descripción del estado devuelto y la función que deseo manejar
    const [{description}, {handleInputChange, reset}] = useForm({
        description: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length <= 1) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        addTodo(newTodo);
        reset();
    };

    return (
        <form className="mb-3">
            <div className="row">
                <div className="col-8">
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">
                            Description
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            aria-label="Description"
                            aria-describedby="basic-addon1"
                            name="description"
                            autoComplete="off"
                            onChange={handleInputChange}
                            value={description}
                        />
                    </div>
                </div>
                <div className="col-2">
                    <button
                        className="btn btn-success btn-block"
                        type="submit"
                        onClick={handleSubmit}
                    >
                        Add
                    </button>
                </div>
            </div>
        </form>
    );
};
