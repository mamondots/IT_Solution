import React from "react";
import { priceItems } from "../../../../public/PriceItems";
import { IoIosCheckmark } from "react-icons/io";

const Priceing = () => {
  return (
    <div className="bg-[#151515] text-[#fff] py-8 lg:px-16 md:px-16 px-4 overflow-hidden ">
      <div className="flex flex-col  items-center justify-center gap-2">
        <p className="text-[#B91202] uppercase font-rajdhani text-lg tracking-widest">
          Pricing Action
        </p>
        <h2 className="lg:text-5xl md:text-5xl text-2xl font-rajdhani lg:w-[500px] text-center leading-snug">
          Innovating for a better tomorrow
        </h2>
      </div>

      <div className="flex flex-col gap-8 mt-10">
        {priceItems.map((item, itemIndex) => (
          <div
            key={item.id}
            className="border border-[#fff]/20 rounded  sticky"
            style={{
              top: `calc(20px + ${itemIndex * 0}px)`,
            }}
          >
            <div className="flex lg:flex-row md:flex-row flex-col">
              <div className="lg:w-1/4 border-r border-[#fff]/20 px-8 py-8">
                <h2 className="text-2xl font-rajdhani">{item.title}</h2>
                <p className="py-3 text-[#fff]/60">{item.description}</p>
              </div>
              <div className="lg:px-20 px-8 lg:pb-0 pb-8 lg:py-8 w-3/4 flex lg:flex-row  flex-col lg:items-center lg:justify-between">
                <div className="flex flex-col gap-3">
                  {item.offers.map((offer, index) => (
                    <p
                      key={index}
                      className="flex items-center gap-3 text-[#fff]/60"
                    >
                      <span className="p-0 rounded-full text-[#262626] bg-[#B91202]">
                        <IoIosCheckmark />
                      </span>
                      <span>{offer.offer}</span>
                    </p>
                  ))}
                </div>
                <div>
                  <h2 className="text-4xl font-rajdhani lg:py-0 py-4">
                    ${item.price} <sub className="text-lg">/month</sub>
                  </h2>
                </div>
                <div className="relative inline-block overflow-hidden lg:w-auto w-full">
                  <button className="relative  origin-right gap-2 py-5 lg:px-12 px-8 w-full border border-[#DF2A19] rounded text-white font-rajdhani overflow-hidden group">
                    <span className="relative z-10 tracking-widest lg:text-base text-base">
                      SELETE PLAN
                    </span>
                    <div className="absolute inset-0 w-full h-full bg-[#DF2A19]  origin-right transform scale-x-0 group-hover:scale-x-100 group-hover:origin-left transition-transform duration-300 ease-in-out"></div>
                  </button>
                </div>
              </div>
            </div>
            <div>
              {item.status === "popular" && (
                <div>
                  <h2
                    style={{
                      background:
                        "linear-gradient(to left, rgba(185, 18, 2,0.3) 40%, rgba(185, 18, 2,0.9) 80%)",
                    }}
                    className="text-[#fff] absolute top-2 right-0 py-2 px-6 rounded-l-md uppercase tracking-widest font-rajdhani"
                  >
                    {item.status}
                  </h2>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Priceing;
