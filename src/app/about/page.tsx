import About from "@/Components/HomePages/About/About";
import CountPeople from "@/Components/HomePages/CountPeople/CountPeople";
import Subscribe from "@/Components/HomePages/Subscribe/Subscribe";
import Testimonal from "@/Components/HomePages/Testimonal/Testimonal";
import AllHead from "@/Utilits/AllHead";
import React from "react";

const page = () => {
  return (
    <div>
      <AllHead></AllHead>
      <div className="py-20 mt-40 bg-[#151515]">
        <About></About>
        <Subscribe></Subscribe>
        <Testimonal></Testimonal>
        <CountPeople></CountPeople>
      </div>
    </div>
  );
};

export default page;
