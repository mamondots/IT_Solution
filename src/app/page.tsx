import About from "@/Components/HomePages/About/About";
import Banner from "@/Components/HomePages/Banner/Banner";
import Portfolio from "@/Components/HomePages/Portfolio/Portfolio";
import Services from "@/Components/HomePages/Services/Services";
import Subscribe from "@/Components/HomePages/Subscribe/Subscribe";
import React from "react";

const page = () => {
  return (
    <div className="">
      <Banner></Banner>
      <Services></Services>
      <About></About>
      <Subscribe></Subscribe>
      <Portfolio></Portfolio>
    </div>
  );
};

export default page;
