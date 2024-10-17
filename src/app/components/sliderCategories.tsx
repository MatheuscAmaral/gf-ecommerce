"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { usePathname } from "next/navigation";
import iphone from "../../images/iphone.png";
import macbook from "../../images/macbook.png";
import relogio from "../../images/relogio.png";
import ps5 from "../../images/ps5.png";
import camera from "../../images/camera.png";
import ipad from "../../images/ipad.png";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const categories = [
  {
    image: <Image src={iphone.src} alt="" width={100} height={100} />,
    title: "iPhones",
    path: "/catalog/iphones",
  },
  {
    image: <Image src={macbook.src} alt="" width={100} height={100} />,
    title: "Macbook",
    path: "/catalog/macbooks",
  },
  {
    image: <Image src={relogio.src} alt="" width={100} height={100} />,
    title: "Relógios",
    path: "/catalog/relogios",
  },
  {
    image: <Image src={ipad.src} alt="" width={100} height={100} />,
    title: "Ipads",
    path: "/catalog/ipads",
  },
  {
    image: <Image src={ps5.src} alt="" width={100} height={100} />,
    title: "Consoles",
    path: "/catalog/consoles",
  },
  {
    image: <Image src={camera.src} alt="" width={100} height={100} />,
    title: "Cameras",
    path: "/catalog/cameras",
  },
];

const Slider = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Carousel
      opts={{
        align: "center",
      }}
      className="w-full max-w-xs xs:max-w-md  sm:max-w-xl md:max-w-4xl"
    >
      <CarouselContent className="flex flex-row md:justify-center ">
        {categories.map((c, index) => (
          <CarouselItem key={index} className="basis-auto">
            <div className="flex flex-col gap-2 select-none items-center mx-auto">
              <Button
                onClick={() => router.push(c.path)}
                className={`flex gap-3 bg-stone-100 hover:bg-stone-200 transition-all rounded-full items-center justify-center 
                p-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 ${c.path === pathname ? "border-black border" : ""}`}
              >
                <span className="text-xl sm:text-2xl md:text-3xl font-semibold">
                  {c.image}
                </span>
              </Button>
              <p className="text-xs fonts">{c.title}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default Slider;
