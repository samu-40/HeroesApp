import '../../setupTest';
import { mount } from "enzyme";
import HeroScreen from '../../components/heroes/HeroScreen';
import { MemoryRouter, Route } from 'react-router-dom';

describe('Pruebas en HeroScreen.js', () => {

    test('Mostrar <Redirect/> si no hay argumentos en la URL', () => {
        const history = {
            length: 10,
            push: jest.fn(),
            goBack: jest.fn()
        };

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <HeroScreen history={history}/>
            </MemoryRouter>
        );
        
        expect(wrapper.find('Redirect').exists()).toBe(true);

    });

    test('Debe mostrar un heroe si el parametro existe y se encuentra', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path='/hero/:heroeId' component={HeroScreen}/>
            </MemoryRouter>
        );

        expect(wrapper.find('.container-grid').exists()).toBe(true);

    });

    test('Debe llamar al push', () => {
        
        const history = {
            length: 1,
            push: jest.fn(),
            goBack: jest.fn()
        };

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route 
                    path='/hero/:heroeId' 
                    component={ () => <HeroScreen history={history} /> }
                />
            </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();

        expect(history.push).toHaveBeenCalledWith('/');
        expect(history.goBack).not.toHaveBeenCalled();

    });    

    test('Debe llamar al goBack', () => {
        
        const history = {
            length: 5,
            push: jest.fn(),
            goBack: jest.fn()
        };

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route 
                    path='/hero/:heroeId' 
                    component={ () => <HeroScreen history={history} /> }
                />
            </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();

        expect(history.goBack).toHaveBeenCalledTimes(1);
        expect(history.push).not.toHaveBeenCalled();

    });    

    test('Llamar a <Redirect/>', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider26227728']}>
                <Route 
                    path='/hero/:heroeId' 
                    component={ () => <HeroScreen history={history} /> }
                />
            </MemoryRouter>
        );

        expect(wrapper.text()).toBe('');

    });
    
    
});
