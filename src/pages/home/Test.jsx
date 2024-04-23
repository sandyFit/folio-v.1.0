import React, { useState, useEffect } from 'react';
import { HiArrowDownLeft, HiArrowDownRight } from "react-icons/hi2";
import Cursor from '../../components/ui/Cursor';
import { Link } from 'react-scroll';
import gsap from 'gsap';
import { BsAsterisk } from 'react-icons/bs';
import TextShimmerHero from '../../components/featured/TextShimmerHero';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Transition from '../transitions/Transition';
import Transition2 from '../transitions/Transition2';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';

const Test = () => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const tl = gsap.timeline({
            defaults: {
                ease: "power3.out",
                duration: 1, // slightly faster
                delay: 2
            }
        });

            tl.fromTo('.small-title',
                { opacity: 0 },
                {opacity: 1, stagger: 0.5}
            
        )

        return () => tl.kill();
    }, []);
    
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline();

        tl.to('.overlay-first', { duration: 1, left: '-100%', ease: "power3.inOut" })
          .to('.overlay-second', { duration: 1, left: '-100%', ease: "power3.inOut", immediateRender: false }, "-=0.8");
    }, []);

    const date = new Date();

    return (
        <section data-cursor-color='#f9a8d4' id="index"
            className='w-full min-h-screen flex flex-col items-center bg-zinc-900 relative'>
            <Transition />
            <Transition2/>
            <Cursor isActive={isActive} />
            <article className="w-[99%] flex flex-col  text-[10rem] fontTitle font-[500] 
                text-zinc-50 leading-[160px] uppercase tracking-tighter relative ">
                <div className="flex justify-between">
                    <div className="flex ">
                        <AiOutlineCopyrightCircle className='text-[8rem] mt-2'/>
                        {new Date().getFullYear().toString().slice(-2)} 
                    </div>
                    <span className='text-right ml-8'>trish ramos</span>
                </div>

                <hr className='w-full border-t-[1px] border-zinc-600 absolute top-40 ' />
                
                <hr className='w-full border-t-[1px] border-zinc-600 absolute top-80 ' />
                <h1 className='flex justify-start text-petal-200'>frontend</h1>  
                <hr className='w-full border-t-[1px] border-zinc-600 absolute top-[30rem] ' />
                <span className='text-right '>developer</span>
                {/* <hr className='w-full border-t-[1px] border-zinc-600 absolute top-[40rem] ' /> */}
                
                 <img src="/me-bn.png" alt="" width={340} className='absolute top-[20rem] left-32'/>
                
                
            </article> 
            <div className="flex">

               <span className='flex w-[30%] small-text uppercase text-zinc-50 mt-20 ml-[40rem]'>
                    Hello, I'm Trish a creative frontend developer based in Colombia. Open to full-time Roles &
                    projects collabs.
                </span>

                
            </div>
            <div className="flex relative">                      
                <Link to='about'
                    onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}> 
                    <HiArrowDownRight className='text-[10rem] text-petal-200 mb-2 absolute -top-20 left-[37rem]'/> 
                </Link>                
            </div>     

            {/* <div className="w-full flex justify-between items-center px-6">
                <p className=' text-left text-small '>
                    based in colombia
                </p>

                <div className=' text-small '>
                    say hello / 
                    <a href='mailto:info@trishramos.com'
                        onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}
                        className='custom-link'>
                        info@trishramos.com
                    </a>
                </div>

                
            </div> */}

            
            {/* <div className="flex relative">   
                   
                <Link to='about'
                    onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}> 
                    <HiArrowDownLeft className='text-[10rem] text-skyIce-300 mb-2 absolute -bottom-3 left-[2rem]'/> 

                </Link>
                
            </div> */}

            
            
        </section>
    )
}

export default Test;
