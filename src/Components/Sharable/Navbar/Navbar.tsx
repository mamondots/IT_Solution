"use client";
import React, { useState } from "react";
import { navItems } from "@/config/navItems";
import Link from "next/link";
import { IoMdArrowForward } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { FaXmark } from "react-icons/fa6";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";

import { FaTwitter } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isOpne, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpne);
  };

  return (
    <div>
      <div className="lg:px-20 md:px-16 px-10 py-10 relative z-[999]">
        <div className="flex items-center justify-between text-[#fff]">
          <div>
            <h2 className="text-2xl font-rajdhani font-extrabold">
              <span>Al</span> <span className="text-[#B91202]">Mamon</span>
            </h2>
          </div>
          <div className="lg:flex hidden items-center gap-6 list-none font-rubik">
            {navItems.map((item) => (
              <li
                key={item.label}
                className="hover:text-[#B91202] duration-300 cursor-pointer font-medium"
              >
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </div>
          <div className="relative lg:inline-block hidden overflow-hidden origin-right">
            <button className="relative flex items-center origin-right gap-2 py-3 px-6 bg-[#AE1A00] text-white font-rajdhani overflow-hidden group">
              <span className="relative z-10">Get A Quote</span>
              <span className="relative z-10">
                <IoMdArrowForward />
              </span>
              <div className="absolute inset-0 w-full h-full bg-[#9D0F02] origin-right transform scale-x-0 group-hover:scale-x-100 group-hover:origin-left transition-transform duration-300 ease-in-out"></div>
            </button>
          </div>
          <div
            onClick={handleOpen}
            className="border border-[#AE1A00] p-1 lg:hidden"
          >
            <p className="">
              <IoMdMenu />
            </p>
          </div>
        </div>
      </div>
      <div>
        {isOpne && (
          <div className="top-0 left-0 w-full h-full fixed bg-[#141416]/60 z-[999]">
            <div className="lg:w-2/3 md:w-2/3  h-screen bg-[#fff] px-12 py-8">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-rajdhani">
                  Al <span className="text-[#E1291A]">Mamon</span>
                </h2>
                <p onClick={handleOpen} className="text-2xl cursor-pointer">
                  <FaXmark />
                </p>
              </div>

              <div className="flex flex-col gap-4 font-rajdhani list-none  mt-12">
                {navItems.map((item) => (
                  <li
                    key={item.label}
                    className="tracking-widest border-b border-[#262626]/30 pb-2"
                  >
                    <Link href="/">{item.label}</Link>
                  </li>
                ))}
              </div>

              <div>
                <h2 className="text-xl font-rajdhani uppercase tracking-widest mt-8">
                  contack <span className="text-[#E1291A]">info</span>
                </h2>

                <div className="flex items-center gap-2 cursor-pointer mt-4">
                  <p className="px-2 py-2 bg-[#E1291A] rounded text-[#fff]">
                    <FaFacebookF></FaFacebookF>
                  </p>
                  <p className="px-2 py-2 bg-[#E1291A] rounded text-[#fff]">
                    <FaLinkedinIn></FaLinkedinIn>
                  </p>
                  <p className="px-2 py-2 bg-[#E1291A] rounded text-[#fff]">
                    <FaTwitter></FaTwitter>
                  </p>
                  <p className="px-2 py-2 bg-[#E1291A] rounded text-[#fff]">
                    <FaPinterestP></FaPinterestP>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
