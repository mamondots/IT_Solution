import ContentInfo from "@/Components/ContactPages/ContentInfo/ContentInfo";
import AllHead from "@/Utilits/AllHead";
import React from "react";

const page = () => {
  return (
    <div>
      <AllHead head="Contact Us" subHead="Contact Us"></AllHead>
      <div className="py-20 mt-64 bg-[#151515] text-[#fff] lg:px-20 px-10">
        <ContentInfo></ContentInfo>
      </div>
    </div>
  );
};

export default page;
