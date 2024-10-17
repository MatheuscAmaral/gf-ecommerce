
import CarouselImages from "./components/carousel";
import Container from "./components/container";
import SliderProducts from "./components/sliderProducts";
import iphone16 from "../images/iphone-16-1.webp"
import iphone16pro from "../images/16pro.webp"
import airpod from "../images/macbookPro 2.jpg"
import watchUltra from "../images/watchultra.png"
import ButtonSeeAllProducts from "./components/buttonSeeAllProducts";
import iphone from "../images/iphone.png"
import macbook from "../images/macbook.png";
import relogio from "../images/relogio.png";
import ps5 from "../images/ps5.png";
import camera from "../images/camera.png";
import ipad from "../images/ipad.png";
import Categories from "./components/categories";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const products = [
  {
    id: 1,
    title: "iPhone 16 pro max",
    description: "6.1 polegadas, A14 Bionic, Super...",
    img: ipad.src,
    priceWithDisccount: 7000,
    price: 6500,
    category: "Smartphones",
    storage: ["64GB", "128GB"],
    stock: 10,
  },
  {
    id: 1,
    title: "iPhone 16 pro max",
    description: "6.1 polegadas, A14 Bionic, Super...",
    img: ipad.src,
    priceWithDisccount: 7000,
    price: 6500,
    category: "Smartphones",
    storage: ["64GB", "128GB"],
    stock: 10,
  },
  {
    id: 1,
    title: "iPhone 16 pro max",
    description: "6.1 polegadas, A14 Bionic, Super...",
    img: iphone.src,
    priceWithDisccount: 7000,
    price: 6500,
    category: "Smartphones",
    storage: ["64GB", "128GB"],
    stock: 10,
  },
  {
    id: 1,
    title: "iPhone 16 pro max",
    description: "6.1 polegadas, A14 Bionic, Super...",
    img: iphone.src,
    priceWithDisccount: 7000,
    price: 6500,
    category: "Smartphones",
    storage: ["64GB", "128GB"],
    stock: 10,
  },
  {
    id: 1,
    title: "iPhone 16 pro max",
    description: "6.1 polegadas, A14 Bionic, Super...",
    img: iphone.src,
    priceWithDisccount: 7000,
    price: 6500,
    category: "Smartphones",
    storage: ["64GB", "128GB"],
    stock: 10,
  },
  {
    id: 1,
    title: "iPhone 16 pro max",
    description: "6.1 polegadas, A14 Bionic, Super...",
    img: iphone.src,
    priceWithDisccount: 7000,
    price: 6500,
    category: "Smartphones",
    storage: ["64GB", "128GB"],
    stock: 10,
  },
  {
    id: 1,
    title: "Iphone 16 pro max",
    description: "6.1 polegadas, A14 Bionic, Super...",
    img: iphone.src,
    priceWithDisccount: 7000,
    price: 6500,
    category: "Smartphones",
    storage: ["64GB", "128GB"],
    stock: 10,
  },
];

const categories = [
  {
    image: iphone.src,
    title: "iPhones",
    path: "/catalog/iphones",
  },
  {
    image: macbook.src,
    title: "Macbook",
    path: "/catalog/macbooks",
  },
  {
    image: relogio.src,
    title: "Relógios",
    path: "/catalog/relogios",
  },
  {
    image: ipad.src,
    title: "Ipads",
    path: "/catalog/ipads",
  },
  {
    image: ps5.src,
    title: "Consoles",
    path: "/catalog/consoles",
  },
  {
    image: camera.src,
    title: "Cameras",
    path: "/catalog/cameras",
  },
];

const Home = async () => {
  return (
    <Container>
         <CarouselImages/>

        <section className="flex flex-col gap-16 w-full mb-20 mt-10 xs:mt-20">
          <div className="xxs:mr-10 xs:mr-0 max-w-xs xs:max-w-full mx-auto xs:mx-0">
            <Categories categories={categories} />
          </div>

          <div className="w-full flex flex-col gap-3 py-10 ml-2 xs:ml-0 max-w-sm pr-5 xs:max-w-full">
            <h3 className="text-start pl-3 md:text-center text-xl font-semibold">Produtos mais comprados</h3>
            <SliderProducts products={products} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 max-w-sm mx-auto px-3 gap-5 lg:px-0 md:max-w-5xl">
            <img className="rounded-lg w-full h-72" src={iphone16.src} />
            <img className="rounded-lg w-full h-72" src={iphone16pro.src} />
            <img className="rounded-lg w-full h-72" src={airpod.src} />
            <img className="rounded-lg w-full h-72" src={watchUltra.src} />
          </div>

          <div className="w-full flex flex-col gap-3 py-10 ml-2 xs:ml-0 max-w-sm pr-5 xs:max-w-full">
            <h3 className="text-start pl-3 md:text-center text-xl font-semibold">Recomendados pela GF</h3>
            <SliderProducts products={products}/>

            <ButtonSeeAllProducts route="/catalog/all"/>
          </div>
        </section>

        <Link href={"https://wa.me/+553197066818"} target="_blank" className="bg-green-400 hover:bg-green-300 transition-all p-3.5 rounded-full fixed bottom-5 right-5 text-white">
          <FaWhatsapp fontSize={30}/>
        </Link>
    </Container>
  );
}

export default Home;