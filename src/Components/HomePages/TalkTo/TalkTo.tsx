import React from "react";
import imageHalf from "@/assets/images/section-half-bg-1.png";
import Image from "next/image";

const TalkTo = () => {
  return (
    <div className="bg-[#151515] text-[#fff] py-16">
      <div className="flex mt-12 pb-10">
        <div className="lg:w-3/6 hidden lg:block">
          <Image
            className="rounded-r-md"
            src={imageHalf}
            alt=""
            width={900}
            height={900}
          ></Image>
        </div>
        <div className="py-2 lg:w-3/6 w-full lg:ml-[-70px]">
          <div className="bg-[#1A1A1C] rounded lg:px-20 px-10 py-8">
            <div className="flex flex-col gap-2">
              <p className="text-[#B91202] uppercase font-rajdhani text-lg tracking-widest">
                Talk to us
              </p>
              <h2 className="lg:text-3xl md:text-5xl text-2xl font-rajdhani lg:w-[600px]">
                Unleash the Power of Technology
              </h2>
            </div>

            <form className="flex flex-col gap-4 mt-6 w-full">
              <div className="flex gap-4">
                <div className="border border-[#fff]/20 py-3 px-4 w-full rounded">
                  <input
                    className="w-full bg-transparent outline-none"
                    type="text"
                    placeholder="Your Name"
                  />
                  <span></span>
                </div>
                <div className="border border-[#fff]/20 py-3 px-4 w-full rounded">
                  <input
                    className="w-full bg-transparent outline-none"
                    type="email"
                    placeholder="Your Email"
                  />
                  <span></span>
                </div>
              </div>
              <div className="border border-[#fff]/20 py-3 px-4 w-full rounded">
                <input
                  className="w-full bg-transparent outline-none"
                  type="text"
                  placeholder="Subject"
                />
                <span></span>
              </div>
              <div className="border border-[#fff]/20 py-3 px-4 w-full rounded">
                <textarea
                  className="w-full bg-transparent outline-none"
                  name=""
                  id=""
                  cols={8}
                  rows={4}
                  placeholder="message"
                ></textarea>
                <span></span>
              </div>
              <div className="relative inline-block  overflow-hidden origin-right w-full text-center">
                <button className="relative flex items-center justify-center origin-right gap-2 py-3 px-6 bg-[#AE1A00] text-white font-rajdhani overflow-hidden group w-full text-center rounded">
                  <span className="relative z-10 text-center tracking-widest">
                    SEND NOW
                  </span>
                  <div className="absolute inset-0 w-full h-full bg-[#9D0F02] origin-right transform scale-x-0 group-hover:scale-x-100 group-hover:origin-left transition-transform duration-300 ease-in-out"></div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalkTo;
