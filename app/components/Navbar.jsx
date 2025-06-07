import { HoverCard } from '@/components/ui/hover-card'
import React from 'react'
import HoverCardDemo from './HoverNav'
import { Gloock } from 'next/font/google'
const gloock = Gloock({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-gloock',
    display: 'swap'
})

const Navbar = () => {
    return (
        <div className='bg-black mx-20 p-4 text-white flex justify-between items-center'>
            <HoverCardDemo />
            <div className='text-3xl'>
            <span className={gloock.className}>
                Mela
            </span></div>
            <nav className='space-x-8'>
                <a href="/" className='inline-block hover:text-gray-400 hover:scale-125 duration-300 transition-all'>Home</a>
                <a href="/About" className='inline-block hover:text-gray-400 hover:scale-125 duration-300 transition-all'>About</a>
                <a href="/Map" className='inline-block hover:text-gray-400 hover:scale-125 duration-300 transition-all'>Map</a>
            </nav>

        </div>
    )
}

export default Navbar
