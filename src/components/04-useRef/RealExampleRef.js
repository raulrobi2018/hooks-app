import React, {useState} from "react";
import {MultipleCustomHooks} from "../03-examples/MultipleCustomHooks";
import "./styles.css";

export const RealExampleRef = () => {
    const [show, setShow] = useState(false);

    return (
        <>
            <h1>Real Example useRef</h1>
            <hr />

            {/* Si show está en true, muestra el componente, en caso contrario lo oculta */}
            {show && <MultipleCustomHooks />}

            <button
                className="btn btn-secondary mt-3"
                onClick={() => {
                    setShow(!show);
                }}
            >
                Show/Hide
            </button>
        </>
    );
};
