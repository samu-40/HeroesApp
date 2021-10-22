import '../../setupTest';
import { mount } from "enzyme";
import AppRouter from "../../routers/AppRouter";
import { AuthContext } from '../../auth/AuthContext';

describe('Pruebas en AppRouter.js', () => {

    test('Mostrar <LoginScreen/> si no estoy autenticado ', () => {

        const contextValue = {
            dispatch: jest.fn(),
            user: { logged: false }
        };
        
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter/>
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();

    });

    test('Debe mostrar <MarvelScreen/> si estoy autenticado', () => {

        const contextValue = {
            dispatch: jest.fn(),
            user: { 
                logged: true,
                name: 'Samuel'
            }
        };
        
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter/>
            </AuthContext.Provider>
        );

        expect(wrapper.find('.navbar').exists()).toBe(true);

    });    

});
