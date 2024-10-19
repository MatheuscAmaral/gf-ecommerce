"use client";

import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { ProductProps } from "../../catalog/details/[id]/page";
import { useRouter } from "next/navigation";

const Cards = ({ products }: { products: ProductProps[] }) => { 
  const router = useRouter();
  const formatPrice = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
      {products.map((item, index) => (
        <Card
        onClick={() => router.push("/catalog/details/1")}
        className="flex flex-row sm:flex-col gap-0 sm:gap-2 w-full h-full justify-start items-center lg:max-w-2xl"
        style={{ maxHeight: "22rem" }}
        shadow="sm"
        key={index}
        isPressable
        >
        <CardBody className="overflow-visible items-center p-5">
            <Image
            alt={item.title}
            className="w-full object-cover h-40"
            src={item.img}
            />
        </CardBody>
        <CardFooter className="text-small items-start flex flex-col gap-4 mb-2">
            <div className="flex flex-col gap-2 text-start">
            <h1 className="text-md font-bold text-gray-800">
                {item.title}
            </h1>
            <span className="text-xs sm:text-xs text-gray-400 font-normal">
                {item.description}
            </span>
            </div>

            {item.stock > 0 ? (
            <div className="flex flex-col text-start gap-0.5">
                <p className="text-xs text-gray-700">Parcelas a partir de:</p>
                <span className="flex text-xs sm:text-sm gap-2 font-medium">
                  <p
                      className={`text-default-500 ${
                      item.priceWithDisccount
                          ? "line-through"
                          : "text-green-700"
                      }`}
                  >
                      {formatPrice(item.price)}
                  </p>
                  <p className=" text-green-700">
                      {formatPrice(item.priceWithDisccount)}
                  </p>
                </span>
            </div>
            ) : (
            <span className="flex items-center py-1 px-3 my-1.5 rounded-md text-sm gap-2 bg-black text-white">
                <AiOutlineMinusCircle fontSize={18} />
                <p className="font-semibold">Esgotado</p>
            </span>
            )}
        </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Cards;
