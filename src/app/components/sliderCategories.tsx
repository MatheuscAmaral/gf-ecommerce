'use client'

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel"
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
      className=" max-w-6xl mx-auto"
    >
      <CarouselContent>
        {categories.map((c, index) => (
          <CarouselItem key={index} className=" basis-auto transition-all">
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
