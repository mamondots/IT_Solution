import SingleProject from "@/Components/ProjectPage/SingleProject/SingleProject";
import AllHead from "@/Utilits/AllHead";
import React from "react";

const page = () => {
  return (
    <div>
      <AllHead head="Service Details" subHead="Service Details"></AllHead>
      <div className="py-20 mt-32 bg-[#151515] text-[#fff] lg:px-20 px-10">
        <SingleProject></SingleProject>
      </div>
    </div>
  );
};

export default page;
