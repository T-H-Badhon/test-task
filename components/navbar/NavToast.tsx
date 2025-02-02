"use client"
import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";

const NavToast = () => {

    const [toast, setToast]=useState(true)
    return (
        <div className={` w-full bg-[#A6E2E2] ${toast? "":"hidden" }`}>
            <div className='max-w-[1170px] h-full mx-auto flex items-center gap-2 md:gap-14 px-3'>
                <div>
                    <h1 className='bg-gradient-to-b from-[#FF3535] to-[#FFCC00] text-[32px]  font-extrabold bg-clip-text text-transparent'>100%</h1>
                </div>

                <div className='border-[2px] border-[#014463] rounded w-[90px] text-center'>
                    <h1 className='text-[10px]'><span className='text-[#F15B2D]'>Scholarship</span> on all of our programs</h1>
                </div>

                <div className='flex items-center justify-between flex-1 gap-1'>
                    <p className='text-[#014463] flex-1 text-xs md:text-sm lg:text-base'>Exclusively for the physically challenged, and third-gender communities!</p>

                    <button onClick={()=>{
                        setToast(false)
                    }} className='text-white text-xl'><RxCross2 /></button>
                </div>
            </div>
        </div>
    );
};

export default NavToast;