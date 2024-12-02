import SingleService from "@/Components/ServicesPages/SingleService/SingleService";
import AllHead from "@/Utilits/AllHead";
import React from "react";

const page = () => {
  return (
    <div>
      <AllHead head="Project Details" subHead="Project Details"></AllHead>
      <div className="py-20 mt-32 bg-[#151515] text-[#fff] lg:px-20 px-10">
        <SingleService></SingleService>
      </div>
    </div>
  );
};

export default page;
