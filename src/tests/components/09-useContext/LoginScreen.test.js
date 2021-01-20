import {mount, shallow, configure} from "enzyme";
import {LoginScreen} from "../../../components/09-useContext/LoginScreen";
import {UserContext} from "../../../components/09-useContext/UserContext";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

//Configuración necesaria para que funcione mount con React 17
configure({adapter: new Adapter()});

describe("Testing LoginScreen", () => {
    const setUser = jest.fn();
    const user = {
        id: 1,
        name: "Raul Rodriguez",
        age: 42,
        email: "raulrobi@gmail.com"
    };

    const wrapper = mount(
        <UserContext.Provider value={{setUser}}>
            <LoginScreen />
        </UserContext.Provider>
    );

    test("should display the component correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });

    test("should execute the setUser", () => {
        wrapper.find("button").simulate("click");
        expect(setUser).toHaveBeenCalledWith(user);
    });
});
