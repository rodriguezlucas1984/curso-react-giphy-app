import { shallow } from "enzyme";
import GifGrid from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe("Pruebas en  < GifGrind />", () => {
  const category = "Goku";
  let wrapper;
  test("debe de mostrarse correctamente el componente", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });
  test("debe de mostrarse un titulo h3 con la categoria", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    wrapper = shallow(<GifGrid category={category} />);
    const h3 = wrapper.find("h3");
    expect(h3.text().trim()).toBe(category);
  });
  test("debe de mostart items cuando se cargan imágenes useFetchGifts", () => {
    const gifs = [
      {
        id: "GRSnxyhJnPsaQy9YLn",
        title: "Dragon Ball GIF by TOEI Animation UK",
        url: "https://media4.giphy.com/media/GRSnxyhJnPsaQy9YLn/giphy.gif?cid=7e2b37ecd35c5v0pd3ymrio1srwfp17rl6ws43oy7lboy3jq&rid=giphy.gif&ct=g",
      },
      {
        id: "977YesTjNfQC7vQiph",
        title: "Dragon Ball GIF by TOEI Animation UK",
        url: "https://media1.giphy.com/media/977YesTjNfQC7vQiph/giphy.gif?cid=7e2b37ecd35c5v0pd3ymrio1srwfp17rl6ws43oy7lboy3jq&rid=giphy.gif&ct=g",
      },
    ];
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });
    wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper.find("p").exists()).toBe(false);
    expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
  });
});
