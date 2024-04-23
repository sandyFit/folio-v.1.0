import React, { useState } from 'react'
import { HiArrowUpRight } from 'react-icons/hi2';
import { Link } from 'react-scroll';
import Cursor from '../components/ui/Cursor';
import { AiOutlineCopyright } from "react-icons/ai";



const TextNav = () => {

    const [isActive, setIsActive] = useState(false);
    const date = new Date();

    return (
        <section 
            className='w-full h-[60px] absolute top-0 z-20 flex justify-between pt-4 px-8'>
            <Cursor isActive={isActive} />
            
            <div className="flex text-4xl text-zinc-50 uppercase font-robotoCondensed font-[100]">
                <div className="flex mr-3">
                        <AiOutlineCopyright className='text-3xl mt-1'/>
                        {date.getFullYear()} 
                    </div>
                <div className="flex ">
                    <span className='h-20 font-[100]'>trish ramos</span>
                </div>
            </div>

            <div className="flex w-[23%] ">
                <div className="flex w-full">
                    

                    <div className='flex w-full '>           
                        <ul className='w-full flex flex-col justify-between items-end'>
                            {['projects', 'about', 'contact'].map((item, index) => (
                                <li className='fontTitle text-petal-200
                                    uppercase tracking-wide hover:text-zinc-400' key={index}
                                    onMouseOver={() => { setIsActive(true) }} onMouseLeave={() => { setIsActive(false) }}>
                                    <Link to={item}>
                                        {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>  
            </div>

            {/* <div className="flex flex-col text-3xl fontTitle text-zinc-500">
                    <div className="flex">
                        <AiOutlineCopyright className='text-3xl mt-[2px]'/>
                        {date.getFullYear()} 
                    </div>                   
                </div> */}
            
           
        </section>
    )
}

export default TextNav