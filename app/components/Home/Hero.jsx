import React from 'react'
import { Montserrat } from 'next/font/google';
import { Playfair_Display } from 'next/font/google';
import { Raleway } from 'next/font/google';
const raleway = Raleway({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-raleway',
  display: 'swap'
});
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '300',
  variable: '--font-montserrat',
  display: 'swap'
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: '600',
  variable: '--font-playfair',
  display: 'swap'
});

const Hero = () => {
  return (
    <div className="min-h-screen bg-gray-900 mx-[5vh] mt-[10vh] rounded-lg text-white flex items-end justify-start px-[10vh] pb-[10vh]">
      <h1 className="space-x-4">
        <span className={`${raleway.className} text-5xl font-light tracking-wide`}>
          Welcome to
        </span>
        <span className={`${playfair.className} text-7xl font-semibold text-white`}>
          Mela
        </span>
      </h1>
    </div>
  );
};

export default Hero;
