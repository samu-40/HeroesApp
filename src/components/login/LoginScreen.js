import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';
import './style.css';

const LoginScreen = ({ history }) => {
    
    const {dispatch} = useContext(AuthContext);

    const handleLogin = () => {
        
        const lastPath = localStorage.getItem('lastPath') || '/';
        const lastSearch = localStorage.getItem('lastSearch');
        
        dispatch({
            type: types.login,
            payload: {name: 'Samuel'},
        });

        history.replace(lastPath + lastSearch);
    };

    return (
        <div className='box'>
            <h1>Login</h1>

            <button 
                className='btn'
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    )
}

export default LoginScreen;
