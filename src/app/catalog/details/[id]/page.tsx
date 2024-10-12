import BreadCrumb from "@/app/components/breadCrumb";
import Container from "@/app/components/container";
import { ParamsProps } from "../../[query]/page";
import iphone from "../../../../images/iphone16.webp";
import ButtonStorage from "@/app/components/buttonsStorage";
import { TbClockHour4 } from "react-icons/tb";
import { Button } from "@nextui-org/react";
import { TbTruckDelivery } from "react-icons/tb";
import SliderImages from "@/app/components/sliderImages";

const product = {
    title: "iPhone 16",
    description: "6.1 polegadas, Retina LCD, Chip A13, Câmera Dupla",
    img: iphone.src,
    priceWithDisccount: "R$ 7.000,00",
    price: "R$ 6.500,00",
    category: "Importado",
    storage: [
        "64GB", 
        "128GB"
    ],
    stock: 10
}

const Details = ({ params }: ParamsProps ) => {
    
    return (
        <Container>
            <section className="mt-20 px-5 md:px-0">
                <BreadCrumb params={params}/>
            </section>

            <section className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-14 mx-auto max-w-6xl w-full px-5">
                <div className=" ml-10">
                    <SliderImages/>
                </div>

                <form className="flex flex-col gap-2 mb-32">
                    <h1 className="text-2xl font-semibold">{product.title}</h1>
                    <p className="text-md font-normal text-gray-400">{product.description}</p>

                    <div className="my-7 flex flex-col gap-2 items-start">
                        <span className="flex gap-2 items-center">
                            <TbClockHour4 fontSize={21.5} className="text-gray-600"/>
                            <p className="text-sm font-medium text-gray-800">Receba em até 90 dias úteis</p>
                        </span>

                        <span className="flex gap-2 items-center ">
                            <TbTruckDelivery fontSize={22.5} className="text-gray-600"/>
                            <p className="text-sm font-medium text-gray-800">{product.category}</p>
                        </span>
                    </div>


                    <div className="flex flex-col gap-4">
                        <p className="text-xs font-medium text-gray-700">ARMAZENAMENTO:</p>
                        <span className="flex gap-3">
                           <ButtonStorage storage={product.storage}/>
                        </span>
                    </div>

                    <Button className="hidden sm:flex sm:mr-10 bg-gray-200 hover:bg-gray-400 border text-black mt-10 rounded-full p-6 text-md font-semibold">Comprar</Button>

                    <div className="grid grid-cols-2 justify-between sm:hidden fixed bottom-0 left-0 py-5 px-5 bg-white w-full h-32 shadow-2xl">
                        <section className="flex flex-col gap-2">
                            <h1 className="text-md font-semibold">{product.title}</h1>

                            <div className="flex flex-col gap-0.5">
                                <p className="font-medium text-sm">
                                    TOTAL: <span className="font-semibold">{product.price}</span>
                                </p>
                                <span className="text-sm text-gray-500">Em até 12x no cartão</span>
                            </div>
                        </section>

                        <section className="w-full flex justify-center items-center">
                            <Button className="bg-gray-200 hover:bg-gray-400 border text-black rounded-full p-6 text-md font-semibold w-full">Comprar</Button>
                        </section>
                    </div>
                </form>
                
            </section>
        </Container>
    )
}

export default Details;