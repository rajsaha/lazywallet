import React from "react";
import {Redirect} from "react-router-dom";
import {Route} from "react-router";

function ProtectedRoute({ component, path }) {
    const Component = component;
    const token = localStorage.getItem('token');

    return token ?
        (
            <Route exact path={path}>
                <Component />
            </Route>
        )
        :
        (<Redirect to={{ pathname: '/login'}} />);
}

export default ProtectedRoute;
