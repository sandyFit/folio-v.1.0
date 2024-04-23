import React, { useState, useEffect } from 'react';
import { HiArrowDownLeft } from "react-icons/hi2";
import Cursor from '../../components/ui/Cursor';
import { Link } from 'react-scroll';
import gsap from 'gsap';
import { BsAsterisk } from 'react-icons/bs';
import TextShimmerHero from '../../components/featured/TextShimmerHero';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Transition from '../transitions/Transition';
import Transition2 from '../transitions/Transition2';

const Hero = () => {
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



    return (
        <section data-cursor-color='#f9a8d4' id="index"
            className='w-full min-h-screen bg-zinc-900 relative'>
            <Transition />
            <Transition2/>
            <Cursor isActive={isActive} />
            <article className="w-[99%] flex flex-col text-[10rem] fontTitle font-[500] text-zinc-50 leading-[130px]
                uppercase pt-52 pl-12 tracking-tighter relative justify-start">
                
                <BsAsterisk className='absolute text-zinc-500 rotating-icon text-5xl bottom-[12.8rem] left-[75.3rem]' />
                <p className='w-[9.1%] text-left text-small absolute bottom-[17rem] left-[68.8rem] small-title'>
                    based in colombia
                </p>
                <div className="flex flex-col">

                    <h1 className='w-full text-[10rem] fontTitle font-[500] text-zinc-50'>
                        <TextShimmerHero text='frontend '/> </h1>
                    <span className='ml-48 text-petal-200'><TextShimmerHero text='developer' /></span>
                </div>
                <div className="flex">
                    <span className='ml-[20rem] '><TextShimmerHero text='with '/> </span>
                    <span className=' text-petal-200 italic lowercase font-[100] z-10 mr-12'>
                        <TextShimmerHero text='an' />
                    </span>
                    <span className=' '><TextShimmerHero text='eye'/> </span>
                </div>
                <div className="flex">
                    <span className=' ml-[31rem] text-petal-200 italic lowercase'><TextShimmerHero text='for '/></span>   
                    <span className=' '><TextShimmerHero text=' design_'/></span>   
                </div>
                                
            </article>

            <div className='text-left text-small absolute bottom-[22.5rem] left-[3.8rem] '>
                say hello / <br />
                <a href='mailto:info@trishramos.com'
                    onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}
                    className='custom-link'>
                    info@trishramos.com
                </a>
            </div>

            <div className="flex relative">   
                   
                <Link to='about'
                    onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}> 
                    <HiArrowDownLeft className='text-[10rem] text-petal-200 mb-2 absolute -bottom-3 left-[2rem]'/> 

                </Link>
                
            </div>

            <span className='text-center text-small text-base absolute left-[31rem] bottom-[1.4rem] '>
                folio<br/> / V.1.0
            </span>
            
        </section>
    )
}

export default Hero;
