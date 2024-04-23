import React, { useState, useEffect, useRef } from 'react';
import { HiArrowDownLeft} from "react-icons/hi2";
import Cursor from '../../components/ui/Cursor';
import { Link } from 'react-scroll';
import gsap from 'gsap';
import { BsAsterisk } from 'react-icons/bs';
import TextShimmerHero from '../../components/featured/TextShimmerHero';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Transition from '../transitions/Transition';
import Transition2 from '../transitions/Transition2';
import { AiOutlineCopyright } from "react-icons/ai";

const Test = () => {
    const [isActive, setIsActive] = useState(false);
    const frontendRef = useRef(null);
    const developerRef = useRef(null);
    const date = new Date();

    
    useEffect(() => {
        const tl = gsap.timeline({
            defaults: {
                ease: "power3.out",
                duration: 1, // slightly faster
                delay: 3
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

        tl.to('.overlay-first', { duration: 1.2, left: '-100%', ease: "power3.inOut" })
          .to('.overlay-second', { duration: 1.2, left: '-100%', ease: "power3.inOut", immediateRender: false }, "-=0.8");
    }, []);




    return (
        <section id="index"
            className='w-full min-h-screen flex justify-center flex-col items-center bg-zinc-900 relative'>
            <Transition />
            <Transition2/>
            <Cursor isActive={isActive} />
            <article className="w-[99%] flex flex-col justify-center items-center text-zinc-50 uppercase pt-32 
                leading-[140px] tracking-tighter relative text-center text-[10rem] fontTitle font-[500] overflow-hidden">
                
                <p className=' text-right text-small absolute top-[13.2rem] left-[66.5rem] small-title'>
                    available <br/> for work
                </p>
                
                {/* <BsAsterisk className='text-6xl absolute top-72 right-[23rem] rotating-icon text-zinc-500' /> */}
                <p className=' text-right text-small absolute top-[21.8rem] left-[23rem] small-title'>
                    based in / <br/> colombia
                </p>
              
                <h1 className='mr-56 ' ref={frontendRef} >
                    <TextShimmerHero text='frontend'/> </h1>
                <span className=' text-petal-200 ml-56' ref={developerRef} >
                    <TextShimmerHero text='developer' /></span>
                <div className="flex flex-col">
                    <div className="flex ml-8 gap-10">
                        <span className=''><TextShimmerHero text='with'/> </span>
                        <span className='text-petal-200 lowercase font-[400] z-10'>
                            <TextShimmerHero text='an' /> 
                        </span>
                        <span className=''><TextShimmerHero text='eye'/> </span> <br/>
                    </div>

                    <span className='text-small text-base text-right absolute bottom-5 left-[25rem] small-title'>
                        folio <br/> / V.1.0
                    </span>
                    
                    <div className="flex ml-56 gap-10">
                        <span className=' text-petal-200
                            lowercase font-[400] z-10'>
                            <TextShimmerHero text='for' /> 
                        </span>
                        <span className=''><TextShimmerHero text='design'/></span>               
                    </div>
                </div>
            </article> 
            
            <div className="w-full flex justify-between pb-2 pr-8 mx-8">
                <div className="flex relative">                      
                    <Link to='about'
                        onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}> 
                        <HiArrowDownLeft className='text-[10rem] text-petal-200 mb-2 absolute -bottom-6'/> 
                    </Link>                
                </div>       
                
                <div className='text-left text-small'>
                
                <div className="flex flex-col text-3xl fontTitle text-zinc-50">
                    <div className="flex">
                        <AiOutlineCopyright className='text-3xl mt-[2px]'/>
                        {date.getFullYear()} 
                    </div>                   
                </div>
            </div>

            </div>
        </section>
    )
}

export default Test;

