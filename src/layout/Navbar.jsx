import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AiOutlineCopyright } from "react-icons/ai";
import Cursor from '../components/ui/Cursor';
import { Link } from 'react-scroll';

const Navbar = () => {
    const location = useLocation();
    const [isActive, setIsActive] = useState(false);
    const date = new Date();

    useEffect(() => {
        const path = location.pathname.replace('/', '');
        console.log("Current path:", path);
    }, [location]);

    return (
        <section 
            className='w-full h-[60px] absolute top-0 z-20 flex justify-between pt-4 px-8'>
            <Cursor isActive={isActive} />
            
            <div className="flex">
                <div className="flex text-3xl text-zinc-50 uppercase font-robotoCondensed font-[100]">
                    <span className='h-20 font-[100]'>trish ramos</span>
                </div>
            </div>

            <div className="flex w-[16%] ">
                <div className="flex w-full">
                    <div className='flex w-full '>           
                        <ul className='w-full flex justify-between items-center'>
                            {['projects', 'about', 'contact'].map((item, index) => (
                                <li className='font-robotoCondensed text-zinc-50 font-[100]
                                    uppercase tracking-wide hover:text-petal-100' key={index}
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

        
        </section>
    );
}

export default Navbar;
