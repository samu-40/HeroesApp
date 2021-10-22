import '../../setupTest';
import { mount } from "enzyme";
import SearchScreen from '../../components/search/SearchScreen';
import { MemoryRouter, Route } from 'react-router-dom';

describe('Pruebas en SearchScreen.js', () => {
        
    test('Mostrar componente con valores por defecto', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/search']}>
                <Route 
                    path='/search' 
                    component={SearchScreen}
                />
            </MemoryRouter>
        );
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h4').text().trim()).toBe('Results');

    });

    test('Debe mostrar al heroe y el input con el valor del queryString', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <Route 
                    path='/search' 
                    component={SearchScreen}
                />
            </MemoryRouter>
        );

        expect(wrapper.find('input').prop('value')).toBe('batman');
        expect(wrapper).toMatchSnapshot();

    });

    test('Deme mostrar un error si no se encuentra al heroe', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman1253']}>
                <Route 
                    path='/search' 
                    component={SearchScreen}
                />
            </MemoryRouter>
        );

        expect(wrapper.find('#error').text().trim()).toBe('Hero batman1253 not found');
        expect(wrapper).toMatchSnapshot();

    });

    test('Debe llamar al push del history', () => {
        
        const history = {
            push: jest.fn()
        };

        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <Route 
                    path='/search' 
                    component={ () => <SearchScreen history={history}/> }
                />
            </MemoryRouter>
        );

        wrapper.find('input').simulate('change', {
            target: {
                name: 'textSearch',
                value: 'batman'
            }
        });

        wrapper.find('form').prop('onSubmit')({
            preventDefault(){}
        });

        expect(history.push).toHaveBeenCalledWith('?q=batman');

    });    
    
});
