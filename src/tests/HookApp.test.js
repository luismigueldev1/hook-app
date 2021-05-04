import { shallow } from "enzyme";
import React from "react";

import HookApp from "../HookApp";
describe("Pruebas en <HookApp/>", () => {
  test("Debe renderizarse correctamente", () => {
    const wrapper = shallow(<HookApp />);
    expect(wrapper).toMatchSnapshot();
  });
});
