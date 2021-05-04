import { renderHook, act } from "@testing-library/react-hooks";
import { useCounter } from "../../hooks/useCounter";

describe("Pruebas en useCounter", () => {
  test("Debe retorar valores por defecto", () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.state).toBe(10);
    expect(typeof result.current.increment).toBe("function");
    expect(typeof result.current.decrement).toBe("function");
    expect(typeof result.current.reset).toBe("function");
  });

  test("debe tener el counter en 100 ", () => {
    const { result } = renderHook(() => useCounter(100));
    expect(result.current.state).toBe(100);
  });

  test("debe de incrementar el counter en  1", () => {
    const { result } = renderHook(() => useCounter(100));
    act(() => {
      result.current.increment();
    });
    expect(result.current.state).toBe(101);
  });

  test("debe de decrementar el counter en  1", () => {
    const { result } = renderHook(() => useCounter(100));
    act(() => {
      result.current.decrement();
    });
    expect(result.current.state).toBe(99);
  });

  test("debe de resetear el counter a su valor por defecto", () => {
    const defaultValue = 100;
    const { result } = renderHook(() => useCounter(defaultValue));
    act(() => {
      result.current.increment(2);
      result.current.reset();
    });
    expect(result.current.state).toBe(defaultValue);
  });
});
