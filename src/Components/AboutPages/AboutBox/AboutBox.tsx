import React from "react";
import { AboutItens } from "../../../../public/AboutItems";
import { IoArrowForward } from "react-icons/io5";

const AboutBox = () => {
  return (
    <div className="lg:px-20 md:px-16 px-10 py-10 mt-12 text-[#fff]">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
        {AboutItens.map((item) => (
          <div
            key={item.id}
            className="bg-[#1A1A1C] rounded px-6 py-6 cursor-pointer hover:translate-y-[-16px] duration-300"
          >
            <div className="flex items-center gap-6">
              <div className="w-[60px] h-[60px] bg-[#B91202] rounded-full relative">
                <svg
                  className="w-[70px] h-[70px] absolute top-6 left-[-16px]"
                  fill="currentColor"
                >
                  {item.icon}
                </svg>
              </div>
              <h2 className="text-xl font-rajdhani tracking-wide">
                {item.title}
              </h2>
            </div>
            <div className="py-6 mt-6">
              <p className="text-[#fff]/60 leading-relaxed">
                {item.description}
              </p>
              <div className="relative">
                <button className="flex items-center gap-2 uppercase text-[#B91202] font-rajdhani mt-6">
                  <span>read more</span>
                  <span>
                    <IoArrowForward />
                  </span>
                </button>
                <h1 className="text-8xl absolute right-4 font-rajdhani text-[#fff]/10">
                  0{item.id}
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutBox;
