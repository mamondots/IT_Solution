import About from "@/Components/HomePages/About/About";
import Banner from "@/Components/HomePages/Banner/Banner";
import Blog from "@/Components/HomePages/Blog/Blog";
import CountPeople from "@/Components/HomePages/CountPeople/CountPeople";
import Portfolio from "@/Components/HomePages/Portfolio/Portfolio";
import Priceing from "@/Components/HomePages/Priceing/Priceing";
import Services from "@/Components/HomePages/Services/Services";
import Subscribe from "@/Components/HomePages/Subscribe/Subscribe";
import TalkTo from "@/Components/HomePages/TalkTo/TalkTo";
import Team from "@/Components/HomePages/Team/Team";
import Testimonal from "@/Components/HomePages/Testimonal/Testimonal";
import React from "react";

const page = () => {
  return (
    <div className="">
      <Banner></Banner>
      <Services></Services>
      <About></About>
      <Subscribe></Subscribe>
      <Portfolio></Portfolio>
      <CountPeople></CountPeople>
      <Testimonal></Testimonal>
      <Priceing></Priceing>
      <Team></Team>
      <TalkTo></TalkTo>
      <Blog></Blog>
    </div>
  );
};

export default page;
