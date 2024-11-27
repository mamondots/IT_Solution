import React from "react";
import { navItems } from "@/config/navItems";
import Link from "next/link";
import { IoMdArrowForward } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";

import "./Navbar.css";
const Navbar = () => {
  return (
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
              <Link href="/">{item.label}</Link>
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
        <div className="border border-[#AE1A00] p-1 lg:hidden">
          <p className="">
            <IoMdMenu />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
