import React, { useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

import './styles.css';

export const Navbar = () => {

    const {user, dispatch} = useContext(AuthContext);

    const history = useHistory();

    const handleLogout = () => {
        history.replace('/login');

        dispatch({
            type: types.logout
        });
    };

    return (
        <nav className='navbar'>
            <Link
                className="brand"
                to="/"
            >
                Asociaciones
            </Link>

            <div className='links'>
                <NavLink
                    activeClassName="active"
                    className="link"
                    exact
                    to="/marvel"
                >
                    Marvel
                </NavLink>

                <NavLink
                    activeClassName="active"
                    className="link"
                    exact
                    to="/dc"
                >
                    DC
                </NavLink>
                <NavLink
                    activeClassName="active"
                    className="link"
                    exact
                    to="/search"
                >
                    Search
                </NavLink>
            </div>
            <div>
                <span>
                    {user.name}
                </span>
                <button
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
        </nav>
    )
}