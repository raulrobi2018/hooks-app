import {renderHook, act} from "@testing-library/react-hooks";
import {useForm} from "../hooks/useForm";

describe("Testing useForm.js", () => {
    const initialForm = {
        name: "Raul",
        email: "raulrobi@gmail.com"
    };

    test("should return a the default form", () => {
        const {result} = renderHook(() => useForm(initialForm));
        // Extraigo valores y funciones retornadas por el useForm
        const [values, funcs] = result.current;
        const {handleInputChange, reset} = funcs;

        expect(values).toEqual(initialForm);
        expect(typeof handleInputChange).toBe("function");
        expect(typeof reset).toBe("function");
    });

    test("should change the name value of the form", () => {
        const {result} = renderHook(() => useForm(initialForm));
        // Extraigo valores y funciones retornadas por el useForm
        const [, funcs] = result.current;
        const {handleInputChange} = funcs;

        act(() => {
            handleInputChange({
                target: {
                    name: "name",
                    value: "Mellisa"
                }
            });
        });

        const [values] = result.current;

        console.log(values);

        expect(values).toEqual({...initialForm, name: "Mellisa"});
    });

    test("should reset the form", () => {
        const {result} = renderHook(() => useForm(initialForm));
        // Extraigo valores y funciones retornadas por el useForm
        const [, funcs] = result.current;
        const {handleInputChange, reset} = funcs;

        act(() => {
            handleInputChange({
                target: {
                    name: "name",
                    value: "Mellisa"
                }
            });

            reset();
        });

        const [values] = result.current;

        // Aqui se esperaría que values sea igual al initialForm porque hacemos un reset
        expect(values).toEqual({...initialForm});
    });
});
