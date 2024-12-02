import SingleBlog from "@/Components/BlogPages/SingleBlog/SingleBlog";
import AllHead from "@/Utilits/AllHead";
import React from "react";

const page = () => {
  return (
    <div>
      <AllHead head="Blog Details" subHead="Blog Details"></AllHead>
      <div className="py-20 mt-32 bg-[#151515] text-[#fff] lg:px-20 px-10">
        <SingleBlog></SingleBlog>
      </div>
    </div>
  );
};

export default page;
