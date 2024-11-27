import React from "react";
import Pattern from "@/assets/images/pattern-2.png";
import Image from "next/image";
import "./Subscribe.css";
const Subscribe = () => {
  return (
    <div className="relative bg-[#151515] text-white py-20 lg:py-24 lg:px-16 md:px-16 px-10">
      <div className="bg-[#B91202] rounded relative py-12 overflow-hidden flex flex-col justify-center items-center">
        <div className=" text-center z-10 lg:w-2/4 lg:px-10 px-4">
          <h2 className="lg:text-5xl md:text-5xl text-3xl font-rajdhani font-bold capitalize mb-4">
            Have a question? Feel Free To Ask
          </h2>
          <form className="flex lg:flex-row flex-col  items-center justify-center gap-4 mt-8 w-full">
            <input
              type="text"
              placeholder="Enter Email"
              className="px-4 py-4 rounded border border-gray-300 bg-transparent outline-none placeholder-white lg:flex-1 w-full"
            />
            <div className="relative inline-block overflow-hidden lg:w-auto w-full">
              <button className="relative  origin-right gap-2 py-4 px-12 w-full bg-[#DF2A19] rounded text-white hover:text-[#262626] font-rajdhani overflow-hidden group">
                <span className="relative z-10 tracking-widest lg:text-base text-base">
                  SUSCRIBE
                </span>
                <div className="absolute inset-0 w-full h-full bg-[#fff]  origin-right transform scale-x-0 group-hover:scale-x-100 group-hover:origin-left transition-transform duration-300 ease-in-out"></div>
              </button>
            </div>
          </form>
        </div>
        <div className="hidden lg:block">
          <Image
            className="mt-2 absolute top-0 right-0 animatedImageWrapper"
            src={Pattern}
            alt="Pattern"
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
