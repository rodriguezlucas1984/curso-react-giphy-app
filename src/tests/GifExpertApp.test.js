import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";

describe("Pruebas en < GifExpertApp />", () => {
  let wrapper;
  test("debe de mostrarse correctamente el componente", () => {
    wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });
  test("debe de mostrar una lista de categorias", () => {
    const categories = ["Dragon Ball", "Samurai X"];
    wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GifGrid").length).toBe(categories.length);
  });
});
