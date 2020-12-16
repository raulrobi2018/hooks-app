import React from "react";
import "./effects.css";

export const SimpleForm = () => {

    // El useEffect va a permitir ejecutar algún efecto secundario
    useEffect(() => {
        console.log('hey');
        
    }

  return (
    <>
      <h1>useEffect</h1>
      <hr />
    </>
  );
}
