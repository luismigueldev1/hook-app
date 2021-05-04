import { renderHook, act } from "@testing-library/react-hooks";
import { useFetch } from "../../hooks/useFetch";

jest.setTimeout(10000);

describe("Pruebas en useFetch", () => {
  test("Debe de retornar la informacion por defecto ", () => {
    const API = "https://www.breakingbadapi.com/api/quotes/1";
    const { result } = renderHook(() => useFetch(API));
    const { data, loading, error } = result.current;
    expect(data).toBe(null);
    expect(loading).toBe(true);
    expect(error).toBe(null);
  });

  test("debe de tener la info deseada ", async () => {
    const API = "https://www.breakingbadapi.com/api/quotes/1";
    const { result, waitForNextUpdate } = renderHook(() => useFetch(API));
    const options = {
      timeout: 10000,
    };
    await waitForNextUpdate(options);

    const { data, loading, error } = result.current;

    expect(data.length).toBe(1);
    expect(loading).toBe(false);
    expect(error).toBe(null);
  });

  test("debe de retornar 'No se pudo cargar la info' ", async () => {
    const API = "https://reqres.in/apiid/users?page=2";
    const { result, waitForNextUpdate } = renderHook(() => useFetch(API));
    const options = {
      timeout: 10000,
    };
    await waitForNextUpdate(options);

    const { data, loading, error } = result.current;

    expect(data).toBe(null);
    expect(loading).toBe(false);
    expect(error).toBe("No se pudo cargar la info");
  });
});
