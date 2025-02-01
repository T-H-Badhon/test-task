import HeroCards from '@/components/home/HeroCards';
import HeroSection from '@/components/home/HeroSection';
import WhatWeDo from '@/components/home/WhatWeDo';
import Navber from '@/components/navbar/Navber';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <Navber/>
      <HeroSection/>
      <HeroCards/>
      <WhatWeDo/>
    </div>
  );
};

export default HomePage;