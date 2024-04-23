import React from 'react';
import { useNavigate } from 'react-router-dom';

const ContactBtn = ({title}) => {

    const navigate = useNavigate();

    // Navigates to the contact page
    const handleNavigation = () => navigate('/contact');

    return (
        <a className='button relative' onClick={handleNavigation}>
            <div className="textContainer">
                <span className="text firstText">{ title }</span>
                <span className="text secondText">{ title }</span>
            </div>
            
            <span className="group inline-flex  items-center justify-center overflow-hidden rounded-full 
                absolute left-[28rem] top-0">
                <div className="translate-x-0 transition group-hover:translate-x-[300%]">
                    <svg width="25" height="25" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-40 w-40 text-zinc-900">
                        <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                        </path>
                    </svg>
                </div>
                <div className="absolute -translate-x-[300%] transition group-hover:translate-x-0">
                    <svg width="25" height="25" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-40 w-40 text-zinc-300">
                        <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                        </path>
                    </svg>
                </div>
            </span>
        </a>
    )
}

export default ContactBtn;
