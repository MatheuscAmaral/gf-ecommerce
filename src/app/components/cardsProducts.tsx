'use client'

import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import iphone from "../../images/iphone.png"
import { AiOutlineMinusCircle } from "react-icons/ai";

const Cards = () => {
  const list = [
    {
      title: "iPhone 16 pro max",
      description: "6.1 polegadas, A14 Bionic, Super...",
      img: iphone.src,
      priceWithDisccount: "R$ 7.000,00",
      price: "R$ 6.500,00",
      stock: 10
    },
    {
      title: "iPhone 16 pro max",
       description: "6.1 polegadas, A14 Bionic, Super...",
      img: iphone.src,
      priceWithDisccount: "R$ 7.000,00",
      price: "R$ 6.500,00",
      stock: 0
    },
    {
      title: "iPhone 16 pro max",
       description: "6.1 polegadas, A14 Bionic, Super...",
      img: iphone.src,
      priceWithDisccount: "R$ 7.000,00",
      price: "R$ 6.500,00",
      stock: 10
    },
    {
      title: "iPhone 16 pro max",
       description: "6.1 polegadas, A14 Bionic, Super...",
      img: iphone.src,
      priceWithDisccount: "R$ 7.000,00",
      price: "R$ 6.500,00",
      stock: 10
    },
    {
      title: "iPhone 16 pro max",
       description: "6.1 polegadas, A14 Bionic, Super...",
      img: iphone.src,
      priceWithDisccount: "R$ 7.000,00",
      price: "R$ 6.500,00",
      stock: 0
    },
    {
      title: "iPhone 16 pro max",
       description: "6.1 polegadas, A14 Bionic, Super...",
      img: iphone.src,
      priceWithDisccount: "R$ 7.000,00",
      price: "R$ 6.500,00",
      stock: 10
    },
    {
      title: "iPhone 16 pro max",
       description: "6.1 polegadas, A14 Bionic, Super...",
      img: iphone.src,
      priceWithDisccount: "R$ 7.000,00",
      price: "R$ 6.500,00",
      stock: 10
    },
    {
      title: "Iphone 16 pro max",
       description: "6.1 polegadas, A14 Bionic, Super...",
      img: iphone.src,
      priceWithDisccount: "R$ 7.000,00",
      price: "R$ 6.500,00",
      stock: 10
    }
  ];

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
      {list.map((item, index) => (
        <Card className="flex flex-row sm:flex-col gap-2 justify-start items-center lg:max-w-2xl w-full" shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible items-center p-5">
            <Image
              alt={item.title}
              className="w-full object-cover h-40"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small items-start flex flex-col gap-4 mb-2">
            <div className="flex flex-col gap-2 text-start">
                <h1 className="text-lg sm:text-md font-bold text-gray-800">{item.title}</h1>
                <span className="text-md sm:text-xs text-gray-400 font-normal">{item.description}</span>
            </div>
            
            {
                item.stock > 0 ? (
                    <div className="flex flex-col text-start gap-0.5">
                        <p className="text-md sm:text-xs text-gray-700">Parcelas a partir de:</p>
                        <span className="flex text-lg sm:text-sm gap-2 font-medium">
                            <p className={`text-default-500 ${item.priceWithDisccount ? "line-through" : "text-green-700" }`}>{item.price}</p>
                            <p className=" text-green-700">{item.priceWithDisccount}</p>
                        </span>
                    </div>
                ) : (
                    <span className="flex items-center py-1 px-3 my-1.5 rounded-md text-sm gap-2 bg-black text-white">
                        <AiOutlineMinusCircle fontSize={18} />
                        <p className="font-semibold">Esgotado</p>
                    </span>
                )
            }
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default Cards;