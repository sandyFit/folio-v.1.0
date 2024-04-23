import React from 'react'

const AboutMotion = ({ text, children }) => {
    const length = text.length;
    const deg = 360 / length;

    return (
        <div className='relative w-[500px] h-[500px] rounded-full grid place-items-center text-4xl font-medium 
            z-50 bg-transparent'>
            {/* Background Circle */}
            <div className='absolute w-full h-full border-[50px] border-skyIce-200 rounded-full opacity-[yourDesiredOpacity]'></div>
            <div className='spinning-text'>
                <p className="text-lime-300 font-bold" style={{ height: '700px', position: 'relative' }}>
                    {text.split("").map((letter, i) => (
                        <span className='spining-text-big'
                        key={i}
                        style={{
                            transform: `rotate(${deg * i}deg)`,
                            position: 'absolute',
                            top: '0',
                            left: '50%',
                            transformOrigin: '0 250px'
                        }}
                        >
                        {letter}
                        </span>
                    ))}
                </p>
            </div>
            {children}
        </div>
    )
}

export default AboutMotion;
