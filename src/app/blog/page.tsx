import BlogContent from "@/Components/BlogPages/BlogContent/BlogContent";
import AllHead from "@/Utilits/AllHead";
import React from "react";

const page = () => {
  return (
    <div>
      <AllHead head="Blog Classic" subHead="Blog Classic"></AllHead>
      <div className="py-20 mt-64 bg-[#151515] text-[#fff] lg:px-16 px-10">
        <BlogContent></BlogContent>
      </div>
    </div>
  );
};

export default page;
