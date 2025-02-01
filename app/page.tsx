import Footer from "@/components/home/Footer";
import HeroCards from "@/components/home/HeroCards";
import HeroSection from "@/components/home/HeroSection";
import HowDoesItDone from "@/components/home/HowDoesItDone";
import LatestNews from "@/components/home/LatestNews";
import OurCommunity from "@/components/home/OurCommunity";
import OurPartners from "@/components/home/OurPartner";
import OurProgram from "@/components/home/OurProgram";
import Ready from "@/components/home/Ready";
import Testimonials from "@/components/home/Testimonial";
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

      <div
        className="bg-[#F2F2F2] py-20 "
        style={{
          backgroundImage: "url('/ourprogram/Background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <OurProgram/>
      </div>
      <OurCommunity/>
      <OurPartners/>
      <Testimonials/>
      <LatestNews/>
      <Ready/>
      <Footer/>
    </div>
  );
};

export default HomePage;
