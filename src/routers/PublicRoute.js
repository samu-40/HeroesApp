import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const PublicRoute = ({
    auth,
    component: Component,
    ...rest
}) => {
    return (
        <Route
            {...rest}
            component={
                (props) => (
                    (!auth)
                        ? <Component {...props}/>
                        : <Redirect to='/'/>
                )
            }
        />
    )
};

PublicRoute.propTypes = {
    auth: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired,
};

export default PublicRoute
