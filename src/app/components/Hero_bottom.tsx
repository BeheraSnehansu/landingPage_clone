import Image from 'next/image'
import React from 'react'

const Hero_bottom = () => {

    const items = [
        {
            img1: "/icon2.png",
            numbers: "500+",
            text: "Internships Completed"
        },
        {
            img1: "/icon1.png",
            numbers: "30+",
            text: "Countries Visited"
        },
        {
            img1: "/icon3.png",
            numbers: "10+",
            text: "Specialised Programs"
        },
        {
            img1: "/icon4.png",
            numbers: "95+",
            text: "Intern Satisfaction rate"
        },
    ]

    return (
        <div className='bg-[#643B7C] w-full px-4 sm:px-10 md:px-16 lg:px-20 py-2 sm:py-4 lg:py-6 flex items-center justify-between '>
            {items.map((item, index) => (
                <div key={index} className='flex flex-col items-center justify-center gap-[0.05rem]'>
                    <Image src={item.img1} alt='icon1' width={2000} height={2000} className='w-[8vw] sm:w-[2.7rem] md:w-[3rem] lg:w-[4rem] xl:w-[5rem]' />
                    <p className='text-[2vw] sm:text-lg text-[#FC822C]' >{item.numbers}</p>
                    <p className='text-[1.7vw] sm:text-[0.7rem] lg:text-sm text-white'>{item.text}</p>
                </div>
            ))}

        </div>
    )
}

export default Hero_bottom
