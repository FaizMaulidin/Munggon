import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import ImageComp from '../ImageComp'

const KegWrapper = ({refs, res}) => {
    
    return (
        <div ref={refs} className="flex gap-6 items-center h-fit transition-all duration-100 opacity-30 scroll-ml-4 max-[480px]:flex-col max-[480px]:snap-start">
            <div className=' bg-lightgray2 font-light rounded-2xl w-[20rem] h-[17rem] self-start flex  flex-col p-6 gap-8 max-[1080px]:w-[16rem] max-[480px]:gap-4 max-[480px]:translate-x-12 max-[1240px]:w-[18rem] max-[480px]:h-[14rem] max-[960px]:h-[18rem]'>
                <div className='flex items-center'>
                    <div className='before:content-[""] before:absolute before:h-3 before:bg-gray2 before:w-3 before:rounded-full before:top-[1px] before:left-0 before:-translate-y-1/2 w-10 h-[2px] relative flex-grow pl-[0.95rem] pr-[0.20rem] max-[480px]:before:w-2 max-[480px]:before:h-2'  >
                        <div className='bg-gray2 w-full h-full'></div>
                    </div>
                    <div className='before:content-[""] before:absolute before:h-3 before:bg-[hsl(0,0%,70%)] before:w-3 before:rounded-full before:top-[1px] before:left-0 before:-translate-y-1/2 pl-[0.95rem] pr-[0.20rem] w-10 h-[2px] relative flex-grow max-[480px]:before:w-2 max-[480px]:before:h-2'>
                        <div className='bg-gray2 w-full h-full'></div>
                    </div>
                    <div className='before:content-[""] before:absolute before:h-3 before:bg-gray2 before:w-3 before:rounded-full before:top-[1px] before:left-0 before:-translate-y-1/2 pl-[0.95rem] pr-[0.20rem] w-10 h-[2px] relative flex-grow max-[480px]:before:w-2 max-[480px]:before:h-2'>
                        <div className='bg-gray2 w-full h-full'></div>
                    </div>
                    <div className=' bg-darkerblue rounded-full p-2'>
                        <p className=' text-[0.8rem] tracking-wide leading-5 text-lightgray2 text-center w-36 '>{res.schedule}</p>
                    </div>
                </div>
                <div className='flex flex-col gap-1 text-darkgray2'>
                    <h1 className=' text-3xl font-normal max-[480px]:text-xl'>{res.name}</h1>
                    <p className=' text-[0.95rem] leading-5 text-gray max-[480px]:text-xs'>{res.desc}</p>
                </div>
            </div>
            <div className=' flex justify-center w-[80%] h-[23rem] items-center gap-6 max-[480px]:items-start max-[480px]:w-full max-[480px]:h-[12rem] max-[960px]:flex-col max-[480px]:flex-row'>
                <div  className=' bg-neutral-700 rounded-2xl w-[17rem] h-full  bg-cover bg-center overflow-hidden relative max-[1080px]:w-[12rem] max-[1240px]:w-[14.5rem]'> 
                    <ImageComp src={res.image.portrait} className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 object-cover min-h-full min-w-full"/>
                    <div className=' w-full h-full absolute top-0 left-0 shadow-kegimage'></div>
                </div>
                <div className=' bg-neutral-700 rounded-2xl w-[22rem] h-[90%]  bg-cover bg-center overflow-hidden relative max-[1080px]:w-[17rem] max-[1240px]:w-[20rem]'>
                    <ImageComp src={res.image.landscape} className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 object-cover min-h-full min-w-full"/>
                    <div className=' w-full h-full absolute top-0 left-0 shadow-kegimage'></div>
                </div>

            </div>
        </div>
    )
}

export default KegWrapper