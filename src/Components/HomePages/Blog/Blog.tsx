"use client";
import React from "react";
import { motion } from "framer-motion";
import { blogItems } from "../../../../public/BlogItems";
import Image from "next/image";
import { FaUserAlt } from "react-icons/fa";
import { FaComments, FaArrowRight } from "react-icons/fa6";

import "./Blog.css";

const Blog = () => {
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-[#1A1A1C] text-[#fff] lg:py-20 py-12 lg:px-16 md:px-16 px-4">
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-[#B91202] uppercase font-rajdhani text-lg tracking-widest">
          our blogs
        </p>
        <h2 className="lg:text-5xl md:text-5xl text-2xl font-rajdhani lg:w-[600px] text-center">
          Transforming Challenges into Seamless Solutions
        </h2>
      </div>

      <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 gap-8">
        {blogItems.map((item, index) => (
          <motion.div
            key={item.comment}
            className="overlayer group cursor-pointer"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="relative">
              <div className="relative overflow-hidden rounded">
                <Image
                  className="rounded group-hover:scale-110 duration-500 group-hover:rounded"
                  src={item.imgage}
                  alt="image"
                  width={500}
                  height={500}
                />
                <div className="px-8 py-6 top-0 absolute z-20">
                  <h2 className=" bg-[#1A1A1C] group-hover:bg-[#B91202] duration-300 text-base tracking-widest rounded font-rajdhani text-center px-4 py-2">
                    {item.data}
                  </h2>
                </div>
              </div>
              <div className="absolute bottom-0 z-10 px-8 py-8">
                <div className="flex gap-8">
                  <p className="flex items-center gap-2 capitalize">
                    <span>
                      <FaUserAlt />
                    </span>
                    <span> By {item.user}</span>
                  </p>
                  <p className="flex items-center gap-2 capitalize">
                    <span>
                      <FaComments />
                    </span>
                    <span>comment (0{item.comment})</span>
                  </p>
                </div>
                <h2 className="text-3xl font-rajdhani py-3 hover:text-[#B91202] cursor-pointer duration-300">
                  {item.title}
                </h2>
                <button className="flex items-center gap-3 tracking-widest hover:text-[#B91202] duration-300 cursor-pointer font-rajdhani">
                  <span>READ MORE</span>
                  <span className="text-[#B91202]">
                    <FaArrowRight />
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
