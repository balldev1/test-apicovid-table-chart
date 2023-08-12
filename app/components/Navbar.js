'use client'
import React from 'react'
import { IoIosContact } from 'react-icons/io';
import { BiHelpCircle } from 'react-icons/bi';
import { BsVirus } from 'react-icons/bs';



const Navbar = () => {
    return (
        <div className='w-full h-[50px] flex items-center justify-between  bg-gradient-to-b from-sky-600  to-sky-900  text-white'>
            <div className='  ml-5'>
                <div className='flex gap-1'>
                    <BsVirus size='20' />
                    <a href='http://localhost:3000/'>COVIS WORLD</a>
                </div>
            </div>
            <div className='text-sm mr-5 flex gap-5'>
                <div className='flex gap-1'>
                    <BiHelpCircle size='20' />
                    <a href='http://localhost:3000/'>HELP</a>
                </div>
                <div className='flex gap-1'>
                    <IoIosContact size='20' />
                    <a href='http://localhost:3000/'>CONTACT</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
