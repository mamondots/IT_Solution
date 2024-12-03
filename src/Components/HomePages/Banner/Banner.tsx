/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState } from "react";
import Shape from "@/assets/images/shape-5.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import { bannerItems } from "../../../../public/BannerItems";
import Image from "next/image";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Banner.css";

const Banner = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleSlideChange = (swiper: {
    realIndex: React.SetStateAction<number>;
  }) => {
    setSlideIndex(swiper.realIndex);
  };

  return (
    <div className="relative mt-[-80px]">
      <Swiper
        loop={true}
        effect={"fade"}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        modules={[Navigation, Pagination, EffectFade]}
        className="mySwiper"
        onSlideChange={handleSlideChange}
      >
        {bannerItems.map((item, index) => (
          <SwiperSlide key={item.id}>
            <div
              className="relative lg:py-80 md:py-80 py-60"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0.9) 60%)",
                }}
              ></div>
              <div className="relative z-10 flex justify-center items-center flex-col h-full px-10">
                <motion.h2
                  key={`title-${slideIndex}`} // Unique key for re-rendering
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-white lg:text-8xl md:text-7xl text-4xl lg:w-2/3 text-center font-rajdhani uppercase"
                >
                  {item.title}
                </motion.h2>

                <motion.div
                  key={`button-${slideIndex}`} // Unique key for re-rendering
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="relative inline-block overflow-hidden mt-8"
                >
                  <button className="relative flex items-center origin-right gap-2 py-4 px-6 bg-[#AE1A00] rounded-full text-white font-rajdhani overflow-hidden group">
                    <span className="relative z-10 tracking-widest lg:text-base text-sm">
                      DISCOVER MORE
                    </span>
                    <span className="relative z-10">
                      <FaLongArrowAltRight />
                    </span>
                    <div className="absolute inset-0 w-full h-full bg-[#9D0F02] rounded-full origin-right transform scale-x-0 group-hover:scale-x-100 group-hover:origin-left transition-transform duration-300 ease-in-out"></div>
                  </button>
                </motion.div>
              </div>
              <div className="bottom-0 absolute z-50 hidden lg:block">
                <Image src={Shape} alt="Shape"></Image>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="relative top-[-80vh] hidden lg:block cursor-pointer">
          <div className="custom-prev absolute top-[-40px] left-20 z-50 w-[40px] h-[40px] border border-[#AE1A00] hover:bg-[#AE1A00] hover:text-[#fff] duration-300 rounded-full flex items-center justify-center">
            <p className="text-[#fff]">
              <FaLongArrowAltLeft />
            </p>
          </div>
          <div className="custom-next absolute top-[-40px] right-20 z-50 w-[40px] h-[40px] border border-[#AE1A00] hover:bg-[#AE1A00] hover:text-[#fff] duration-300 rounded-full flex items-center justify-center">
            <p className="text-[#fff]">
              <FaLongArrowAltRight />
            </p>
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default Banner;
