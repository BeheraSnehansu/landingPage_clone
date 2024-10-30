import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <div className='flex items-start justify-between mx-4 md:mx-8 lg:mx-10 py-2 md:py-4'>
            <Image src='/logo.svg' alt='logo' width={1000} height={1000} className='w-[24vw] md:w-[6rem] lg:w-[8rem] xl:w-[10rem]' />
            <ul className='hidden md:flex items-start justify-center gap-5 lg:gap-9 xl:gap-12'>
                <li className='font-bold text-[#FC822C] text-[0.8rem] lg:text-[1rem]'>Home</li>
                <li className='font-bold text-[0.8rem] lg:text-[1rem]'>About us</li>
                <li className='font-bold text-[0.8rem] lg:text-[1rem]'>Mentorship</li>
                <li className='font-bold text-[0.8rem] lg:text-[1rem]'>Blog</li>
                <li className='font-bold text-[0.8rem] lg:text-[1rem]'>Contact us</li>
            </ul>
            <div className='hidden md:flex items-start justify-center gap-7 lg:gap-14'>
                <button className='font-bold text-[0.8rem] lg:text-[1rem]'>Login</button>
                <button className='font-bold px-4 py-1 lg:py-2 text-[0.8rem] lg:text-[1rem] bg-[#FC822C] text-white mt-[-0.4rem] rounded-md'>Sign up</button>
            </div>
            <div className='flex md:hidden flex-col items-center justify-center gap-[0.3rem] w-6'>
                <div className='border-b-[0.15rem] border-[#491D5F] w-full'></div>
                <div className='border-b-[0.15rem] border-[#491D5F] w-full'></div>
                <div className='border-b-[0.15rem] border-[#491D5F] w-full'></div>
            </div>
        </div>
    )
}

export default Navbar
