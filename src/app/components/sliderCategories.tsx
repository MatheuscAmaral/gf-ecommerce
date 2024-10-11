'use client'

import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel"
import Image from "next/image"

import iphone from "../../images/iphone.png"
import macbook from "../../images/macbook.png"
import relogio from "../../images/relogio.png"
import ps5 from "../../images/ps5.png"
import camera from "../../images/camera.png"

const categories = [
    {
        image: <Image src={iphone.src} alt="" width={60} height={60} />,
        title: "iPhones"
    },
    {
        image: <Image src={macbook.src} alt="" width={60} height={60} />,
        title: "Macbook"
    },
    {
        image: <Image src={relogio.src} alt="" width={60} height={60} />,
        title: "Relógios"
    },
    {
        image: <Image src={ps5.src} alt="" width={60} height={60} />,
        title: "Consoles"
    },
    {
        image: <Image src={camera.src} alt="" width={80} height={80} />,
        title: "Cameras"
    }
]

const Slider = () => {

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-96 lg:max-w-xl"
    >
      <CarouselContent>
        {categories.map((c, index) => (
          <CarouselItem key={index} className="basis-1/3 md:basis-1/4 lg:basis-1/5 transition-all">
            <div className="flex flex-col gap-2 items-center">
              <Card className="cursor-pointer">
                <CardContent className="w-20 h-20 flex gap-3 bg-stone-100 hover:bg-stone-200 rounded-full items-center justify-center p-4">
                  <span className="text-3xl font-semibold ">{c.image}</span>
                </CardContent>
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