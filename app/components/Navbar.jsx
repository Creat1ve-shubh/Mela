import { HoverCard } from '@/components/ui/hover-card'
import React from 'react'
import HoverCardDemo from './Hover'
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
            <nav className='space-x-4'>
                <a href="/" className='hover:text-gray-400'>Home</a>
                <a href="/About" className='hover:text-gray-400'>About</a>
                <a href="/Map" className='hover:text-gray-400'>Map</a>
            </nav>

        </div>
    )
}

export default Navbar
