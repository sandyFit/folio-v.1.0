import React, { useEffect } from 'react';
import Hero from './Hero';
import Contact from '../contact/Contact';
import About from '../about/About';
import Projects from '../projects/Projects';
import Test2 from './Test2';
import Test from './Test';


const Home = () => {
    
    return (
        <div className='w-full'>
            <section id='index'>
                <Hero/>
            </section>

            <section id='relative projects'>
                <Projects />
            </section>
            <section id='about-me'>
                <About />
            </section>
            <section id='contact' className='relative'>
                <Contact/>
            </section>
        </div>
    );
};

export default Home;
