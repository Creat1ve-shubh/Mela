"use client";
import React from 'react';
import { Playfair_Display } from 'next/font/google';
import { Raleway } from 'next/font/google';
import { motion } from 'framer-motion';

const raleway = Raleway({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-raleway',
  display: 'swap'
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: '600',
  variable: '--font-playfair',
  display: 'swap'
});

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

const Hero = () => {
  return (
    <div className="min-h-screen overflow-hidden relative mx-[5vh] mt-[10vh] rounded-xl text-white flex items-end justify-start px-[10vh] pb-[10vh]">

      {/* Background Image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 0.7, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url('/fair.png')` }}
      />

      {/* Animated Text Block */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-10"
      >
        <motion.div variants={itemVariants} className="flex gap-3 items-baseline flex-wrap">
          <span className={`${raleway.className} text-5xl font-light tracking-wide`}>
            Welcome to
          </span>
          <span className={`${playfair.className} text-6xl sm:text-7xl font-semibold text-white`}>
            Mela
          </span>
        </motion.div>

        <motion.p variants={itemVariants} className="mt-4 text-xl sm:text-2xl text-white max-w-2xl">
          <span className={`${raleway.className} font-light tracking-wide`}>
            Your ultimate guide to navigating fairs with ease and excitement!
          </span>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Hero;
