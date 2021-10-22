import '../../setupTest';
import { mount } from "enzyme";
import { AuthContext } from '../../auth/AuthContext';
import { Navbar } from '../../components/UI/Navbar';
import { MemoryRouter, Router } from 'react-router-dom';
import { types } from "../../types/types";

describe('Pruebas en Navbar.js', () => {

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Samuel'
        }
    };

    const historyMock = {
        push: jest.fn(),
        replace: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn()
    };

    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter>
                <Router history={historyMock}>
                    <Navbar/>
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>
    );


    afterEach(() => {
        jest.clearAllMocks();
    });

    test('Mostrase correctamente ', () => {
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('span').text().trim()).toBe(contextValue.user.name);

    });

    test('Debe llamar el logout y llamar al history', () => {
        
        wrapper.find('button').prop('onClick')();

        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: types.logout
        });

        expect(historyMock.replace).toHaveBeenCalledWith('/login');

    });    
    
});
