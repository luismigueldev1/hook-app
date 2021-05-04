import { shallow } from "enzyme";
import TodoForm from "../../../components/08-useReducer/TodoApp/TodoForm";

describe("Pruebas en <TodoForm/>", () => {
  const handleAddTodo = jest.fn();

  const wrapper = shallow(<TodoForm handleAddTodo={handleAddTodo} />);
  test("debe de renderizarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("No debe de llamar handleAddTodo", () => {
    const formSubmit = wrapper.find("form").prop("onSubmit");
    formSubmit({ preventDefault() {} });

    expect(handleAddTodo).toHaveBeenCalledTimes(0);
  });

  test("Debe de llamar la funcion handleAddTodo", () => {
    const value = "Aprender React";
    wrapper.find("input").simulate("change", {
      target: {
        name: "task",
        value: value,
      },
    });
    const formSubmit = wrapper.find("form").prop("onSubmit");
    formSubmit({ preventDefault() {} });

    expect(handleAddTodo).toHaveBeenCalledTimes(1);
    expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
    expect(handleAddTodo).toHaveBeenCalledWith({
      id: expect.any(Number),
      task: value,
      done: false,
    });

    expect(wrapper.find("input").prop("value")).toBe("");
  });
});
