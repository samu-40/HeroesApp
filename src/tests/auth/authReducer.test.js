import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";

describe('Pruebas en authReducer.js', () => {

    const initState = {logged:false};
    const name = 'Samuel';

    test('Retornar el estado por defecto', () => {

        const resl = authReducer(initState, {});
        
        expect(resl).toEqual(initState);

    });

    test('Autenticar y colocar el name del usuario', () => {

        const action = {
            type: types.login,
            payload: {
                name,
            }
        }
        
        const resl = authReducer(initState, action);

        expect(resl).toEqual({name, logged: true});

    });

    test('Desauntenticar y borrar el nombre del usuario', () => {

        const action = {
            type: types.logout,
        }
        
        const resl = authReducer({name, logged: true}, action);

        expect(resl).toEqual({logged: false});

    });

});
