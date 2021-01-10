import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "../hooks/useForm";


describe("Testing useForm.js", () => {
    const initialForm = {
        name: "Raul",
        email: "raulrobi@gmail.com"
    };

    test("should return a the default form", () => {
        const { result } = renderHook(() => useForm(initialForm));
        // Extraigo valores y funciones retornadas por el useForm
        const [values, funcs] = result.current;
        const { handleInputChange, reset } = funcs;

        expect(values).toEqual(initialForm);
        expect(typeof handleInputChange).toBe("function");
        expect(typeof reset).toBe("function");
    });

    test("should change the name value of the form", () => {
        const { result } = renderHook(() => useForm(initialForm));
        // Extraigo valores y funciones retornadas por el useForm
        const [values, funcs] = result.current;
        const { handleInputChange } = funcs;
    });

    test("should reset the form", () => {
        const { result } = renderHook(() => useForm());

        // expect(result.current.state).toBe(10); expect(typeof result.current.decrement).toBe("function"); expect(typeof result.current.increment).toBe("function"); expect(typeof result.current.reset).toBe("function");
    });
});