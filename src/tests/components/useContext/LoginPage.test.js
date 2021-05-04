import { mount } from "enzyme";
import { UserContext } from "../../../components/09-useContext/context/UserContext";
import LoginPage from "../../../components/09-useContext/LoginPage";

describe("Puebas en <LoginPage/>", () => {
  //const setUser = jest.fn()

  //   const wrapper = mount(
  //     <UserContext.Provider user={{
  //    setUser
  //}}>
  //       <LoginPage />
  //     </UserContext.Provider>
  //   );

  test("debe renderizar correctamente", () => {
    // expect(wrapper).toMatchSnapshot();
  });

  test("debe de ejecutar el setUser con el argumento esperado ", () => {
    // wraper.find("button").prop("onClick")()
    // expecct (setUser).toHaveBeenCalledWith({
    //   id: 1234,
    //   name: "Luis Miguel",
    //   email: "inf.lrodriguez@gmail.com",
    //})
  });
});
