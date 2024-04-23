import React, { useEffect, useState } from 'react';
import Cursor from '../../components/ui/Cursor';
import { HiArrowDownLeft } from 'react-icons/hi2';
import MotionText2 from '../../components/ui/MotionText2';

const WhaIDo = () => {
    
    return (
        <section data-cursor-color='#f9a8d4' id="contact"
            className='w-full h-[calc(100vh-60px)] bg-zinc-900 relative'>
            {/* <hr className='w-[84%] border-t-[1px] border-skyIce-900 absolute left-36 top-16'/> */}

                <MotionText2
                    text1={'what i do'}
                />
            <div className="flex flex-col text-zinc-50 gap-7 items-start ml-36 mt-24 pb-12">

                <div className='w-[80%] about-text-mayus leading-[75px] relative'>
                    i thrive
                    <span className='text-skyIce-300 font-playfair italic lowercase absolute bottom-[5.5rem] left-96'>
                        on
                    </span>
                    <span className='ml-28'> crafting <br /> pixel-perfect websites  </span><br />
    

                </div>
                <p className='array-text-light text-sm w-[50%] ml-[30rem] mt-4'>
                    I focus on creating fluid animations, engaging transitions, and tackling complex
                    layouts to enhance user experiences.
                </p>
                <div className="text-xl text-skyIce-900 font-[600] ml-[30rem] relative">
                        My Toolkit:
                        <ul className='array-text-light text-xl font-[100] mt-2'>
                            <li>HTML / CSS / JAVASCRIPT / TYPESCRIPT</li>
                            <li>REACT.JS / GSAP / WEBGL / SASS / THREE.JS</li>
                            <li>NODE.JS / EXPRESS / NEXT.JS / MYSQL / SUPABASE</li>
                            <li>PHOTOSHOP / ILLUSTRATOR / AFTER EFFECTS / FIGMA</li>
                            <li>WEBFLOW / AWS / PRISMIC.IO / DATOCMS / STORYBOOK</li>
                        </ul>
                                             
                    </div>
            </div>
             <div className="relative">
                <HiArrowDownLeft className='text-[8rem] text-pink-50 absolute bottom-6 left-36'/>
            </div>  

            <hr className='w-[80%] border-t-[1px] border-skyIce-900 absolute left-36'/>
            
        </section>
    )
}

export default WhaIDo;
