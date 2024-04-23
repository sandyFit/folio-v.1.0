import React from 'react'

const TextInMotion = ({icon, text1, text2, text3, text4, text5, text6, text7}) => {
    
    const repetitions = Array(6).fill(null);

  return (
      <div className="w-full h-full z-10 flex items-center bg-zinc-300 py-1 border-t-[3px] border-b-[3px]
            border-dotted border-zinc-900"
            style={{ overflow: 'hidden'}}>
            <h2 className=' motion-text font-ibm text-[4rem] font-[500] tracking-wider uppercase'>
                <div style={{ display: 'flex', whiteSpace: 'nowrap' }}>
                    {repetitions.map((_, index) => (
                        <React.Fragment key={index}>
                            <span className='mx-20 text-zinc-500 text-[2.8rem] mt-7'>
                                {icon}
                            </span>
                            <span className='text-zinc-900' >{text1}</span>
                            <span className='mx-20 text-zinc-500  text-[2.8rem] mt-7'>
                                {icon}
                            </span>
                            <span className='text-zinc-900' >{text2}</span>
                            <span className='mx-20 text-zinc-500  text-[2.8rem] mt-7'>
                                {icon}
                            </span>
                            <span className='text-zinc-900' >{text3}</span>
                            <span className='mx-20 text-zinc-500  text-[2.8rem] mt-7'>
                                {icon}
                            </span>
                            <span className='text-zinc-900' >{text4}</span>
                            <span className='mx-20 text-zinc-500  text-[2.8rem] mt-7'>
                                {icon}
                            </span>
                            <span className='text-zinc-900' >{text5}</span>
                            <span className='mx-20 text-zinc-500  text-[2.8rem] mt-7'>
                                {icon}
                            </span>
                            <span className='text-zinc-900' >{text6}</span>
                            <span className='mx-20 text-zinc-500  text-[2.8rem] mt-7'>
                                {icon}
                            </span>
                            <span className='text-zinc-900' >{text7}</span>

                        </React.Fragment>
                    ))}
                </div>
            </h2>
    </div>
  )
    
}

export default TextInMotion;
