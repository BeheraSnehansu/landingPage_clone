import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <div className='bg-[#E5C8F5] min-h-screen flex items-center justify-center'>
            <div className='w-[90%] sm:w-[95%] lg:w-[85%] xl:w-[75%]  px-4 pt-36 lg:pt-14 bg-white mx-4 sm:mx-4 sm:my-10 lg:mx-8 lg:my-3 xl:my-5 flex flex-col lg:flex-row items-center justify-between gap-10'>

                <div className='flex flex-col items-center justify-start gap-4 lg:gap-6 xl:gap-8 w-[15rem] sm:w-[20rem] md:w-[18rem] lg:w-[20rem] xl:w-[25rem] mt-[-6rem] ml-[-1rem]'>
                    <h1 className='font-bold text-[2rem] sm:text-[3.5rem] sm:leading-[3rem] md:text-[3rem] lg:text-[3.5rem] xl:text-[4.5rem] leading-[2rem] md:leading-[4rem] text-center'>About us</h1>
                    <p className='text-gray-500 text-[0.8rem] sm:text-[1.1rem] md:text-[1rem] lg:text-[1rem] xl:text-[1.3rem] font-medium  text-center leading-[1rem] sm:leading-[1.6rem]'>At VidyaInterna, we are dedicated
                        empowering tech professionals.</p>
                    <button className='hidden lg:block px-6 py-3 bg-[#6D54F7] text-white font-medium'>More info</button>
                </div>


                <div className='lg:mt-9 lg:mr-[0.8rem] mb-4 relative'>


                    <div className='about_img_bg_grad rounded-full px-[8rem] py-[8rem] sm:px-[14rem] sm:py-[14rem] lg:px-[13rem] lg:py-[13rem] xl:px-[16rem] xl:py-[15.2rem] relative top-[-0.1rem]'></div>
                    <img src="/about-section-img.svg" alt="about" className='hidden lg:block w-[20rem] lg:w-[30rem] xl:w-[33rem] top-[22rem] sm:top-[0.3rem] right-[-0.1rem] absolute' />
                    <img src="/about-section-img2.png" alt="about" className=' lg:hidden w-[30rem] top-[0.5rem] right-[-0.1rem] sm:top-[0.5rem] sm:right-[-0.1rem] absolute' />
                    <div>
                        <Image src='/chat1.svg' alt='chat1' width={50} height={50} className='w-[9rem] sm:w-[13rem] lg:w-[15rem] xl:w-[23rem] absolute top-[1rem] right-[7rem] sm:right-[14rem] lg:top-[2rem] lg:right-[13rem] xl:right-[15rem]' />
                        <div className='absolute top-[1.5rem] right-[11rem] sm:top-[1.8rem] sm:right-[20rem] lg:top-[3rem] xl:top-[3.5rem] lg:right-[20.7rem] xl:right-[28rem]'>
                            <div className='w-[4rem] sm:w-[6rem] xl:w-[8rem] border-b-[0.15rem] border-white mb-1 lg:mb-2 xl:mb-3'></div>
                            <div className='w-[2rem] sm:w-[3rem] xl:w-[4rem] border-b-[0.15rem] border-white'></div>
                        </div>

                    </div>


                    <div>
                        <Image src='/chat2.png' alt='chat2' width={1000} height={1000} className='w-[3rem] sm:w-[6rem] lg:w-[7rem] absolute top-[-0.5rem] right-[-0.2rem] lg:top-[-3rem] lg:right-[1rem]' />
                        <div className='absolute top-[-0.2rem] right-[0.4rem] sm:top-[0.5rem] sm:right-[2rem] lg:top-[-1.5rem] lg:right-[4rem] flex gap-1 items-center justify-center'>
                            <div className='rounded-full p-1 bg-white'></div>
                            <div className='rounded-full p-1 bg-white'></div>
                            <div className='rounded-full p-1 bg-white'></div>
                        </div>

                    </div>


                    <div className='absolute top-[3.5rem] xl:top-[5rem] right-[5rem] flex gap-1 items-center justify-center'>
                        <div className='rounded-full p-1 bg-[#F65600]'></div>
                        <div className='rounded-full p-1 bg-[#6D54F7]'></div>
                    </div>


                    <div className='w-full flex items-center justify-center'>
                        <button className='lg:hidden px-4 py-2 sm:px-6 sm:py-3 bg-[#6D54F7] text-white font-medium mb-4'>More info</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About
