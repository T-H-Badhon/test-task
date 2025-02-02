import Image from "next/image";
import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import NavDrawer from "./Navdrawer";

const NavContent = () => {
  return (
    <div className="flex items-center justify-between  max-w-[1170px] mx-auto h-[50px] md:h-[80px] px-5">
      <div>
        <Image
          src={"/logos/Logo-Main.png"}
          width={200}
          height={100}
          alt="logo"
          className="w-[100px] md:w-[140px] lg:w-[173px] aspect-auto"
        />
      </div>

      <div className="uppercase items-center gap-2 text-[14px] font-semibold hidden lg:flex">
        <h1 className="text-[#0786C0]">Home</h1>
        <h1 className="text-[#004464]">about us</h1>
        <h1 className="text-[#004464]">programs</h1>
        <h1 className="text-[#004464]">locations</h1>
        <h1 className="text-[#004464]">career & placements</h1>
        <h1 className="text-[#004464]">contact us</h1>
      </div>

      <div className="items-center gap-4 py-1 px-3 rounded-full bg-[#F15B2D] text-white hidden md:flex">
        <h1>Sign Up</h1>
        <FaRegCircleUser />
      </div>
      <NavDrawer />
    </div>
  );
};

export default NavContent;
