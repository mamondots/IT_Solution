"use client";
import React from "react";
import { motion } from "framer-motion";
const Loges = () => {
  return (
    <div className="lg:px-16 md:px-16 px-10 text-[#fff]">
      <div className="flex  overflow-hidden bg-[#B91202] [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
        <motion.div
          initial={{ translateX: "-20%" }}
          animate={{ translateX: "0" }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "linear",
          }}
          className="flex flex-none gap-14 pr-14 "
        >
          {[
            "AcmeLogo",
            "agency",
            "ApexLogo",
            "QuantumLogo",
            "IT Sloution",
            "CelestialLogo",
            "Work process",
            "IT Sloution",
            "agency",
            "Tech",
          ].map((logo, index) => (
            <h2 key={index} className="text-2xl tracking-widest font-rajdhani">
              {logo}
            </h2>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Loges;
