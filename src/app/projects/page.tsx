import ProjectCard from "@/Components/ProjectPage/ProjectCard/ProjectCard";
import AllHead from "@/Utilits/AllHead";
import React from "react";

const page = () => {
  return (
    <div>
      <AllHead head="Project" subHead="Project"></AllHead>
      <div className="py-20 mt-32 bg-[#151515] text-[#fff] lg:px-16 px-10">
        <ProjectCard></ProjectCard>
      </div>
    </div>
  );
};

export default page;
