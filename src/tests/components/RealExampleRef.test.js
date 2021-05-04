import { shallow } from "enzyme";
import RealExampleRef from "../../components/04-useRef/RealExampleRef";

describe("Pruebas en <RealExampleRef/>", () => {
  const wrapper = shallow(<RealExampleRef />);
  test("Debe rederizarse correctamente", () => {});

  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find("MultipleCustomHooks").exists()).toBe(false);

  test("Debe rederizarse el componente MultipleCustomHooks", () => {
    expect(wrapper.find("button").simulate("click"));
    expect(wrapper.find("MultipleCustomHooks").exists()).toBe(true);
  });
});
