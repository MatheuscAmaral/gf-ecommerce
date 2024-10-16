"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRouter } from "next/navigation";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { ProductProps } from "../catalog/details/[id]/page";

const SliderProducts = ({ products }: { products: ProductProps[] }) => {
  const router = useRouter();

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-lg sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto z-0"
    >
      <CarouselContent className="flex flex-row">
        {products.map((p, index) => (
          <CarouselItem key={index} className="basis-1/2 sm:basis-auto lg:basis-1/4">
            <div
              className="flex flex-col gap-3 py-5 px-1 select-none items-center"
              style={{ pointerEvents: "none" }}
            >
              <Card
                onClick={() => router.push(`/catalog/details/${1}`)}
                className="flex gap-3 w-full h-full justify-start items-center"
                shadow="sm"
                key={index}
                isPressable
                style={{ pointerEvents: "auto" }}
              >
                <CardBody className="items-center p-5">
                  <img className="w-32 h-32" src={p.img} />
                </CardBody>
                <CardFooter className="text-small items-start flex flex-col gap-4 mb-2">
                  <div className="flex flex-col gap-2 text-start">
                    <h1 className="text-md font-bold text-gray-800">
                      {p.title}
                    </h1>
                    <span className="text-xs sm:text-xs text-gray-400 font-normal">
                      {p.description}
                    </span>
                  </div>

                  {p.stock > 0 ? (
                    <div className="flex flex-col text-start gap-0.5">
                      <p className="text-xs text-gray-700">
                        Parcelas a partir de:
                      </p>
                      <span className="flex text-xs sm:text-sm gap-2 font-medium">
                        <p
                          className={`text-default-500 ${
                            p.priceWithDisccount
                              ? "line-through"
                              : "text-green-700"
                          }`}
                        >
                          {formatPrice(p.price)}
                        </p>
                        <p className=" text-green-700">
                          {formatPrice(p.priceWithDisccount)}
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
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden lg:flex" />
      <CarouselNext className="hidden lg:flex" />
    </Carousel>
  );
};

export default SliderProducts;
