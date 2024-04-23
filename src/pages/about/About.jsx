import React, { useState, useEffect } from 'react'
import gsap from 'gsap';
import TextShimmerEffect from '../../components/featured/TextShimmerEffect';
import MotionText from '../../components/ui/MotionText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {

    useEffect(() => {
        // Initialize your animation inside useEffect
        gsap.fromTo(".scroll-content", {
        opacity: 0.5,  // Start with hidden content for the effect
        }, {
        opacity: 1,  // End at full visibility
        duration: 1,  // Duration of the fade effect
        scrollTrigger: {
            trigger: ".scroll-content",
            start: "top bottom-=200", 
            end: "bottom top",
            scrub: true,
        }
        });
    }, []);

    useEffect(() => {
        gsap.to(".animated-side", {
        y: 0, // Ending Y position (original position)
        opacity: 1,
        ease: "none",
        scrollTrigger: {
            trigger: ".animated-side",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
        }
        });
    }, []);


    return (
        <section id="about"
            className='w-full min-h-screen relative bg-zinc-900 py-40 '>           
            {/* <hr className='w-[60%] border-t-[1px] border-zinc-600 absolute top-56 left-80' /> */}
            <div className="flex w-full">
                <MotionText
                    text1={'About Me'}
                    // text2={'About Me'}
                />
            </div>
            {/* <hr className='w-[60%] border-t-[1px] border-zinc-600 absolute top-40 left-80' /> */}
            
            <div className="parent-container flex justify-center items-end mt-52 mx-32  relative">
                <div className='about-text-mayus sticky-side'>
                    <TextShimmerEffect
                        triggerOnScroll={true}
                        text='graphic'/>
                    <TextShimmerEffect
                        triggerOnScroll={true}
                        text='designer'/>
                    <span className='text-petal-200 text-[5.8rem] font-[400] lowercase absolute'>
                        <TextShimmerEffect
                            triggerOnScroll={true}
                            text='and'/>
                    </span>
                    <span >
                        <TextShimmerEffect
                            triggerOnScroll={true}
                            text='self-' style={ {marginLeft: '12rem'}} />
                    </span><br />
                    <span className=''>
                        <TextShimmerEffect
                            triggerOnScroll={true}
                            text='taught' style={ {marginTop: '-5.5rem'}} />
                        <TextShimmerEffect
                            triggerOnScroll={true}
                            text='frontend' />
                        <TextShimmerEffect
                            triggerOnScroll={true}
                            text='developer' />
                        
                    </span> 

                </div>
                <div className="animated-side scroll-content flex flex-col justify-start items-end pl-52">
                    <h3 className='title-small'>
                        <TextShimmerEffect text='Design + Technology = ∞'/>
                    </h3>
                    <p className='text-small-min'>
                        Hello, I'm Trish, 
                        a graphic designer who turned her enthusiast for all things digital into a full-blown
                        love affair with web development.
                        <br/><br/>
                        Self-taught and always curious, I've honed my skills to specialize in the art of frontend
                        wizardry.
                        <br /><br />
                        Today, as a creative frontend developer, I focus on crafting fluid animations, engaging transitions,
                        and complex layouts that transform user experiences from meh to mesmerizing.
                        <br/><br/>
                        When I'm not coding up a storm, I'm ussually exploring the dynamic worlds of kinetic
                        typography, diving into motion graphics, or tinkering with the unpredictable art of generative
                        design.
                        <br /><br />
                        Off-duty, you might catch me pumping iron at the nearest gym, scribbling doodles
                        on every scrap of paper, or ruling the kitchen as the supreme queen of baking yum yums 🧁.
                        

                    </p>
                    <div className="text-small-min mt-6 relative">
                        I've been a freelance designer since 2019, now seeking full-time roles or project collaborations that
                        challenge my coding and design skills. I'm passionate about merging aesthetics with functionality
                        in my work. For inquiries or opportunities, contact me at 
                        <span className='text-zinc-50 ml-1'>info@trishramos.com</span>.                     
                    </div>
                </div>
            </div>

            
        </section>
    )
}

export default About;
