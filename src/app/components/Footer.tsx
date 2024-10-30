import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='bg-[#EEECEC] px-2 sm:px-3 md:px-6 xl:px-8 py-5 sm:py-12 flex items-start justify-start gap-[3.2vw] sm:gap-5 md:gap-12 lg:gap-14 xl:gap-20'>
            <div className='flex flex-col items-start justify-start gap-3 sm:gap-6'>
                <Image src='/logo.png' alt='logo' width={500} height={500} className='w-[4rem] sm:w-[5rem] md:w-[7rem] lg:w-[10rem] ml-[0.5rem] sm:ml-[1rem] lg:ml-[2rem]' />
                <p className='text-[2vw] w-[35vw] leading-[3.5vw] sm:text-[0.7rem] sm:w-[12.4rem] md:text-[0.8rem] md:w-[14.4rem] lg:text-[1rem] lg:w-[18rem] xl:text-[1.2rem] sm:leading-[1.3rem] md:leading-[1.6rem] lg:leading-[2.5rem] xl:w-[22.6rem]'>A platform to all the necessary courses
                    to top up the tech companies, with real
                    world knowledge, so why wait?..Join us</p>
                <div className='flex items-center justify-start '>
                    <input className='py-1 px-2 text-[0.5rem] sm:text-[1rem] sm:py-2 sm:px-3 w-[4.2rem] sm:w-[7rem] md:w-[9rem] lg:w-[12rem] xl:w-[17rem]' type="text" placeholder='Your Email' />
                    <button className='py-1 px-2 text-[0.5rem] md:text-[1rem] sm:py-2 sm:px-3 bg-[#784893] text-white'>Subscribe</button>
                </div>
            </div>
            <div className='flex items-start justify-start gap-[4vw] sm:gap-[2rem] md:gap-[3rem] lg:gap-[7rem] xl:gap-[15rem]'>
                <div className='flex flex-col items-start justify-start gap-4 sm:gap-7 md:gap-10 lg:gap-12'>
                    <p className='text-[2vw] sm:text-sm md:text-lg font-bold'>Company</p>
                    <p className='text-[2vw] sm:text-sm'>Home</p>
                    <p className='text-[2vw] sm:text-sm'>Programs</p>
                    <p className='text-[2vw] sm:text-sm'>About us</p>
                    <p className='text-[2vw] sm:text-sm'>Contact us</p>
                </div>

                <div className='flex flex-col items-start justify-start gap-4 sm:gap-7 md:gap-10 lg:gap-12'>
                    <p className='text-[2vw] sm:text-sm md:text-lg font-bold'>Contact</p>
                    <p className='text-[2vw] sm:text-sm'>business@VidyaInterna.com</p>
                    <p className='text-[2vw] sm:text-sm'>+8463756437</p>
                    <p className='text-[2vw] sm:text-sm'>unit 306,megamart lane,</p>
                    <p className='text-[2vw] sm:text-sm'>Bhopal, Madhya Pradesh</p>
                    <p className='text-[2vw] sm:text-sm underline underline-offset-4'>SEE ON MAP</p>
                </div>
                <div className='flex flex-col items-start justify-start gap-4 sm:gap-7 md:gap-10 lg:gap-12'>
                    <p className='text-[2vw] sm:text-sm md:text-lg font-bold'>Social media</p>
                    <p className='text-[2vw] sm:text-sm'>Facebook</p>
                    <p className='text-[2vw] sm:text-sm'>Twitter</p>
                    <p className='text-[2vw] sm:text-sm'>Instagram</p>
                    <p className='text-[2vw] sm:text-sm'>Youtube</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
