import '../../setupTest'
import { mount } from "enzyme";
import PrivateRoute from "../../routers/PrivateRoute";
import { MemoryRouter } from 'react-router';

describe('Pruebas en PrivateRoutes.js', () => {

    const props = {
        location: {
            pathname: '/marvel'
        }
    };

    Storage.prototype.setItem = jest.fn();

    test('Mostrar el componente si el usuario esta autenticado y guardar en el localStorage', () => {
        
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute 
                    auth={true}
                    component={() => <p>Hola</p>}
                    {...props}    
                />
            </MemoryRouter>
        );

        expect(wrapper.find('p').exists()).toBe(true);
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', props.location.pathname);

    });    

    test('Debe bloquear el componente si no esta auntenticado', () => {
        
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute 
                    auth={false}
                    component={() => <p>Hola</p>}
                    {...props}    
                />
            </MemoryRouter>
        );

        expect(wrapper.find('p').exists()).toBe(false);

    });    

});
