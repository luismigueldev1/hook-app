import { shallow } from "enzyme";
import TodoListItem from "../../../components/08-useReducer/TodoApp/TodoListItem";
import { demoTodos } from "../../fixtures/demoTodos";

describe("Pruebas en el componente <TodoListItem/>", () => {
  const handleDelete = jest.fn();
  const handleToogle = jest.fn();
  const wrapper = shallow(
    <TodoListItem
      todo={demoTodos[0]}
      handleDelete={handleDelete}
      handleToogle={handleToogle}
    />
  );

  test("debe de renderizarze correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de llamar la funcion handleDelete", () => {
    wrapper.find(".btn-danger").simulate("click");

    expect(handleDelete).toHaveBeenCalledWith(1);
  });

  test("debe de llamar la funcion handleToogle", () => {
    wrapper.find(".btn-primary").simulate("click");
    expect(handleToogle).toHaveBeenCalled();
  });

  test("debe de mostrar el text correctamente", () => {
    const p = wrapper.find("p").text().trim();
    expect(p).toBe(demoTodos[0].task);
  });
});
