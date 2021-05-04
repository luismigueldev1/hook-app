import { act } from "@testing-library/react";
import { mount, shallow } from "enzyme";
import TodoApp from "../../../components/08-useReducer/TodoApp/index";
import { demoTodos } from "../../fixtures/demoTodos";

describe("Pruebas en <TodoApp/>", () => {
  const wrapper = shallow(<TodoApp />);

  Storage.prototype.setItem = jest.fn(() => {});

  test("debe renderizar correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  //   test("debe de agregar un TODO", () => {
  //     const wrapper = mount(<TodoApp />);
  //     console.log(wrapper);

  //     act(() => {
  //       wrapper.find("TodoForm").prop("handleAddTodo")(demoTodos[0]);
  //       wrapper.find("TodoForm").prop("handleAddTodo")(demoTodos[1]);
  //     });

  //     expect(wrapper.find("h1").text().trim()).toBe("Todo App (2)");
  //     expect(localStorage.setItem).toHaveBeenCalledTimes(2);
  //   });
});
