import Image from "next/image";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";

const LatestNews = () => {
  return (
    <div className="max-w-[1170px]  mx-auto py-20 px-5">
      <div>
        <h1 className=" text-2xl font-bold">Latest News</h1>
        <div className="border-b-2 border-[#F15B2D] w-[70px] mt-4"></div>
      </div>

      <div>
        <div className="flex flex-col md:flex-row md:items-center mt-16">
          <div className='min-w-[calc(40%)]'>
            <Image
              src={"/latestNews/Image.png"}
              width={900}
              height={500}
              className='w-full h-full aspect-auto object-cover' 
              alt="right image"
            />
          </div>

          <div className="bg-[#F2F2F2] h-full min-h-[342px] flex-1 p-5 place-content-center space-y-5">
            <button className="py-2 px-4 bg-cyan-400/15 rounded-full">
              Current Event
            </button>
            <h1 className="text-2xl">
              Judge upholds Donald Trump&apos;s conviction, sets sentencing for
              Jan. 10 with no penalty
            </h1>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here, content
              here, making it look like readable English.
            </p>

            <button className="flex items-center gap-1 py-1 px-4 bg-[#004464] rounded-full text-white ml-auto">
              <h1>Read more</h1>
              <BsArrowRightShort />
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between py-10">
          <h1 className="text-2xl font-semibold">Featured News</h1>
          <div className="text-4xl flex items-center gap-5">
            <IoMdArrowDropleftCircle />
            <IoMdArrowDroprightCircle />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </div>
  );
};

export default LatestNews;

const NewsCard = () => {
  return (
    <div className="rounded-b-2xl border-2">
      <div>
        <Image
          src={"/latestNews/Mask group (1).png"}
          width={1000}
          height={600}
          className="w-full aspect-auto"
          alt="image"
        />
      </div>

      <div className=" flex-1 p-5 place-content-center space-y-5">
        <button className="py-2 px-4 bg-cyan-400/15 rounded-full">
          Technology
        </button>
        <h1 className="text-2xl">
          Judge upholds Donald Trump&apos;s conviction, sets sentencing for Jan.
          10 with no penalty
        </h1>
        <p>
        It is a long established fact that a reader will be distracted by the readable content of a page.
        </p>

        <button className="flex items-center gap-1 py-1 px-4 text-[#004464] rounded-full border border-[#004464]">
          <h1>Read more</h1>
          <BsArrowRightShort />
        </button>
      </div>
    </div>
  );
};
