import React from "react";
import { portfolioItems } from "../../../../public/PortfolioItems";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-[#B91202] uppercase font-rajdhani text-lg tracking-widest">
          latest portfolio
        </p>
        <h2 className="lg:text-5xl md:text-5xl text-2xl font-rajdhani lg:w-[700px] text-center leading-snug">
          Where Innovation Meets IT Excellence
        </h2>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-20">
        {portfolioItems.slice(0.4).map((item, index) => (
          <Link
            href="/servicedetails"
            key={item.id}
            className={`relative cursor-pointer group ${
              index % 2 === 0 ? "mt-4" : "mb-4"
            }`}
          >
            <div>
              <Image
                className="rounded-md group-hover:scale-95 duration-300 w-full"
                src={item.image}
                alt="title"
                width={300}
                height={100}
              ></Image>
            </div>

            <div
              className="w-full h-full absolute top-0 left-0 rounded-md inset-0 
              opacity-0 group-hover:opacity-100 transform 
              group-hover:scale-95 duration-300"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(185, 18, 2,0.3) 40%, rgba(185, 18, 2,0.9) 70%)",
              }}
            >
              <div className="bottom-0 absolute px-8 py-8">
                <h2 className="text-2xl font-rajdhani translate-y-[-12px] group-hover:translate-y-[0px] duration-300">
                  {item.title}
                </h2>
                <p className="border-b-2 py-1"></p>
                <p className="text-base py-2 text-[#fff]/60 translate-y-[12px] group-hover:translate-y-[0px] duration-300">
                  {item.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
