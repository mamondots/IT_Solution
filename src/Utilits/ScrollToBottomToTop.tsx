"use client";
import React from "react";
import ScrollToTop from "react-scroll-up";
import { BsArrow90DegUp } from "react-icons/bs";

const ScrollToBottomToTop = () => {
  return (
    <div className="relative z-50">
      <ScrollToTop showUnder={160}>
        <p className="bg-[#B91202] hover:bg-[#93140634] duration-300 cursor-pointer p-3 text-xl rounded text-[#fff]">
          <BsArrow90DegUp />
        </p>
      </ScrollToTop>
    </div>
  );
};

export default ScrollToBottomToTop;
