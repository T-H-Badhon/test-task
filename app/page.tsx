import HeroCards from "@/components/home/HeroCards";
import HeroSection from "@/components/home/HeroSection";
import HowDoesItDone from "@/components/home/HowDoesItDone";
import WhatWeDo from "@/components/home/WhatWeDo";
import Navber from "@/components/navbar/Navber";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Navber />
      <HeroSection />
      <HeroCards />
      <WhatWeDo />
      <div className="bg-[#F2F2F2] py-12 ">
        <HowDoesItDone />
      </div>

      <div className="bg-[#F2F2F2] py-12 "  style={{
    backgroundImage: "url('/')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}>

      </div>
    </div>
  );
};

export default HomePage;
