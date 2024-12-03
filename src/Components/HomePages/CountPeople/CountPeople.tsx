"use client";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { counterItems } from "../../../../public/CounterItes";
import CountUp from "react-countup";

const CountPeople = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  if (inView && !hasAnimated) {
    setHasAnimated(true);
  }

  return (
    <div
      ref={ref}
      className="bg-[#151515] text-[#fff] py-20 lg:px-16 md:px-16 px-10"
    >
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
        {counterItems.map((count) => (
          <div
            key={count.id}
            className="bg-[#1A1A1C] rounded px-6 py-12 relative group cursor-pointer"
          >
            <h2 className="flex items-center gap-1 font-rajdhani text-4xl text-[#1A1A1C] text-stroke-1 text-stroke-white">
              <span>
                <CountUp
                  start={0}
                  end={hasAnimated ? Number(count.counte) : 0}
                  duration={2.5}
                />
              </span>
              <span className="text-4xl">+</span>
            </h2>
            <p className="mt-4 text-[#fff]/60">{count.title}</p>

            <div className="right-5 top-0 absolute bg-[#B91202] px-4 py-4 rounded-b-md">
              <p className="text-2xl group-hover:rotate-[-180deg] duration-300">
                {count.icon}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountPeople;
