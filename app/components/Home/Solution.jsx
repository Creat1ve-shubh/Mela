'use client';

import BentoDemo from '@/components/bento-demo';
import React from 'react';
import { Playfair_Display } from 'next/font/google';
import { motion } from 'framer-motion';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: '600',
  variable: '--font-playfair',
  display: 'swap',
});

const textVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.7,
      ease: 'easeOut',
    },
  }),
};

const Solution = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.h1
        className={`text-4xl text-center sm:text-5xl lg:text-6xl font-bold text-white mb-8 ${playfair.className}`}
        variants={textVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        custom={0}
      >
        <span className="underline decoration-wavy decoration-orange-500">
          Solution
        </span>
      </motion.h1>

      <motion.p
        className="text-center text-lg sm:text-xl text-gray-300 mb-12"
        variants={textVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        custom={1}
      >
        Mela is a powerful tool that simplifies the process of building and
        deploying AI applications.
      </motion.p>

      {/* 🍱 You can animate BentoDemo items internally */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <BentoDemo />
      </motion.div>
    </div>
  );
};

export default Solution;
