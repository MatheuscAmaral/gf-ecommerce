import Container from "../../components/container";
import Slider from "../../components/sliderCategories";
import BreadCrumb from "@/app/components/breadCrumb";
import Cards from "@/app/components/cardsProducts";

export interface ParamsProps {
  params: [
    query: string,
    id: number
  ]
} 

const Products = ({ params }: ParamsProps) => {
  const { query } = params as unknown as { query: string };

  return (
    <Container>
      <section className="max-w-full pt-20 px-10 bg-white">
        <BreadCrumb params={params}/>

        <div className="flex flex-col gap-8 mt-12 pb-14 justify-center items-start md:items-center">
          <h1 className="text-xl font-semibold text-gray-700">
            {
              query == "all" && "Todos"
            }

            {
              query == "iphones" && "Iphones"
            }

            {
              query == "macbooks" && "Macbooks"
            }

            {
              query == "relogios" && "Relógios"
            }

            {
              query == "ipads" && "Ipads"
            }

            {
              query == "consoles" && "Consoles"
            }

            {
              query == "cameras" && "Cameras"
            }
            <span className="text-sm">(0)</span>
          </h1>
          <Slider/>
        </div>
      </section>

      <section className="max-w-6xl mx-5 xl:mx-auto mt-10 mb-32">
        <Cards/>
      </section>
    </Container>
  );
}

export default Products;