import React, {useEffect, useState} from "react";

export const useForm = (initialState = {}) => {
    const [values, setvalues] = useState(initialState);

    // Desestructuro target del event
    const handleInputChange = ({target}) => {
        setvalues({
            ...values,
            [target.name]: target.value
        });
    };

    const {email} = values;

    useEffect(() => {
        console.log("Cambió el email");
    }, [email]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
    };

    return [values, handleInputChange, handleSubmit];
};
