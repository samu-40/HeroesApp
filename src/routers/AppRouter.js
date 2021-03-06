import React, { useContext } from "react";
import {
    BrowserRouter as Router,
    Switch,
} from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

import LoginScreen from "../components/login/LoginScreen";
import DashboardRoutes from "./DashboardRoutes";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {

    const {user:{logged}} = useContext(AuthContext);

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute 
                        component={LoginScreen}
                        auth={logged}
                        exact path='/login' 
                    />

                    <PrivateRoute 
                        component={DashboardRoutes}
                        auth={logged}
                        path='/'
                    />
                </Switch>
            </div>
        </Router>
    )
};

export default AppRouter
