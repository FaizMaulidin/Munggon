import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'

const KegWrapper = ({refs, res}) => {
    
    return (
        <div ref={refs} className="flex gap-6 items-center h-fit transition-all duration-100 opacity-20 scroll-ml-4">
            <div className=' bg-lightgray2 font-light rounded-2xl w-[20rem] h-[17rem] self-start flex shadow-kegwrap flex-col p-6 gap-8'>
                <div className='flex items-center'>
                    <div className='before:content-[""] before:absolute before:h-3 before:bg-gray2 before:w-3 before:rounded-full before:top-[1px] before:left-0 before:-translate-y-1/2 w-10 h-[2px] relative flex-grow pl-[0.95rem] pr-[0.20rem]'>
                        <div className='bg-gray2 w-full h-full'></div>
                    </div>
                    <div className='before:content-[""] before:absolute before:h-3 before:bg-[hsl(0,0%,70%)] before:w-3 before:rounded-full before:top-[1px] before:left-0 before:-translate-y-1/2 pl-[0.95rem] pr-[0.20rem] w-10 h-[2px] relative flex-grow'>
                        <div className='bg-gray2 w-full h-full'></div>
                    </div>
                    <div className='before:content-[""] before:absolute before:h-3 before:bg-gray2 before:w-3 before:rounded-full before:top-[1px] before:left-0 before:-translate-y-1/2 pl-[0.95rem] pr-[0.20rem] w-10 h-[2px] relative flex-grow'>
                        <div className='bg-gray2 w-full h-full'></div>
                    </div>
                    <div className=' bg-darkerblue rounded-full p-2'>
                        <p className=' text-[0.8rem] tracking-wide leading-5 text-lightgray2 text-center w-36'>{res.schedule}</p>
                    </div>
                </div>
                <div className='flex flex-col gap-1 text-darkgray2'>
                    <h1 className=' text-3xl font-normal'>{res.name}</h1>
                    <p className=' text-[0.95rem] leading-5 text-gray'>{res.desc}</p>
                </div>
            </div>
            <div style={{backgroundImage: 'url('+res.image.portrait+')'}} className=' bg-neutral-700 rounded-2xl w-[17rem] h-[23rem] shadow-kegwrap bg-cover bg-center overflow-hidden'> <div className=' w-full h-full shadow-kegimage'></div></div>
            <div style={{backgroundImage: 'url('+res.image.landscape+')'}} className=' bg-neutral-700 rounded-2xl w-[22rem] h-[21rem] shadow-kegwrap bg-cover bg-center overflow-hidden'><div className=' w-full h-full shadow-kegimage'></div></div>
        </div>
    )
}

export default KegWrapper