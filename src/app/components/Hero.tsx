import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div className='mx-9 md:mx-12 my-5 flex flex-col lg:flex-row items-center justify-between gap-1 md:gap-4 lg:gap-8'>
            <div className='flex flex-col items-center lg:items-start justify-center gap-3 md:gap-5'>
                <h1 className='font-bold text-[7.7vw] leading-[4vw] md:text-[4rem] lg:text-[2.5rem] xl:text-[4rem] text-[#491D5F] md:leading-[6rem] lg:leading-[3rem] xl:leading-[5rem]'>Empowering <span className='text-[#9A69B8] font-semibold leading-[3vw] md:leading-[3rem]'>the tech</span></h1>

                <p className='text-[#D46D25] font-semibold text-[7vw] leading-[7vw] md:text-[3.5rem] lg:text-[2.1rem] xl:text-[3.4rem] md:leading-[3rem] lg:leading-[2rem] xl:leading-[3rem]'>Innovators_</p>


                <p className='text-[#491D5F] text-[3.08vw] md:text-[1.6rem] lg:text-[1rem] xl:text-[1.6rem] font-medium'>”learn grow and innovate with the guidance of experts"</p>


                <p className='text-[#9A69B8] text-[2.4vw] w-[77vw] md:text-[1.25rem] md:w-[40rem] lg:text-[0.8rem] xl:text-[1.24rem] lg:w-[27rem] xl:w-[40rem] font-medium'>A mission to bridge the gap between academia by providing hands-on
                    experience,industry-relevant  skills, professional mentorship with us!!!</p>


                <div className='hidden lg:flex flex-col items-start justify-center gap-5'>
                    <button className=' text-white bg-[#491D5F] px-24 xl:px-44 py-2 xl:py-3 rounded-3xl font-bold'>Get Started</button>
                    <div className='flex justify-start items-center '>
                        <input type='email' placeholder='enter your mail' className='px-1 xl:px-16 py-2 xl:py-3 rounded-l-3xl ring-1 ring-[#491D5F]'></input>
                        <button className='px-4 xl:py-3 py-2 xl:px-9 rounded-r-3xl ring-1 ring-[#491D5F] bg-[#491D5F] text-white font-bold'>Sign up</button>
                    </div>
                </div>


            </div>



            <div className='flex flex-col items-center justify-center gap-2'>
                <Image src="/heroSectionImg.svg" alt='hero_img' width={1000} height={1000} className='w-[70vw] lg:w-[43rem]' />
                <div className='flex lg:hidden flex-col items-start justify-center gap-3 w-[33vw]'>
                    <button className='text-[1.5vw] md:text-[2vw] text-white bg-[#491D5F] py-[1.8vw] px-[12vw] md:px-[2vw] md:py-[1.2vw]  rounded-3xl font-semibold w-full'>Get Started</button>
                    <div className='flex justify-start items-center w-full'>
                        <input type='email' placeholder='enter your mail' className='text-[1.8vw] md:text-[1.8vw] w-auto  px-[1vw] md:w-auto py-[1.5vw] md:px-[1vw] md:py-[1.2vw]  rounded-l-3xl ring-1 ring-[#491D5F]'></input>
                        <button className='text-[1.9vw] md:text-[1.8vw] px-[1.6vw] py-[1.5vw] md:px-[2vw] md:py-[1.2vw] rounded-r-3xl ring-1 ring-[#491D5F] bg-[#491D5F] text-white font-bold'>Sign up</button>
                    </div>
                </div>
            </div>





        </div>
    )
}

export default Hero
