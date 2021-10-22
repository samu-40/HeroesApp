import '../../setupTest';
import { mount } from "enzyme";
import LoginScreen from '../../components/login/LoginScreen';
import { AuthContext } from '../../auth/AuthContext';

describe('Pruebas en LoginScreen.js', () => {

    const history = {
        replace: jest.fn()
    };

    const contextValue = {
        dispatch: jest.fn()
    };

    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <LoginScreen history={history}/>
        </AuthContext.Provider>
    );

    test('Mostrar correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();

    });

    test('Debe llamar al dispatch y al replace', () => {
        
        wrapper.find('button').prop('onClick')();

        expect(contextValue.dispatch).toHaveBeenCalled();
        expect(history.replace).toHaveBeenCalled();

    });
    
    
});
