import React, { useEffect, useState } from "react";
import "./effects.css";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: ""
  });

  const { name, email } = formState;

  // El useEffect va a permitir ejecutar algún efecto secundario cuando algo suceda
  // en nuestros componentes
  // Si queremos evitar que nuestro useEffect se dispare cada vez que cambia nuestro
  // component, se deberá poner [] como segundo argumento
  // ESTE useEffect SE UTILIZA PARA CAMBIOS EN EL COMPONENTE ENTERO
  useEffect(() => {}, []);

  // Este useEffect es únicamente para cambios en el form
  useEffect(() => {}, [formState]);

  // Este useEffect es únicamente para cambios en el form
  // Esto es util para cuando por ejemplo tenemos un combobox y queremos
  // saber cuando cambia para hacer algo
  useEffect(() => {}, [email]);

  // Desestructuro target del event
  const handleInputChange = ({ target }) => {
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
      {/* Si el name es igual a '123' se muestra el componente Message */}
      {name === "123" && <Message />}
    </>
  );
};
