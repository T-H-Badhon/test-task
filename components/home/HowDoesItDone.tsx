import Image from "next/image";
import React from "react";

const HowDoesItDone = () => {
  return (
    <div className="max-w-[1170px] mx-auto ">
      <div>
        <h1 className="text-center text-2xl font-bold">How does it work?</h1>
        <div className="border-b-2 border-[#F15B2D] w-[70px] mx-auto mt-4"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-14 pt-52 px-5">
        <Card_one />
        <Card_two />
        <Card_three />
      </div>
    </div>
  );
};

export default HowDoesItDone;

const Card_one = () => {
  return (
    <div className="bg-white min-h-[300px] rounded-2xl relative -top-[100px] shadow-xl">
      <div className="absolute -top-[20px] w-full ">
        <div className="w-fit mx-auto ">
          <div className=" w-fit">
            <Image
              src={"/howdoesitwork/Group 47.png"}
              width={600}
              height={600}
              className="w-[150px] aspect-square"
              alt="logo"
            />
          </div>
        </div>
      </div>

      <div className="pt-[170px] pb-16 p-8 text-center space-y-3">
        <h1 className="font-semibold text-lg">Training</h1>
        <p className="text-[#848484]">
          Our training programs, tailored to each subject matter and specialized
          courses, last at least 3 months and take place in our physical venues.
          Access to all course materials will be provided through the Bulipe
          App/repository, ensuring a comprehensive learning experience for all
          participants.
        </p>
      </div>

      <div className=" absolute -bottom-1 w-full mx-auto">
        <div className="h-2 w-14 rounded-full bg-red-400  mx-auto"></div>
      </div>
    </div>
  );
};

const Card_two = () => {
  return (
    <div className="bg-white min-h-[300px] rounded-2xl relative -top-[100px] shadow-xl">
      <div className="absolute -top-[20px] w-full ">
        <div className=" w-fit mx-auto ">
          <div className=" w-fit">
            <Image
              src={"/howdoesitwork/Group 48.png"}
              width={600}
              height={600}
              className="w-[150px] aspect-square"
              alt="logo"
            />
          </div>
        </div>
      </div>

      <div className="pt-[170px] pb-16 p-8 text-center space-y-3">
        <h1 className="font-semibold text-lg">Certification</h1>
        <p className="text-[#848484]">
          Upon completion of your desired course and training, each trainee must
          attend a central examination at their respective geographical
          headquarters of Bulipe. Upon passing, trainee graduates receive
          industry-recognized certifications trusted by employers globally.
        </p>
      </div>

      <div className=" absolute -bottom-1 w-full mx-auto">
        <div className="h-2 w-14 rounded-full bg-red-400  mx-auto"></div>
      </div>
    </div>
  );
};

const Card_three = () => {
  return (
    <div className="bg-white min-h-[300px] rounded-2xl relative -top-[100px] shadow-xl">
      <div className="absolute -top-[20px] w-full ">
        <div className=" w-fit mx-auto ">
          <div className=" w-fit">
            <Image
              src={"/howdoesitwork/Group 49.png"}
              width={600}
              height={600}
              className="w-[150px] aspect-square"
              alt="logo"
            />
          </div>
        </div>
      </div>

      <div className="pt-[170px] pb-16 p-8 text-center space-y-3">
        <h1 className="font-semibold text-lg">Employment</h1>
        <p className="text-[#848484]">
          We guarantee confirmed job prospects and a base salary of BDT 30,000
          for all Bulipe trainee graduates through our vast alumni network,
          partnerships with 350+ global businesses across Europe, America, Asia,
          and Africa.
        </p>
      </div>
      <div className=" absolute -bottom-1 w-full mx-auto">
        <div className="h-2 w-14 rounded-full bg-red-400  mx-auto"></div>
      </div>
    </div>
  );
};
