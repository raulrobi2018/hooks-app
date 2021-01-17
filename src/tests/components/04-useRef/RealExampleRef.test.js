import React from "react";
import { RealExampleRef } from "../../../components/04-useRef/RealExampleRef";
import { shallow } from "enzyme";

//Para que me de la ayuda de funciones hago esta importación
import "@testing-library/jest-dom";

jest.mock("../../../hooks/useFetch");

describe("Testing RealExampleRef", () => {
  const wrapper = shallow(<RealExampleRef />);

  test("should display correctly", () => {
    expect(wrapper).toMatchSnapshot();
    //El componente no debe existir cuando arranca
    expect(wrapper.find("MultipleCustomHooks").exists()).toBe(false);
  });

  test("should display the MultipleCustomHook component", () => {
    wrapper.find("button").simulate("click");
    expect(wrapper.find("MultipleCustomHooks").exists()).toBe(true);
  });
});
