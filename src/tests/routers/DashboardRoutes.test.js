import '../../setupTest';
import { mount } from "enzyme";
import DashboardRoutes from '../../routers/DashboardRoutes';
import { AuthContext } from '../../auth/AuthContext';
import { MemoryRouter } from 'react-router-dom';


describe('Pruebas en DashboardRoutes.js', () => {

    test('Debe mostarse correctamente ', () => {

        const contextValue = {
            dispatch: jest.fn(),
            user: { logged: false, name: 'Samuel' }
        };

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <DashboardRoutes/>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('span').text().trim()).toBe('Samuel');

    });
    
});
