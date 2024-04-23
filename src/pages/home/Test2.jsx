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
import { AiOutlineCopyrightCircle } from 'react-icons/ai';

const Test = () => {
    const [isActive, setIsActive] = useState(false);
    const frontendRef = useRef(null);
    const developerRef = useRef(null);
    const date = new Date();

    // useEffect(() => {
        
    //     if (typeof window !== "undefined" && !gsap.globalTimeline) {
    //         gsap.registerPlugin(ScrollTrigger);
    //     }

        
    //     gsap.fromTo(frontendRef.current, { x: '-100%', opacity: 0 }, 
    //     { x: '0%', opacity: 1, duration: 1,  delay: .8, ease: "power3.out" });
    //     gsap.fromTo(developerRef.current, { x: '100%', opacity: 0 }, 
    //     { x: '0%', opacity: 1, duration: 1, delay: .8,  ease: "power3.out" });

        
    //     const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });
    //     tl.fromTo('.small-title', { opacity: 0 }, { opacity: 1, delay: 2, stagger: 0.8 });
    // }, []);
    

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
            <article className="w-[99%] h-full flex flex-col justify-center items-center text-zinc-50 uppercase pt-52 
                leading-[140px] tracking-tighter relative text-start text-[8rem] fontTitle font-[500]">
                {/* <span className='text-small text-base text-right absolute  top-[17.5rem] right-[17rem]'>
                    folio <br/> / V.1.0
                </span>    */}
                <div className="flex flex-col justify-center items-center font-robotoCondensed leading-[120px] text-zinc-50 z-20">
                    <div className="flex">
                        <span className='ml-48'>
                            <TextShimmerHero text={'crtve developer'}/>
                        </span>
                        {/* <span className='text-petal-200 ml-6'>developer</span> */}
                    </div>
                    <div className="flex ml-[16.8rem]">
                        <span><TextShimmerHero text={'based'}/> </span>
                        <span className='italic lowercase ml-6 mr-4 text-petal-200'>
                            <TextShimmerHero text={'in'}/>
                        </span>
                        <span>
                             <TextShimmerHero text={'colombia,'}/>
                        </span>
                    </div>

                    <div className="flex absolute left-[11rem] bottom-64">
                        <button class="group relative rounded-full border border-neutral-200 bg-transparent px-4 
                        text-zinc-50 text-2xl w-[12.8rem] h-[12.8rem]"> SAY HI
                            
                            
                        </button>
                    </div>

                     

                    <div className="flex">
                        <span>
                             <TextShimmerHero text={'especializing'}/>
                        </span>
                        <span className='italic lowercase ml-6 mr-3 text-petal-200'>
                             <TextShimmerHero text={'in'}/>
                        </span>
                        <span>
                             <TextShimmerHero text={'the'}/>
                        </span>
                        <span className='italic lowercase ml-6  text-petal-200'>
                             <TextShimmerHero text={'art'}/>
                        </span>
                    </div>
                    <div className="flex ">
                        <span className='italic lowercase mr-8 text-petal-200'>of</span>
                        <span> <TextShimmerHero text={'frontend wizandry'}/></span> 
                    </div>
                </div>
                
            </article>
        </section>
    )
}

export default Test;
