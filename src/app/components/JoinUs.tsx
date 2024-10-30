import Image from 'next/image'
import React from 'react'

const JoinUs = () => {
    return (
        <div className='max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-3 py-8 md:py-12 lg:py-8 px-6 lg:px-8 xl:px-0'>
            <div className='flex flex-col items-center justify-center gap-5 md:gap-12 lg:gap-10'>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <p className='font-bold text-[2rem] md:text-[4rem] lg:text-[2.6rem] xl:text-[3rem]'>Join us</p>
                    <h2 className='font-extrabold text-[2.2rem] md:text-[4rem] lg:text-[3rem] xl:text-[5rem] leading-[2rem] lg:leading-[2.5rem] xl:leading-[5rem]'>Today!!</h2>
                </div>
                <p className='text-[1rem] md:text-[1.5rem] lg:text-[1.7rem] lg:w-[28rem] xl:text-[1.8rem] w-[18rem] md:w-[25rem] xl:w-[30rem] font-normal text-center'>&quot;Join our mentorship program today and start building of the career.</p>
                <button className='hidden lg:block font-bold text-white bg-gradient-to-r from-[#9F4BD5] to-[#E46CDC] px-12 py-2 rounded-3xl'>Join</button>
            </div>
            <Image src='/joinUs.png' alt='joinUs' width={1000} height={1000} className='w-[46rem] md:w-[40rem] lg:w-[33rem] xl:w-[46rem] mb-8  mt-0 md:mt-6 lg:mt-0' />
            <button className='lg:hidden font-bold text-white bg-gradient-to-r from-[#9F4BD5] to-[#E46CDC] px-12 py-2 rounded-3xl'>Join</button>
        </div>
    )
}

export default JoinUs
