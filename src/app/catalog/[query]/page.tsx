import { redirect } from 'next/navigation';
import Container from "../../components/container";
import Slider from "../../components/sliderCategories";
import BreadCrumb from "../../components/breadCrumb";
import Cards from "../../components/cardsProducts";
import iphone from "../../../images/iphone16.webp"

export interface ParamsProps {
  params: {
    query: string;
    id: number;
  };
}

const products = [
  {
    title: "iPhone 16",
    description: "6.1 polegadas, Retina LCD, Chip A13, Câmera Dupla",
    img: iphone.src,
    priceWithDisccount: 7000,
    price: 6500,
    category: "Importado",
    storage: ["64GB", "128GB"],
    stock: 10,
  },
  {
    title: "iPhone 16",
    description: "6.1 polegadas, Retina LCD, Chip A13, Câmera Dupla",
    img: iphone.src,
    priceWithDisccount: 7000,
    price: 6500,
    category: "Importado",
    storage: ["64GB", "128GB"],
    stock: 10,
  },
  {
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
    title: "iPhone 16",
    description: "6.1 polegadas, Retina LCD, Chip A13, Câmera Dupla",
    img: iphone.src,
    priceWithDisccount: 7000,
    price: 6500,
    category: "Importado",
    storage: ["64GB", "128GB"],
    stock: 10,
  },
  {
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

const Products = async ({ params }: ParamsProps) => {
  const { query } = params;

  const validQueries = ['all', 'iphones', 'macbooks', 'relogios', 'ipads', 'consoles', 'cameras'];

  if (!validQueries.includes(query)) {
    redirect('/catalog/all');
  }

  return (
    <Container>
      <section className="max-w-full pt-20 px-10 bg-white">
        <BreadCrumb params={params}/>

        <div className="flex flex-col gap-8 mt-12 pb-14 justify-center items-start md:items-center mx-auto w-full">
          <h1 className="text-xl font-semibold text-gray-700">
            {query === "all" && "Todos"}
            {query === "iphones" && "Iphones"}
            {query === "macbooks" && "Macbooks"}
            {query === "relogios" && "Relógios"}
            {query === "ipads" && "Ipads"}
            {query === "consoles" && "Consoles"}
            {query === "cameras" && "Cameras"}
            <span className="text-sm">(0)</span>
          </h1>
          <Slider/>
        </div>
      </section>

      <section className="max-w-6xl mx-5 pr-5 sm:pr-0 xl:mx-auto mt-10 mb-32">
        <Cards products={products}/>
      </section>
    </Container>
  );
}

export default Products;
