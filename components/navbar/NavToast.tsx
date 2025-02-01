import React from 'react';
import { RxCross2 } from "react-icons/rx";

const NavToast = () => {
    return (
        <div className='h-[50s] md:h-[66px] lg:h-[86px] w-full bg-[#A6E2E2] '>
            <div className='max-w-[1170px] h-full mx-auto flex items-center gap-14 px-5'>
                <div>
                    <h1 className='bg-gradient-to-b from-[#FF3535] to-[#FFCC00] text-[32px] md:text-[50px] lg:text-[64px] font-extrabold bg-clip-text text-transparent'>100%</h1>
                </div>

                <div className='border-[2px] border-[#014463] rounded w-[100px] md:w-[120px] lg:w-[152px] text-center'>
                    <h1 className='text-[10px] md:text-[12px] lg:text-[18px]'><span className='text-[#F15B2D]'>Scholarship</span> on all of our programs</h1>
                </div>

                <div className='flex items-center justify-between flex-1'>
                    <p className='text-[#014463] text-xs md:text-sm lg:text-base'>Exclusively for the physically challenged, and third-gender communities!</p>

                    <button className='text-white text-xl'><RxCross2 /></button>
                </div>
            </div>
        </div>
    );
};

export default NavToast;