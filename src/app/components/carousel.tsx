"use client";

import wallpaper3 from "../../images/wallpaper3.jpg";
import { Carousel } from "flowbite-react";

const CarouselImages = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mt-24 px-3 w-full max-w-6xl mx-auto">
      <Carousel slide={true}>
        <div className="flex h-full items-center justify-center">
          <img
            src={wallpaper3.src}
            alt="Slide 1"
            className="rounded-lg md:rounded-none h-full w-full object-cover"
          />
        </div>
        <div className="flex h-full items-center justify-center">
          <img
            src={wallpaper3.src}
            alt="Slide 2"
            className="rounded-lg md:rounded-none h-full w-full object-cover"
          />
        </div>
        <div className="flex h-full items-center justify-center">
          <img
            src={wallpaper3.src}
            alt="Slide 3"
            className="rounded-lg md:rounded-none h-full w-full object-cover"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselImages;
