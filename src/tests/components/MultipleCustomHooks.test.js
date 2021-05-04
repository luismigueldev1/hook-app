import React from "react";
import { shallow } from "enzyme";
import MultipleCustomHooks from "../../components/03-examples/MultipleCustomHooks";
import { useFetch } from "../../hooks/useFetch";

jest.mock("../../hooks/useFetch");

describe("Pruebas en <MultipleCustomHooks/>", () => {
  test("debe renderizar el componente", () => {
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });
    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper).toMatchSnapshot();
  });

  test("debe mostrar la información", () => {
    useFetch.mockReturnValue({
      data: [
        {
          author: "Luis Miguel",
          quote: "Hola Mundo",
        },
      ],
      loading: false,
      error: null,
    });
    const wrapper = shallow(<MultipleCustomHooks />);
    //console.log(wrapper.html());

    expect(wrapper.find(".spinner-border").exists()).toBe(false);
    expect(wrapper.find("i").text().trim()).toBe("Hola Mundo");
    expect(wrapper.find(".blockquote-footer").text().trim()).toBe(
      "Luis Miguel"
    );
  });
});
