import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe("Pruebas en <GifGridItem/>", () => {
  const title = "Dragon Ball GIF by TOEI Animation UK";
  const url =
    "https://media1.giphy.com/media/977YesTjNfQC7vQiph/giphy.gif?cid=7e2b37eceh1dwr34wa0wro9f9mdsas7g20fy1qh5jc7797uk&rid=giphy.gif&ct=g";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);
  test("debe de mostrar el componente correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("debe de tener un párrafo con el title", () => {
    const p = wrapper.find("p");
    expect(p.text()).toBe(title);
  });
  test("debe de tener la imagen igual al url y alt de las props", () => {
    const img = wrapper.find("img");
    const { src, alt } = img.props();
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });
  test("debe de tener la animate__fadeIn", () => {
    const div = wrapper.find("div");
    const tieneClase = div.hasClass("animate__fadeIn");
    expect(tieneClase).toBe(true);
  });
});
