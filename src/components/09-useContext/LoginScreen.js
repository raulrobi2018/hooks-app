import React, {useContext} from "react";
import {UserContext} from "./UserContext";

export const LoginScreen = () => {
    const {setUser} = useContext(UserContext);

    return (
        <div>
            <h1>Login</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={() =>
                    setUser({
                        id: 1,
                        name: "Raul Rodriguez",
                        age: 42,
                        email: "raulrobi@gmail.com"
                    })
                }
            >
                Login
            </button>
        </div>
    );
};
