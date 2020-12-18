import React, {memo} from "react";

// Mandamos value en los props

// El memo es utilizado para memorizar algo y que solo si sus properties cambian
// va a volver a renderizar
export const Small = memo(({value}) => {
    console.log("Renderizado");
    return <small>{value}</small>;
});
