'use client'

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import iphone from "../../../images/iphone16.webp";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const SliderImages = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const PreviousArrow = (props: any) => {
        const { onClick } = props;
        return (
            <button
              className={`p-2 border border-gray-100 hover:bg-gray-100 rounded-full absolute left-14 -bottom-14 z-50`}
              onClick={onClick}
            >
                <IoIosArrowBack size={15} />
            </button>
        );
    };

    const NextArrow = (props: any) => {
        const { onClick } = props;

        return (
            <button
              className={`p-2 border border-gray-100 hover:bg-gray-100 rounded-full absolute right-16 -bottom-14 z-50`}
              onClick={onClick}
            >
                <IoIosArrowForward size={15}/>
            </button>
        );
    };

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        ...(windowWidth >= 1060 && { prevArrow: <PreviousArrow /> }),
        ...( windowWidth >= 1060 && { nextArrow: <NextArrow /> }),
        ...(windowWidth >= 768 && {
            customPaging: function (i: any) {
                return (
                    <Image
                        src={iphone}
                        alt={`Thumbnail ${i}`}
                        width={60}
                        height={60}
                        className=" p-1 shadow-md border border-gray-50"
                        style={{ objectFit: 'cover', borderRadius: '5px' }}
                    />
                );
            }
        }),
        ...(windowWidth >= 768 && { dotsClass: "slick-dots custom-dots" })
    };

    return (
        <Slider {...settings} className="xs:ml-20 md:ml-0">
            <div className="relative">
                <Image
                    src={iphone}
                    className="sm:ml-10 md:ml-0"
                    alt="iphone"
                    width={windowWidth >= 700 ? 450 : 400}
                    height={windowWidth >= 700 ? 450 : 400}
                />
            </div>

            <div>
                <Image
                    src={iphone}
                    className="sm:ml-10 md:ml-0"
                    alt="iphone"
                    width={windowWidth >= 700 ? 450 : 400}
                    height={windowWidth >= 700 ? 450 : 400}
                />
            </div>

            <div>
                <Image
                    src={iphone}
                    className="sm:ml-10 md:ml-0"
                    alt="iphone"
                    width={windowWidth >= 700 ? 450 : 400}
                    height={windowWidth >= 700 ? 450 : 400}
                />
            </div>
        </Slider>
    );
};

export default SliderImages;
