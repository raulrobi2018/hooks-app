import {mount, configure} from "enzyme";
import {HomeScreen} from "../../../components/09-useContext/HomeScreen";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import {UserContext} from "../../../components/09-useContext/UserContext";

//Configuración necesaria para que funcione mount con React 17
configure({adapter: new Adapter()});

describe("Testing HomeScreen", () => {
    const user = {
        name: "Raul",
        email: "rr@gmail.com"
    };
    const wrapper = mount(
        <UserContext.Provider value={{user}}>
            <HomeScreen />
        </UserContext.Provider>
    );

    test("should display the component correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });
});
