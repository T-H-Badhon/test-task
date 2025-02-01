import React from "react";

const OurCommunity=()=> {

  return (
    <div className="bg-[#01111E] text-white py-20">
      <div className="max-w-[1170px] w-full mx-auto p-5">
        <div className=" mx-auto  mb-16">
          <h2 className="text-3xl font-bold mb-4">Our community</h2>
          <div className="w-16 h-[2px] bg-[#F15B2D]  mb-8"></div>
          <p className="text-gray-300 text-lg max-w-[544px]">
            Bulipe Tech aims to train unemployed individuals in Bangladesh,
            equipping them with essential digital skills and linking them to job
            opportunities across 23 countries worldwide.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 mx-auto shadow-sm shadow-gray-300">
            <div
              className="p-8 rounded-lg border border-gray-800"
            >
              <h3 className="text-4xl font-bold mb-2">3K+</h3>
              <p className="text-gray-400">Global partners worldwide</p>
            </div>
            <div
              className="p-8 rounded-lg border border-gray-800"
            >
              <h3 className="text-4xl font-bold mb-2">23+</h3>
              <p className="text-gray-400">Countries and adding</p>
            </div>
            <div
              className="p-8 rounded-lg border border-gray-800"
            >
              <h3 className="text-4xl font-bold mb-2">300+</h3>
              <p className="text-gray-400">Local training partners</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default OurCommunity;