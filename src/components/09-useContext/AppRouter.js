import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import {AboutScreen} from "./AboutScreen";
import {HomeScreen} from "./HomeScreen";
import {LoginScreen} from "./LoginScreen";
import {NavBar} from "./NavBar";

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={HomeScreen} />
                    <Route exact path="/about" component={AboutScreen} />
                    <Route exact path="/login" component={LoginScreen} />

                    {/* Si ingresan una ruta que no existe, entra aquí y redirecciona a / (barra).
                     También se puede crear una página 404 y poner otro Route al final que direccione
                     a esa página */}
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    );
};
