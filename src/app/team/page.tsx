import Team from "@/Components/HomePages/Team/Team";
import AllHead from "@/Utilits/AllHead";
import React from "react";

const page = () => {
  return (
    <div>
      <AllHead head="Team" subHead="Team"></AllHead>
      <div className="mt-72 text-[#fff]">
        <div>
          <Team></Team>
        </div>
      </div>
    </div>
  );
};

export default page;
