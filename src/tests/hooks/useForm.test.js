import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";
describe("Pruebas en useForm", () => {
  const initialForm = {
    name: "Luis Miguel",
    email: "luismiguel@gmail.com",
  };

  test("debe de regresar un formulario por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [values, handleInputChange, reset] = result.current;

    expect(values).toEqual(initialForm);
    expect(typeof handleInputChange).toBe("function");
    expect(typeof reset).toBe("function");
  });

  test("debe de cambiar el valor del formulario", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: "name",
          value: "Angel",
        },
      });
    });

    const [values] = result.current;

    //expect(values).toEqual({ name: "Angel", email: "luismiguel@gmail.com" });
    expect(values).toEqual({ ...initialForm, name: "Angel" });
  });

  test("debe reestablecer el formulario con reset", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange, reset] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: "name",
          value: "Angel",
        },
      });

      reset();
    });

    const [values] = result.current;

    expect(values).toEqual(initialForm);
  });
});
