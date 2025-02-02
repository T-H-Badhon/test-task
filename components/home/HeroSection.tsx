import Image from "next/image";
import React from "react";
import { IoIosInformationCircle } from "react-icons/io";
import { PiUserCirclePlusFill } from "react-icons/pi";

const HeroSection = () => {
  return (
    <div className="md:h-[765px] bg-[#004464] w-full">
      <div className="max-w-[1170px] h-full mx-auto flex flex-col md:flex-row items-center justify-between ">
        <div className="flex-1 max-w-[569px]">
          <h1 className="text-lg text-white">ELEVATING</h1>
          <div className="max-w-[569px] w-full text-white relative">
            <div className="text-[52px] font-medium relative w-full  z-20">
              <h1>IT Service Industry with Digital Skills Development</h1>
            </div>

            <Image
              src={"/hero/Vector.png"}
              width={300}
              height={32}
              className="absolute top-[52%]  w-fit aspect-auto"
              alt="vector"
            />
          </div>

          <h1 className="text-base text-white">Bulipe Tech as a visionary agent collaborates with its parent companies from the USA and UK to bring forth a far-reaching Digital Skills Development project for the ever-changing workforce of Bangladesh.</h1>

          <div className="flex items-center gap-3 mt-5">
            <button className="bg-[#F15B2D]  rounded-full px-2 py-1 flex items-center gap-3 text-white"><p>Enroll now</p> <PiUserCirclePlusFill /></button>
            <button className="border-[1px] border-[#F15B2D]  rounded-full px-2 py-1 flex items-center gap-3 text-[#F15B2D]"><p>Read more</p> <IoIosInformationCircle /></button>
          </div>
        </div>

        <div className="relative">
          <Image
            src={"/hero/Group 81.png"}
            width={1000}
            height={1000}
            className="w-[470px] aspect-auto"
            alt="hero mask"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
