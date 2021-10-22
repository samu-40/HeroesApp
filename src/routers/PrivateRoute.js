import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({
    auth,
    component: Component,
    ...rest
}) => {
    
    localStorage.setItem('lastPath', rest.location.pathname);
    localStorage.setItem('lastSearch', rest.location.search);

    return (

        <Route
            {...rest}
            component={
                (props) => (
                    (auth)
                        ? <Component {...props}/>
                        : <Redirect to='/login'/>
                )
            }
        />

    )
}

PrivateRoute.propTypes = {
    auth: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired,
};

export default PrivateRoute;
