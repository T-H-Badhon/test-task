import React from "react";
import Image from "next/image";

const OurPartners=()=> {



  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Our Partners
            </h2>
            <div className="w-16 h-1 bg-orange-500"></div>
          </div>

          <div className="flex gap-4">
            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-cyan-500 hover:text-cyan-500 transition-colors">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-cyan-500 hover:text-cyan-500 transition-colors">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 overflow-x-auto pb-2 font-semibold">
            <button
              className='text-base md:text-lg whitespace-nowrap text-[#29BDBF]'
            >
              Technology Partners
            </button>
            <button
              className='text-base md:text-lg whitespace-nowrap'
            >
              Branding Partners
            </button>
            <button
              className='text-base md:text-lg whitespace-nowrap'
            >
              Training Partners
            </button>
            <button
              className='text-base md:text-lg whitespace-nowrap'
            >
              Banking Partners
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div
              className="bg-[#B7E4E0] rounded-full px-8 py-4 flex items-center justify-center"
            >
              <Image
                src={"/partners/IBM.png"}
                width={200}
                height={100}
                alt="logo"
                className="h-8 w-auto object-contain"
              />
            </div>
            <div
              className="bg-[#B7E4E0] rounded-full px-8 py-4 flex items-center justify-center"
            >
              <Image
                src={"/partners/Hostinger.png"}
                width={200}
                height={100}
                alt="logo"
                className="h-8 w-auto object-contain"
              />
            </div>
            <div
              className="bg-[#B7E4E0] rounded-full px-8 py-4 flex items-center justify-center"
            >
              <Image
                src={"/partners/Digitalocean.png"}
                width={200}
                height={100}
                alt="logo"
                className="h-8 w-auto object-contain"
              />
            </div>
            <div
              className="bg-[#B7E4E0] rounded-full px-8 py-4 flex items-center justify-center"
            >
              <Image
                src={"/partners/Microsoft.png"}
                width={200}
                height={100}
                alt="logo"
                className="h-8 w-auto object-contain"
              />
            </div>

        </div>
      </div>
    </div>
  );
}

export default OurPartners;