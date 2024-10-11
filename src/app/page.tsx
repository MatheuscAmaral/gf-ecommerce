import Container from "./components/container";
import Slider from "./components/sliderCategories";

const Home = async () => {
  return (
    <Container>
      <div className="flex flex-col gap-3 justify-center items-center">
        <h1 className="text-lg font-semibold text-gray-700">Todos <span className="text-sm">(0)</span></h1>
        <Slider/>
      </div>
    </Container>
  );
}

export default Home;