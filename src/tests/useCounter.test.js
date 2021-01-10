import {renderHook, act} from "@testing-library/react-hooks";
import {useCounter} from "../hooks/useCounter";

describe("Testing useCounter", () => {
    test("should return default values", () => {
        const {result} = renderHook(() => useCounter());

        console.log(result.current);

        expect(result.current.state).toBe(10);
        expect(typeof result.current.decrement).toBe("function");
        expect(typeof result.current.increment).toBe("function");
        expect(typeof result.current.reset).toBe("function");
    });

    test("should return the state with a value of 100", () => {
        const {result} = renderHook(() => useCounter(100));

        expect(result.current.state).toBe(100);
    });

    test("should increment the state in 1", () => {
        const {result} = renderHook(() => useCounter(100));
        const {increment} = result.current;

        act(() => {
            increment();
        });

        const {state} = result.current;
        expect(state).toBe(101);
    });

    test("should decrement the state in 1", () => {
        const {result} = renderHook(() => useCounter(100));
        const {decrement} = result.current;

        act(() => {
            decrement();
        });

        const {state} = result.current;
        expect(state).toBe(99);
    });

    test("should reset the state", () => {
        const {result} = renderHook(() => useCounter(100));
        const {increment, reset} = result.current;

        act(() => {
            increment();
            reset();
        });

        const {state} = result.current;
        expect(state).toBe(100);
    });
});
