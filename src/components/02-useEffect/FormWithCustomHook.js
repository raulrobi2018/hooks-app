import React from "react";
import {useForm} from "../../hooks/useForm";
import "./effects.css";

export const FormWithCustomHook = () => {
    const [formState, handleInputChange, handleSubmit] = useForm({
        name: "",
        email: "",
        password: ""
    });

    const {name, email, password} = formState;

    return (
        <form onSubmit={handleSubmit}>
            <h1>FormWithCustomHook</h1>
            <hr />

            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Ingresa tu nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Ingresa tu email"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Ingresa tu password"
                    value={password}
                    onChange={handleInputChange}
                />
            </div>

            <button type="submit" className="btn btn-success">
                Guardar
            </button>
        </form>
    );
};
