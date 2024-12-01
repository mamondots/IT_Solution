"use client";
import React from "react";
import { FaQuoteRight, FaStar } from "react-icons/fa";

import { testimonalItems } from "../../../../public/TestimonalItems";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./Testimonal.css";
// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import Image from "next/image";
const Testimonal = () => {
  return (
    <div className="bg-[#151515] text-[#fff] pb-12 lg:px-16 md:px-16 px-10">
      <div>
        <p className="text-[#B91202] uppercase font-rajdhani text-lg tracking-widest">
          Clients testimonial
        </p>
        <h2 className="lg:text-5xl md:text-5xl text-2xl font-rajdhani lg:w-[500px]  leading-relaxed py-4">
          Your IT Partner for a Dynamic Future
        </h2>
      </div>

      <div className="mt-10">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
            el: ".custom-pagination", // Explicitly set the custom class for pagination
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {testimonalItems.map((item) => (
            <SwiperSlide key={item.name} className="bg-[#1A1A1C] rounded-md">
              <div className="lg:flex lg:flex-row flex-col gap-6 px-8 py-8">
                <div className="relative">
                  <Image
                    className="rounded-md"
                    src={item.img}
                    width={500}
                    height={500}
                    alt={item.name}
                  ></Image>
                  <div className="bg-[#B91202] p-2 rounded-full absolute lg:left-16 left-24 bottom-[-16px]">
                    <p className="text-xl">
                      <FaQuoteRight />
                    </p>
                  </div>
                </div>
                <div className="lg:py-0 py-8">
                  <h2 className="text-xl py-2 font-rajdhani">{item.name}</h2>
                  <p className="text-[#fff]/60">{item.title}</p>
                  <div className="flex items-center gap-1 mt-2">
                    {Array.from({ length: item.rating }, (_, index) => (
                      <FaStar key={index} className="text-[#B91202] text-sm" />
                    ))}
                  </div>
                  <p className="py-2 text-[#fff]/60">{item.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          {/* Pagination element */}
          <div className="custom-pagination py-2 cursor-pointer"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonal;
