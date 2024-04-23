
import React from 'react';


const MotionText = ({ icon, text1, text2, text3, className}) => {
  const repetitions = Array(6).fill(null);

  return (
      <div className="w-full  z-10 flex pt-3 "
            style={{ overflow: 'hidden'}}>
            <h2 className=' motion-text fontTitle text-8xl font-[500] uppercase'>
                <div style={{ display: 'flex', whiteSpace: 'nowrap' }}>
                    {repetitions.map((_, index) => (
                        <React.Fragment key={index}>
                            <span className=' text-zinc-50  mt-16'>
                                {icon}
                            </span>
                            <span className='text-zinc-50 mx-10' >{text1}</span>
                            <span className='text-skyIce-300' >{text2}</span>
                            
                        </React.Fragment>
                    ))}
                </div>
            </h2>
    </div>
  )
};

export default MotionText;

