import React, {useRef} from "react";
import "./styles.css";

export const FocusScreen = () => {
    // El useRef sirve para hacer referencia a un elemento dado
    const inputRef = useRef();

    const handleClick = () => {
        // El atributo current es devuelto por el useRef,
        // en este caso va a ser el elemento input al cual le estoy haciendo referencia
        inputRef.current.focus();
    };

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />

            <input
                // Referencia al useRef
                ref={inputRef}
                type="text"
                placeholder="Name"
                className="form-control"
            ></input>

            <button
                className="btn btn-outline-primary mt-3"
                onClick={handleClick}
            >
                Focus
            </button>
        </div>
    );
};
