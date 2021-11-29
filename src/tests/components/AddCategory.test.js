import { shallow } from "enzyme";
import AddCategory from "../../components/AddCategory";

describe("Pruebas en <AddCategory/>", () => {
  let wrapper;
  const setCategories = jest.fn();
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("debe de cambiar la caja de texto", () => {
    const value = "Hola Mundo";
    let newValue;
    wrapper.find("input").simulate("change", { target: { value } });
    newValue = wrapper.find("input").props().value;
    expect(value).toBe(newValue);
  });
  test("no debe de postear la información con submit", () => {
    let form = wrapper.find("form");
    form.simulate("submit", {
      preventDefault: () => {},
    });
    expect(setCategories).not.toHaveBeenCalled();
  });
  test("debe de llamar el setCategories y limpiar la caja de texto", () => {
    let value = "Hola Mundo";
    wrapper.find("input").simulate("change", { target: { value } });
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategories).toHaveBeenCalled();
    value = wrapper.find("input").props().value;
    expect(value).toBe("");
  });
});
