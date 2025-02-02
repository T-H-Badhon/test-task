"use client";
import Link from "next/link";
import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { HiBars3BottomRight, HiXMark } from "react-icons/hi2";
import "react-modern-drawer/dist/index.css";
import dynamic from "next/dynamic";
const Drawer = dynamic(() => import("react-modern-drawer"), { ssr: false });

const NavDrawer = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div className="md:hidden">
      <button onClick={toggleDrawer}>
        <HiBars3BottomRight className="w-8 h-8" />
      </button>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="bla bla bla  !bg-transparent overflow-y-auto overflow-hidden"
        style={{
          scrollbarWidth: "none",
        }}
      >
        <div className="w-[100vw] -translate-x-[calc(100vw-250px)] flex justify-end">
          <div className="flex bg-white w-[250px]  pt-2 px-5 space-x-2 items-center justify-end">
            <button onClick={toggleDrawer}>
              <HiXMark className=" text-2xl" />
            </button>
          </div>
        </div>
        <div className="py-1 px-8 bg-white min-h-[calc(100%-42px)]">
          <div className="my-8 space-y-3">
            <div onClick={toggleDrawer} className="w-full text-lg">
              <Link href={"#"}>Home</Link>
            </div>
            <div onClick={toggleDrawer} className="w-full text-lg">
              <Link href={"#"}>About Us</Link>
            </div>
            <div onClick={toggleDrawer} className="w-full text-lg">
              <Link href={"#"}>Programs</Link>
            </div>
            <div onClick={toggleDrawer} className="w-full text-lg">
              <Link
                href={"#"}
              >
                Career & Placement
              </Link>
            </div>
            <div onClick={toggleDrawer} className="w-full text-lg">
              <Link href={"#"}>Contact Us</Link>
            </div>
          </div>
          <hr />

          <div className="flex items-center gap-4 py-1 px-3 w-fit rounded-full bg-[#F15B2D] text-white mt-4">
            <h1>Sign Up</h1>
            <FaRegCircleUser />
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default NavDrawer;
