import Image from "next/image";
import React from "react";

const HeroCards = () => {
  return (
    <div className="mx-auto max-w-[1170px] grid grid-cols-3 gap-4">
      <Card_one />
      <Card_two />
      <Card_three />
    </div>
  );
};

export default HeroCards;

const Card_one = () => {
  return (
    <div className="bg-white min-h-[300px] rounded-2xl relative -top-[100px] shadow-xl">
      <div className="absolute -top-[50px] w-full ">
        <div className="bg-[#004464] p-1 rounded-full w-fit mx-auto ">
          <div className="border-white border-[2px] rounded-full w-fit">
            <Image
              src={"/icons/icon_05.png"}
              width={600}
              height={600}
              className="w-[84px] aspect-square"
              alt="logo"
            />
          </div>
        </div>
      </div>

      <div className="mt-[100px] p-5">
        <h1 className="font-semibold text-lg">
          Master In-Demand Digital Skills to Advance Your Career
        </h1>
        <p className="text-[#848484]">
          Unlock career opportunities through our industry-recognized Digital
          Skill Development program. Begin your journey today with 300 local
          partners to stay ahead of the curve!
        </p>
      </div>
    </div>
  );
};

const Card_two = () => {
  return (
    <div className="bg-white min-h-[300px] rounded-2xl relative -top-[100px] shadow-xl">
      <div className="absolute -top-[50px] w-full ">
        <div className="bg-[#004464] p-1 rounded-full w-fit mx-auto ">
          <div className="border-white border-[2px] rounded-full w-fit">
            <Image
              src={"/icons/icon_06.png"}
              width={600}
              height={600}
              className="w-[84px] aspect-square"
              alt="logo"
            />
          </div>
        </div>
      </div>

      <div className="mt-[100px] p-5">
        <h1 className="font-semibold text-lg">
          Earn Vendor Certifications and Join Us
        </h1>
        <p className="text-[#848484]">
          Our post-training assessments connect you with leading U.S.
          certification providers. Join over 3,000 global partners across 21+
          countries and begin your career today!
        </p>
      </div>
    </div>
  );
};

const Card_three = () => {
  return (
    <div className="bg-white min-h-[300px] rounded-2xl relative -top-[100px] shadow-xl">
      <div className="absolute -top-[50px] w-full ">
        <div className="bg-[#004464] p-1 rounded-full w-fit mx-auto ">
          <div className="border-white border-[2px] rounded-full w-fit">
            <Image
              src={"/icons/icon_12.png"}
              width={600}
              height={600}
              className="w-[84px] aspect-square"
              alt="logo"
            />
          </div>
        </div>
      </div>

      <div className="mt-[100px] p-5">
        <h1 className="font-semibold text-lg">
          Start Earning BDT 30,000 Monthly and Grow Your Skills
        </h1>
        <p className="text-[#848484]">
          Salary-based employment starting at BDT 30,000, with the potential to
          exceed BDT 3,00,000+ as you up-skill and master new digital skills.
          Your earning potential is limitless.
        </p>
      </div>
    </div>
  );
};
