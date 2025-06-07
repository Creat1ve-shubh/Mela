'use client';

import React from 'react';
import { Raleway } from 'next/font/google';
import { Playfair_Display } from 'next/font/google';
import { motion } from 'framer-motion';
import HoverProblems from '../HoverProblems';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: '600',
  variable: '--font-playfair',
  display: 'swap'
});

const raleway = Raleway({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-raleway',
  display: 'swap'
});

const containerVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: 'easeOut'
    }
  }
};

const Problems = () => {
  return (
    <motion.div
      className="my-[10vh] py-[20vh] rounded-t-xl bg-black relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div
        className="mt-[10vh]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
      >
        <HoverProblems />
      </motion.div>
    </motion.div>
  );
};

export default Problems;
