import { todoReducer } from "../../../components/08-useReducer/TodoApp/todoReducer";
import { demoTodos } from "../../fixtures/demoTodos";

describe("Pruebas en todoReducer", () => {
  test("debe de retornar el estado por defecto ", () => {
    const state = todoReducer(demoTodos, {});

    expect(state).toEqual(demoTodos);
  });

  test("debe de agregar un TODO ", () => {
    const action = {
      type: "ADD",
      payload: {
        id: 3,
        task: "Aprender Backend",
        done: false,
      },
    };
    const state = todoReducer(demoTodos, action);
    expect(state).toEqual([...demoTodos, action.payload]);
    expect(state.length).toBe(3);
  });

  test("debe de eliminar un TODO ", () => {
    const action = {
      type: "DELETE",
      payload: 1,
    };
    const state = todoReducer(demoTodos, action);
    expect(state.length).toBe(1);
    expect(state).toEqual([demoTodos[1]]);
  });

  test("debe hacer el TOOGLE de un TODO ", () => {
    const action = {
      type: "TOOGLE",
      payload: 1,
    };
    const state = todoReducer(demoTodos, action);

    expect(state[0].done).toBe(true);
    expect(state[1]).toEqual(demoTodos[1]);
  });
});
