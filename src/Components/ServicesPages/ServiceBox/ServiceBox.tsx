import React from "react";
import { serviceItens } from "../../../../public/ServiceItems";
import Link from "next/link";
const ServiceBox = () => {
  return (
    <div className="lg:px-20 px-10">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-6 gap-4 text-[#fff]">
        {serviceItens.map((item) => (
          <div
            key={item.id}
            className="group relative bg-[#1A1A1C] p-8 rounded-xl cursor-pointer border-b-2 border-transparent hover:translate-y-[-12px] duration-300"
          >
            <div className="flex items-center gap-2">
              <svg
                className="w-[70px] h-[70px] text-[#fff] group-hover:text-[#B91202] group-hover:scale-90 duration-300"
                fill="currentColor"
              >
                {item.icon}
              </svg>
              <h2 className="lg:text-2xl md:text-2xl text-xl font-semibold font-rajdhani">
                {item.title}
              </h2>
            </div>
            <p className="py-4 leading-loose text-[#fff]/50">
              {item.description}
            </p>

            <div className="mt-4">
              <Link href="/servicedetails">
                <button className="bg-[#141416] px-6 py-3 rounded-md border border-transparent group-hover:border-[#B91202] duration-300 capitalize text-base font-rajdhani tracking-widest flex items-center gap-2">
                  <span className="capitalize">READ MORE</span>
                  <span className="text-[#B91202] text-2xl">+</span>
                </button>
              </Link>
            </div>
            <div className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#B91202] transition-all duration-300 ease-out group-hover:w-full group-hover:left-0 overflow-hidden"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceBox;
