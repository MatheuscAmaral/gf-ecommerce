'use client'

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import iphone from "../../images/iphone16.webp";
import Image from "next/image";

const SliderImages = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    ...(windowWidth >= 700 && {
        customPaging: function(i: any) {
            return (
              <div>
                <Image 
                  src={iphone} 
                  alt={`Thumbnail ${i}`} 
                  width={60} 
                  height={60} 
                  className="border border-gray-200 p-1"
                  style={{ objectFit: 'cover', borderRadius: '5px' }} 
                />
              </div>
            );
        }
    }),
      ...(windowWidth >= 700 && { dotsClass: "slick-dots custom-dots"  })
  };

  return (
    <Slider {...settings}>
      <div>
        <Image src={iphone} alt="iphone" width={450} height={450} />
      </div>
      <div>
        <Image src={iphone} alt="iphone" width={450} height={450} />
      </div>
      <div>
        <Image src={iphone} alt="iphone" width={450} height={450} />
      </div>
    </Slider>
  );
}

export default SliderImages;