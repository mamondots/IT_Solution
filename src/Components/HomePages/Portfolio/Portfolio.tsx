import React from "react";
import { portfolioItems } from "../../../../public/PortfolioItems";
import Image from "next/image";
const Portfolio = () => {
  return (
    <div className="bg-[#151515] text-[#fff] py-8 lg:px-16 md:px-16 px-10">
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-[#B91202] uppercase font-rajdhani text-lg tracking-widest">
          latest portfolio
        </p>
        <h2 className="lg:text-5xl md:text-5xl text-2xl font-rajdhani lg:w-[700px] text-center leading-snug">
          Where Innovation Meets IT Excellence
        </h2>
      </div>

      <div className="grid  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-4 mt-12">
        {portfolioItems.map((item) => (
          <div key={item.id} className="relative cursor-pointer group">
            <div>
              <Image
                className="rounded-md group-hover:scale-95 duration-300"
                src={item.image}
                alt="title"
                width={300}
                height={100}
              ></Image>
            </div>

            <div
              className="w-full h-full  absolute top-0 left-0 rounded-md inset-0 
              opacity-0 group-hover:opacity-100 transform 
              group-hover:scale-95 duration-300
              "
              style={{
                background:
                  "linear-gradient(to bottom, rgba(185, 18, 2,0.3) 40%, rgba(185, 18, 2,0.9) 70%)",
              }}
            >
              <div className="bottom-0 absolute px-8 py-8">
                <h2 className="text-2xl font-rajdhani translate-y-[-8px] group-hover:translate-y-[0px] duration-300">
                  {item.title}
                </h2>
                <p className="border-b-2 py-1"></p>
                <p className="text-base py-2 text-[#fff]/60 translate-y-[8px] group-hover:translate-y-[0px] duration-300">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;