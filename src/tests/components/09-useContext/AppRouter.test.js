import {mount, configure} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import {AppRouter} from "../../../components/09-useContext/AppRouter";
import {UserContext} from "../../../components/09-useContext/UserContext";

//Configuración necesaria para que funcione mount con React 17
configure({adapter: new Adapter()});

describe("Testing AppRouter component", () => {
    const user = {
        name: "Raul",
        email: "rr@gmail.com"
    };

    const wrapper = mount(
        <UserContext.Provider value={{user}}>
            <AppRouter />
        </UserContext.Provider>
    );

    test("should display the component correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });

    test("should ", () => {});
});
