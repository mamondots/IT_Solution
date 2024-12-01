"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";

import { FaTwitter } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { members } from "../../../../public/Members";
import Image from "next/image";
const Team = () => {
  return (
    <div className="bg-[#1A1A1C] text-[#fff] lg:py-20 py-12 lg:px-16 md:px-16 px-4 ">
      <div className="flex flex-col  items-center justify-center gap-2">
        <p className="text-[#B91202] uppercase font-rajdhani text-lg tracking-widest">
          our active members
        </p>
        <h2 className="lg:text-5xl md:text-5xl text-2xl font-rajdhani lg:w-[600px] text-center">
          Transforming Challenges into Seamless Solutions
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
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {members.map((item, index) => (
            <SwiperSlide key={index} className="bg-[#1A1A1C] rounded-md">
              <div>
                <div className="relative">
                  <Image
                    className="rounded-md hover:scale-95 duration-300"
                    src={item.img}
                    width={350}
                    height={350}
                    alt="img"
                  ></Image>

                  <div className="absolute bottom-0 left-8 cursor-pointer group">
                    <div className="flex flex-col gap-2 py-4 justify-center items-center opacity-0 group-hover:opacity-100 group-hover:translate-y-2 duration-300">
                      <p className="px-2 py-2 bg-[#1A1A1C] rounded border border-[#fff]/20 hover:bg-[#B91202] duration-300">
                        <FaPinterestP />
                      </p>
                      <p className="px-2 py-2 bg-[#1A1A1C] rounded border border-[#fff]/20 hover:bg-[#B91202] duration-300">
                        <FaLinkedinIn />
                      </p>
                      <p className="px-2 py-2 bg-[#1A1A1C] rounded border border-[#fff]/20 hover:bg-[#B91202] duration-300">
                        <FaTwitter />
                      </p>
                      <p className="px-2 py-2 bg-[#1A1A1C] rounded border border-[#fff]/20 hover:bg-[#B91202] duration-300">
                        <FaFacebookF />
                      </p>
                    </div>
                    <p
                      className="bg-[#B91202]
                    p-4 text-xl font-bold font-rajdhani rounded-md hover:bg-[#1A1A1C] duration-300"
                    >
                      <IoShareSocialOutline />
                    </p>
                  </div>
                </div>
                <div className="bg-[#141416] rounded-md px-4 py-12 mt-[-60px]">
                  <div className="mt-8 text-center">
                    <h2 className="text-2xl font-rajdhani hover:text-[#B91202] duration-300 cursor-pointer">
                      {item.name}
                    </h2>
                    <p className="mt-2 text-[#fff]/60">{item.title}</p>
                  </div>
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

export default Team;
