import React, { useState, useEffect } from 'react';
import Cursor from '../../components/ui/Cursor';
import TextShimmerEffect from '../../components/featured/TextShimmerEffect';


const Projects = () => {
    

    const [isActive, setIsActive] = useState(false);

    return (
    <section id="projects"
            className='w-full min-h-screen flex justify-center items-center relative pt-20'>
        <hr className='w-[60%] border-t-[1px] border-zinc-600 absolute top-20 left-80' />
        <Cursor isActive={isActive} />
        <article className="text-center text-[10rem] font-robotoCondensed font-[500] text-zinc-50 uppercase pt-16">
            <div>
                <span className=' text-petal-200 lowercase' 
                        style={{ fontSize: '10rem', fontWeight: '400' }}>
                        <TextShimmerEffect text='My'/>
                        </span>
                    <h2 className='mt-[-6rem]'>
                        <TextShimmerEffect text='portfolio'/>
                </h2>
            </div>
            <div className='mt-[-6.2rem] relative flex ml-32'>
                <span className=' text-petal-200 lowercase absolute -left-36' 
                    style={{ fontSize: '10rem', fontWeight: '400' }}>
                    <TextShimmerEffect text='of'/>
                </span>
                <span className='text-right ml-10'>
                    <TextShimmerEffect text='projects'/>
                </span>
            </div>
                <p className='mt-[-3rem]'>
                    <TextShimmerEffect text='(2)'/>
            </p>
        </article>
    </section>
    );
}

export default Projects;
