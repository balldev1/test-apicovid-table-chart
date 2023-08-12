import React from 'react'
import { BsGithub } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className='w-full h-[60px] flex items-center justify-center  bg-gradient-to-b from-sky-600  to-sky-900  text-white'>
            <div className='  ml-5'>
                <div className='flex-cols gap-1'>
                    <div className='flex flex-row gap-1 items-center '>
                        <BsGithub size='20' />
                        <a className='text-sm' href='https://github.com/balldev1'>https://github.com/balldev1</a>
                    </div>
                    <h1 className='text-center' >THANK YOU FOR TEST </h1>
                </div>
            </div>
        </div>
    )
}

export default Footer
