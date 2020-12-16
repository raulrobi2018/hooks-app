import React, {useEffect, useState} from "react";
import "./effects.css";

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        name: "",
        email: ""
    });

    const {name, email} = formState;

    // El useEffect va a permitir ejecutar algún efecto secundario cuando algo suceda
    // en nuestros componentes
    // Si queremos evitar que nuestro useEffect se dispare cada vez que cambia nuestro
    // component, se deberá poner [] como segundo argumento
    // ESTE useEffect SE UTILIZA PARA CAMBIOS EN EL COMPONENTE ENTERO
    useEffect(() => {
        console.log("hey");
    }, []);

    // Este useEffect es únicamente para cambios en el form
    useEffect(() => {
        console.log("Cambió el form");
    }, [formState]);

    // Este useEffect es únicamente para cambios en el form
    useEffect(() => {
        console.log("Cambió el email");
    }, [email]);

    // Desestructuro target del event
    const handleInputChange = ({target}) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        });
    };

    return (
        <>
            <h1>useEffect</h1>
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
        </>
    );
};
