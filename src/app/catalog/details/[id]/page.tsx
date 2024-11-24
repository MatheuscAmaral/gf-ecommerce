import BreadCrumb from "@/app/components/breadCrumb";
import Container from "@/app/components/container";
import iphone from "../../../../images/iphone16.webp";
import ButtonStorage from "@/app/components/buttons/buttonsStorage";
import SliderImages from "@/app/components/sliders/sliderImages";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { LuSmartphone, LuBatteryCharging, LuShieldCheck, LuSparkles } from "react-icons/lu";
import SliderProducts from "@/app/components/sliders/sliderProducts";
import ButtonSeeAllProducts from "../../../components/buttons/buttonSeeAllProducts";
import ButtonAddToCart from "@/app/components/buttons/buttonAddToCart";
import { ProductProps } from "@/interfaces/productProps";
import { ParamsProps } from "@/interfaces/paramsProps";
import { formatPrice } from "@/lib/formatPrice";
import ButtonPlan from "@/app/components/buttons/buttonPlan";
import { TbClockHour4, TbTruckDelivery } from "react-icons/tb";
import ProductPrice from "@/app/components/productPrice";

const product: ProductProps = {
    id: 1,
    title: "iPhone 16",
    description: "6.1 polegadas, Retina LCD, Chip A13, Câmera Dupla",
    img: iphone.src,
    priceWithDisccount: 7000,
    price: 6500,
    category: "Importado",
    storage: [
        "64GB", 
        "128GB"
    ],
    stock: 10,
}

const products = [
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
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
      id: 7,
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

const Details = ({ params }: ParamsProps ) => {
    const plans = ["12 meses", "24 meses"];
      
    return (
        <Container> 
            <section className="mt-20 px-5 xl:px-0">
                <BreadCrumb params={params}/>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16 sm:mt-20 mb-10 mx-auto max-w-6xl w-full px-10 sm:px-16 lg:px-5">
                <div className="max-w-72 md:max-w-md mx-auto">
                    <SliderImages/>
                </div>

                <form className={`flex flex-col gap-2 px-3 ${product.stock > 0 ? "mb-20 md:mb-32" : "mb-10"}`}>
                    <h1 className="text-2xl font-semibold">{product.title}</h1>
                    <p className="text-sm md:text-md font-normal text-gray-400">{product.description}</p>

                    <ProductPrice product={product} plan={plans[0]}/>

                    <div className="flex flex-col gap-4 mt-5">
                        <p className="text-xs font-medium text-gray-700">ARMAZENAMENTO:</p>
                        <span className="flex gap-3">
                           <ButtonStorage storage={product.storage}/>
                        </span>
                    </div>

                    <div className="flex flex-col gap-4 mt-5">
                        <p className="text-xs font-medium text-gray-700">ESCOLHA UM PLANO DE FIDELIDADE:</p>
                        <span className="flex gap-3">
                           <ButtonPlan plans={plans}/>
                        </span>
                    </div>

                    {
                        product.stock > 0 ? (
                            <div className="w-full hidden sm:flex">
                                <ButtonAddToCart product={product} plan={plans[0]}/>
                            </div>
                        ) : (
                            <div className="flex gap-2 mt-10 items-center bg-gray-100 rounded-lg p-7">
                                <MdOutlineRemoveShoppingCart fontSize={20}/>
                                <p>Produto temporáriamente indisponível</p>
                            </div>
                        )
                    }

                    
                    <div className="my-7 flex flex-col gap-4 items-start border border-gray-200 rounded-lg px-5">
                       <p className="text-xs font-medium text-gray-700 pt-3">BENEFÍCIOS E VANTAGENS</p>

                       <div className="flex flex-col gap-2 pb-5">
                            <span className="flex gap-1 items-center">
                                <TbClockHour4 fontSize={20} className="text-gray-600"/>
                                <p className="text-xs font-medium text-gray-800">Receba em até 90 dias úteis</p>
                            </span>

                            <span className="flex gap-1 items-center">
                                <LuSparkles fontSize={20} className="text-gray-600"/>
                                <p className="text-xs font-medium text-gray-800">Qualidade 100% garantida</p>
                            </span>

                            <span className="flex gap-1 items-center">
                                <TbTruckDelivery fontSize={21} className="text-gray-600"/>
                                <p className="text-xs font-medium text-gray-800">{product.category}</p>
                            </span>
                       </div>
                    </div>

                    {
                        product.stock > 0 && (
                            <div className="grid grid-cols-2 justify-between sm:hidden fixed z-50 bottom-0 left-0 py-5 px-5 bg-white w-full h-32 shadow-2xl border-t-1 border-gray-100">
                                <section className="flex flex-col gap-2">
                                    <h1 className="text-md font-semibold">{product.title}</h1>

                                    <div className="flex flex-col gap-0.5">
                                        <p className="font-medium text-sm">
                                            TOTAL: <span className="font-semibold">{formatPrice(Number(product.price))}</span>
                                        </p>
                                        <span className="text-sm text-gray-500">Em até 12x no cartão</span>
                                    </div>
                                </section>

                                <section className="w-full flex justify-center items-center">
                                    <ButtonAddToCart product={product} plan={plans[0]}/>
                                </section>
                            </div>
                        )
                    }
                </form>
            </section>

            <section className="w-full px-10 sm:px-16 lg:px-5 bg-gray-50 py-10">
                <div className=" border-y flex flex-col gap-7 py-16 border-gray-200 max-w-6xl mx-auto">
                    <h3 className="text-xl font-semibold text-gray-800">O que vem na caixa</h3>

                    <div className="grid grid-cols-2 md:grid-cols-4  md:max-w-2xl gap-3">
                        <div className="flex flex-col w-full md:w-36 h-36 justify-center gap-4 border border-gray-200 bg-white p-5 rounded-md items-center">
                            <LuSmartphone fontSize={44} className="text-primary"/>
                            <p className="text-xs font-normal text-black">Smartphone</p>
                        </div>

                        <div className="flex flex-col w-full md:w-36 h-36 justify-center gap-5 border border-gray-200 bg-white p-5 rounded-md items-center">
                            <LuBatteryCharging fontSize={48} className="text-primary"/>
                            <p className="text-xs font-normal text-black">Carregador</p>
                        </div>

                        <div className="flex flex-col w-full md:w-36 h-36 justify-center gap-5 border border-gray-200 bg-white p-5 rounded-md items-center">
                            <LuSparkles fontSize={44} className="text-primary"/>
                            <p className="text-xs font-normal text-black">Película</p>
                        </div>

                        <div className="flex flex-col w-full md:w-36 h-36 justify-center gap-5 border border-gray-200 bg-white p-5 rounded-md items-center">
                            <LuShieldCheck fontSize={44} className="text-primary"/>
                            <p className="text-xs font-normal text-black">Capinha</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="my-20">
                <div className="flex flex-col gap-10 my-10 items-center">
                    <h3 className="text-xl font-semibold">Você também pode gostar:</h3>
                    <SliderProducts products={products}/>
                    <ButtonSeeAllProducts route="/catalog/all"/>
                </div>
            </section>
        </Container>
    )
}

export default Details;