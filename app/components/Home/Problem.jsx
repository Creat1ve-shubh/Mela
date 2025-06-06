"use client"
import React from 'react'
import Painpoints from '../Painpoints';
import { Raleway } from 'next/font/google';

const raleway = Raleway({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-raleway',
  display: 'swap'
});

const Problems = () => {
  return (
    <div className='px-[10vh] my-[10vh] py-[20vh]'>
      <h1 className='text-white text-center text-5xl'><span className={raleway.className}>Navigating a fair is HARD!</span></h1>
      <div className='mt-[10vh]'>
     <Painpoints />
     </div>
     <p className='text-center text-4xl  text-white my-[10vh]'>
      <span className={raleway.className}>How Stressful! surely theres a better way and we just have it</span> </p>
    </div>
  )
}

export default Problems;
