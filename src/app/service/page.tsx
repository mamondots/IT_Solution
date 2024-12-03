import ServiceBox from "@/Components/ServicesPages/ServiceBox/ServiceBox";
import AllHead from "@/Utilits/AllHead";
import React from "react";

const page = () => {
  return (
    <div>
      <AllHead head="Services" subHead="Services"></AllHead>
      <div className="py-20 mt-60 bg-[#151515]">
        <ServiceBox></ServiceBox>
      </div>
    </div>
  );
};

export default page;
