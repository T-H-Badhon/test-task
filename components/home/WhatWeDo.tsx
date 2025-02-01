import Image from 'next/image';
import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';

const WhatWeDo = () => {
    return (
        <div className="max-w-[1170px] mx-auto py-16">
            <div>
                <h1 className="text-center text-2xl font-bold">What We Do?</h1>
                <div className='border-b-2 border-[#F15B2D] w-[70px] mx-auto mt-4'></div>
            </div>

            <div className='flex items-center mt-16'>
                <div className='bg-[#A6E2E2] h-full min-h-[435px] flex-1 p-5 place-content-center space-y-5'>
                    <h1 className='text-2xl'>Bulipe Tech is a dynamic and innovative company</h1>
                    <p>We empower individuals to unlock career opportunities through our proven Digital Skill Development program. Partnering with 300 local organisations and 3,000+ global partners in 21 countries, we provide access to top U.S. certifications and salary-based employment starting at $250, with the potential to exceed $3,000 through continuous up-skilling.</p>

                    <button className='flex items-center gap-1 py-1 px-4 bg-[#004464] rounded-full text-white'><h1>Read more</h1><BsArrowRightShort /></button>
                </div>

                <div>
                    <Image src={'/whatwedo/Right.png'} width={900} height={500} className='max-w-[800px] w-full aspect-auto' alt='right image'/>
                </div>
            </div>
            
        </div>
    );
};

export default WhatWeDo;