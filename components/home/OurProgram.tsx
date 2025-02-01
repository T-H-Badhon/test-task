import Image from 'next/image';
import React from 'react';
import { IoInformationCircle, IoStar } from 'react-icons/io5';

const OurProgram = () => {
    return (
        <div className="max-w-[1170px] mx-auto">
                    <div className='pt-40'>
                        <h1 className="text-center text-2xl font-bold">Our Programs</h1>
                        <div className='border-b-2 border-[#F15B2D] w-[70px] mx-auto mt-4'></div>
                    </div>
        
                    <div className='w-full grid grid-cols-3 mt-14'>
                        <div className='flex items-center gap-2 w-full border-b-[4px] px-2 pb-2 border-[#29BDBF]'>
                            <div>
                                <Image src={"/ourprogram/self-development.png"} width={50} height={50} className='w-10 aspect-square' alt="icon"/>
                            </div>
                            <h1>Digital Skills Development</h1>
                        </div>
                        <div className='flex items-center gap-2 w-full border-b-[4px] px-2 pb-2 border-[#F2F2F2]'>
                            <div>
                                <Image src={"/ourprogram/certificate.png"} width={50} height={50} className='w-10 aspect-square' alt="icon"/>
                            </div>
                            <h1>Skill Development</h1>
                        </div>
                        <div className='flex items-center gap-2 w-full border-b-[4px] px-2 pb-2 border-[#F2F2F2]'>
                            <div>
                                <Image src={"/ourprogram/resources.png"} width={50} height={50} className='w-10 aspect-square' alt="icon"/>
                            </div>
                            <h1>All</h1>
                        </div>
                    </div>

                    <div className='grid grid-cols-3 py-16 gap-4'>
                        <ProgramCard image={"/ourprogram/1.png"} title={"IT Support Specialist"} />
                        <ProgramCard image={"/ourprogram/2.png"} title={"Digital Marketing"} />
                        <ProgramCard image={"/ourprogram/3.png"} title={"Online Sales and Marketing"} />
                        <ProgramCard image={"/ourprogram/4.png"} title={"Social Media"} />
                        <ProgramCard image={"/ourprogram/5.png"} title={"Data Entry & Virtual Assistance"} />
                        <ProgramCard image={"/ourprogram/6.png"} title={"Online Web Posting"} />
                    </div>
                    
                </div>
    );
};

export default OurProgram;


const ProgramCard = ({image, title}:{image:string, title:string})=>{

    return <div className='bg-white rounded-lg p-4'>

    <div>
        <Image src={image} width={500} height={500} className='w-[380px] aspect-auto p-1' alt='image'/>
    </div>

    <div className='space-y-3'>
        <h1 className='text-lg font-semibold'>{title}</h1>

        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-1'>
                <IoStar className='text-[#5A0AC2]' />
                <IoStar className='text-[#5A0AC2]' />
                <IoStar className='text-[#5A0AC2]' />
                <IoStar className='text-[#5A0AC2]' />
                <IoStar className='text-[#5A0AC2]' />
                <p className='ml-1'>5.0</p>
                <p>(255)</p>
            </div>

            <div>
                <h1 className='text-lg font-semibold'>$300</h1>
            </div>
        </div>

        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2 text-[#F15B2D]'>
                <h1>More Info</h1>
                <IoInformationCircle />
            </div>

            <div>
                <button className='py-2 px-4 bg-[#F15B2D] rounded-lg text-white'>Enroll Now</button>
            </div>
        </div>
    </div>

    </div>
}