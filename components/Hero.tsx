import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import Image from 'next/image'
// primary section you see when first visit the page
const Hero = () => {
    return (
        <div className='pb-20 pt-36'>
            <div>
                <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
                <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
                <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
            </div>


            <div className="absolute top-0 left-0 opacity-0 bg-grid bg-center bg-cover h-screen w-full ">hello</div>

            <div className="flex justify-center relative my-20 z-10">
                <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                    <Image src="/user.png" alt='user' width={150} height={150} className='rounded-full my-3' />
                    <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>Majestic And Great Tutor🚰</h2>
                    <TextGenerateEffect
                        className='text-center text-[40px] md:text-5xl lg:text-8xl'
                        words='Following the Foot steps of FeynMan, But in Cs'
                    />
                    <p className="text-center md:tracking-wider mt-2 mb-4 text-sm md:text-lg lg:text-2xl">{" Hi I'm Gita, A developer"}</p>
                </div>
            </div>

        </div>

    )
}
// primary section you see when first visit the page
export default Hero
