import React, { useState } from 'react'
import Cursor from '../components/ui/Cursor'
import { Link } from 'react-scroll';

const Menu = ({ isOpen, onClose }) => {

    const [isActive, setIsActive] = useState(false);

    const handleClose = () => {
        onClose();
    }

    if (!isOpen) return null;

    return (
        <section data-cursor-color='#34d399' id="menu"
            className='w-full h-screen bg-orange-300 absolute top-0 left-0 z-50'>
            <Cursor isActive={isActive} />
            <button
                onMouseEnter={() => setIsActive(true)}
                onMouseLeave={() => setIsActive(false)}
                onClick={handleClose}
                className={`absolute left-[106rem] top-16 z-10 `}
            >
                <span 
                    className='text-zinc-900 fontTitle text-xl font-[500] uppercase tracking-wide pl-20 nav-link'>
                    [ close ]
                </span>
            </button>
            <article className='w-full flex flex-col justify-center items-center pt-6'>
                <ul className='w-full flex flex-col justify-center items-center text-[12rem] text-zinc-950 
                    leading-[180px]'>                   
                    {['home', 'about', 'projects', 'resume', 'contact'].map((item, index) => (
                        <li className='
                            px-2 uppercase tracking-wide nav-link' key={index}
                            onMouseOver={() => { setIsActive(true) }} onMouseLeave={() => { setIsActive(false) }}>
                            <Link to={item}>
                                {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
                            </Link>
                        </li>
                    ))}
                </ul>
            </article>
            
        </section>
    )
}

export default Menu;
