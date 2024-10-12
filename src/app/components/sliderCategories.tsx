'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Image from "next/image"
import { usePathname } from "next/navigation" 
import iphone from "../../images/iphone.png"
import macbook from "../../images/macbook.png"
import relogio from "../../images/relogio.png"
import ps5 from "../../images/ps5.png"
import camera from "../../images/camera.png"
import ipad from "../../images/ipad.png"
import Link from "next/link"

const categories = [
    {
        image: <Image src={iphone.src} alt="" width={100} height={100} />,
        title: "iPhones",
        path: "/catalog/iphones"
    },
    {
        image: <Image src={macbook.src} alt="" width={100} height={100} />,
        title: "Macbook",
        path: "/catalog/macbooks"
    },
    {
        image: <Image src={relogio.src} alt="" width={100} height={100} />,
        title: "Relógios",
        path: "/catalog/relogios"
    },
    {
        image: <Image src={ipad.src} alt="" width={100} height={100} />,
        title: "Ipads",
        path: "/catalog/ipads"
    },
    {
        image: <Image src={ps5.src} alt="" width={100} height={100} />,
        title: "Consoles",
        path: "/catalog/consoles"
    },
    {
        image: <Image src={camera.src} alt="" width={100} height={100} />,
        title: "Cameras",
        path: "/catalog/cameras"
    }
]

const Slider = () => {
  const pathname = usePathname();

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm sm:max-w-xl md:max-w-4xl "
    >
      <CarouselContent className="flex flex-row">
        {categories.map((c, index) => (
          <CarouselItem 
            key={index} 
            className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
          >
            <div className="flex flex-col gap-2 select-none items-center">
              <Card className="cursor-pointer">
                <Link href={c.path}>
                  <CardContent className={`w-24 h-24 ${c.path === pathname ? "border-black border" : ""} flex gap-3 bg-stone-100 hover:bg-stone-200 rounded-full items-center justify-center p-4`}>
                    <span className="text-3xl font-semibold ">{c.image}</span>
                  </CardContent>
                </Link>
              </Card>
              <p className="text-xs fonts">{c.title}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

export default Slider;
