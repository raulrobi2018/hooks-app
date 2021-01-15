import React from "react";
import {MultipleCustomHooks} from "../../../components/03-examples/MultipleCustomHooks";
import {shallow} from "enzyme";
import {useFetch} from "../../../hooks/useFetch";
import {useCounterQuote} from "../../../hooks/useCounterQuote";

//Para que me de la ayuda de funciones hago esta importación
import "@testing-library/jest-dom";

//Lo que hace esto es que cuando se vaya a utilizar el useFetch en este archivo
//en vez de utilizar el useFetch, va a utilizar una implementación que vamos a inventar
jest.mock("../../../hooks/useFetch");
jest.mock("../../../hooks/useCounterQuote");

describe("Testing MultipleCustomHooks", () => {
    useCounterQuote.mockReturnValue({counter: 10});

    test("should display correctly", () => {
        //retorna lo que retorna el useFetch por defecto
        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });

        const wrapper = shallow(<MultipleCustomHooks />);
        expect(wrapper).toMatchSnapshot();
    });

    test("should display the data", () => {
        useFetch.mockReturnValue({
            data: [
                {
                    author: "Raul",
                    quote: "Hola mundo"
                }
            ],
            loading: false,
            error: null
        });

        const wrapper = shallow(<MultipleCustomHooks />);

        console.log(wrapper.html());

        expect(wrapper.find("alert").exists()).toBe(false);
        expect(wrapper.find(".mb-1").text().trim()).toBe("Hola mundo");
        expect(wrapper.find("footer").text().trim()).toBe("Raul");
    });
});
