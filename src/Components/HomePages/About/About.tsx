/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useRef } from "react";
import aboutImg1 from "@/assets/images/about-1.png";
import aboutImg2 from "@/assets/images/about-2.png";
import aboutImg3 from "@/assets/images/about-3.png";
import aboutImg4 from "@/assets/images/about-4.png";
import Image from "next/image";
import { FaPlus } from "react-icons/fa6";
import { VscSettings } from "react-icons/vsc";
import { HiOutlineDeviceTablet } from "react-icons/hi";
import { motion, useInView } from "framer-motion";

const About = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const isLeftInView = useInView(leftRef, { once: true });
  const isRightInView = useInView(rightRef, { once: true });

  return (
    <div className="bg-[#151515] text-[#fff] lg:py-8 lg:px-16 md:px-16 px-10 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-4">
        <motion.div
          ref={leftRef}
          className="lg:flex flex-col relative hidden"
          initial={{ x: "-10vw" }}
          animate={isLeftInView ? { x: 0 } : { x: "-10vw" }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          <div className="flex relative">
            <div className="relative">
              <Image
                className="rounded-xl rounded-tl-[40px] bg-[red] p-2 mt-36 ml-4 w-full"
                src={aboutImg1}
                alt="about"
              />
            </div>
            <div className="rounded-xl relative">
              <Image
                className="rounded-xl rounded-br-[100px] rounded-tl-[100px] ml-4"
                src={aboutImg2}
                alt="about"
              />
            </div>
          </div>
          <div className="flex">
            <div>
              <Image src={aboutImg3} alt="about" />
            </div>
            <div>
              <Image
                className="rounded-br-[100px]"
                src={aboutImg4}
                alt="about"
              />
            </div>
          </div>
          <div className="w-[100px] h-[100px] bg-[#fff] rounded-full absolute top-[50%] left-[40%] translate-x-[-50%] translate-y-[-50%] flex items-center justify-center">
            <h2 className="bg-[#B91202] rounded-full p-5 text-4xl">
              <FaPlus />
            </h2>
          </div>
        </motion.div>

        <motion.div
          ref={rightRef}
          className="mt-8"
          initial={{ x: "10vw" }}
          animate={isRightInView ? { x: 0 } : { x: "10vw" }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          <p className="text-lg uppercase font-rajdhani tracking-widest text-[#B91202] py-2">
            About us
          </p>
          <h2 className="lg:text-5xl md:text-5xl text-3xl font-rajdhani leading-tight">
            Empowering Your Digital Tomorrow
          </h2>
          <p className="py-3 text-[#fff]/60 leading-loose">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. Lorem
            Ipsum is simply dummy text of the printing and typesetting industry
            lorem ipsum.
          </p>

          <div className="grid lg:grid-cols-2 lg:gap-8 gap-4 mt-8">
            <button className="group cursor-pointer border border-[#B91202] rounded py-4 flex items-center gap-2 justify-center font-rajdhani text-2xl">
              <span className="text-4xl group-hover:scale-75 duration-300">
                <HiOutlineDeviceTablet />
              </span>
              <span>Cloud Migrate Pro</span>
            </button>
            <button className="group cursor-pointer border border-[#B91202] rounded py-4 flex items-center gap-2 justify-center font-rajdhani text-2xl">
              <span className="text-4xl group-hover:scale-75 duration-300">
                <VscSettings />
              </span>
              <span>AI Forge Labs</span>
            </button>
          </div>
          <p className="mt-8 text-[#fff]/60 leading-loose">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
