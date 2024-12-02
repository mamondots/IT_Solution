/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Head from "@/assets/images/all_head.webp";
import Link from "next/link";
const AllHead = ({ head, subHead }: any) => {
  return (
    <div
      className="top-0 left-0 absolute w-full lg:px-20 md:px-16 px-10 py-12"
      style={{
        backgroundImage: `url(${Head.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute inset-0 text-[#151515ab]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(21,21,21,0.7) 30%, rgba(21,21,21,1) 70%)",
        }}
      ></div>
      <div className="text-[#fff] relative z-10 py-20">
        <h2 className="text-2xl font-rajdhani capitalize">{head}</h2>
        <div className="flex items-center gap-4 mt-4 font-rajdhani">
          <Link href="/">
            <p className="tracking-widest cursor-pointer hover:text-[#AE1A00]">
              Home
            </p>
          </Link>

          <p>/</p>
          <p className="tracking-widest capitalize">{subHead}</p>
        </div>
      </div>
    </div>
  );
};

export default AllHead;
