import React, { createRef, useEffect, useState } from 'react'
import Navbar from '../components/navbar'
import { useSearchParams } from 'react-router-dom'
import KegWrapper from '../components/kegPage/kegWrapper'
import data from '../data/kegiatan.json'
import PageTitle from '../components/PageTitle'

const AllKegiatan = () => {
    const [urlParams] = useSearchParams()
    const getUrlParams = urlParams.get('id')
    const [kegID, setKegID] = useState(getUrlParams)

    const [elRef, setElRef] = useState([])
    const [selRef, setSelRef] = useState([])

    useEffect(() => {
        setElRef((elRef) => 
            Array(data.length)
                .fill()
                .map((_, i) => elRef[i] || createRef())
        )
        setSelRef((selRef) => 
            Array(data.length)
                .fill()
                .map((_, i) => selRef[i] || createRef())
        )

    }, [data.length])

    const handleClick = (id) => {
        setKegID(id)
    }

    useEffect(() => {
        if(kegID >= 0){
            elRef[kegID]?.current.scrollIntoView({
                behavior: "smooth", 
                block: "start",
                inline: "start"
            })
        }
    }, [kegID])

    useEffect(() => {
        setTimeout(() => {
            elRef[getUrlParams]?.current.scrollIntoView({
                behavior: "smooth", 
                block: "start",
                inline: "start"
            })
        }, 150);
    }, [elRef])

    const threshold = window.innerWidth > 480 ? 0.94 : 0.8
    const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting){
            entry.target.style.opacity = 1
        } else {
            entry.target.style.opacity = 0.3
        }
    }, { threshold: threshold })

    useEffect(() => {
        if (elRef){
            elRef.map((res) => {
                observer.observe(res.current)
            })
        }
    })

    return (
        <div className='font-kanit overflow-hidden' onKeyDown={e => {
            switch (e.key) {
                case "ArrowRight":
                    if (kegID < data.length - 1) {setKegID(kegID + 1)}
                    break;

                case "ArrowLeft":
                    if (kegID > 0) {setKegID(kegID - 1)}
                    break;
            
                default:
                    break;
            }
        }}>
            <PageTitle title={"Dusun Munggon - Kegiatan"}/>
            <Navbar/>
            <div className='w-full h-screen bg-darkerblue text-white pt-32 flex pl-12 pb-4 justify-between max-[480px]:flex-col max-[480px]:px-4 max-[480px]:gap-4 overflow-hidden'>
                <div className=' h-full w-80 rounded-md bg-gold flex flex-col gap-6 justify-start items-start shadow-kegselct py-5 px-3 max-[480px]:flex-row max-[480px]:w-full max-[480px]:h-fit max-[480px]:py-2'>
                    <h1 className='text-3xl font-semibold max-[480px]:text-2xl'>Kegiatan Rutin</h1>
                    <div className=' flex flex-col w-full gap-4 px-3 overflow-y-scroll scroll-custom max-[480px]:flex-row max-[480px]:py-2'>
                        {data.map((res, i) => {
                            const resStyle = {borderWidth: '0px 0px 0px 2px'}
                            if (res.id == kegID){
                                return <button style={resStyle} ref={selRef[i]} className=' opacity-100 w-full text-left pb-6 leading-3 px-4 transition-all duration-300 before:content-[""] before:absolute before:h-3 before:bg-white before:w-3 before:rounded-full before:top-0 before:left-0 before:-translate-x-[7px] relative max-[480px]:h-fit max-[480px]:min-w-fit' key={i} onClick={() => handleClick(i)}>{res.name}</button>
                            } else {
                                return <button style={resStyle} ref={selRef[i]} className=' opacity-30 w-full text-left pb-6 leading-3 px-4 transition-all duration-300 max-[480px]:h-fit max-[480px]:min-w-fit ' key={i} onClick={() => handleClick(i)}>{res.name}</button>
                            }
                        })}
                    </div>
                </div>
                <div className=' h-full w-[54rem] bg-neutral-900 rounded-s-[3rem] flex justify-between relative items-end pb-12 px-20 overflow-visible max-[480px]:w-[90vw] max-[480px]:overflow-hidden max-[480px]:translate-x-8'>
                    <div className=' flex gap-8 w-[61rem] top-4 -translate-x-48 overflow-hidden absolute transition-all duration-300 ease-in-out px-4 py-12 justify-start max-[480px]:overflow-y-scroll max-[480px]:flex-col max-[480px]:-translate-x-24'>
                        {data.map((res, i) => {
                            return <KegWrapper key={res.id} res={res} refs={elRef[i]}/>
                        })}
                    </div>

                    <div className='flex items-end font-extralight w-12 justify-end'>
                        <h1 className='text-5xl leading-none'>{parseInt(kegID) + 1}</h1>
                        <p className=' text-xl text-gray'>/{data.length}</p>
                    </div>
                    <div className=' flex gap-1 items-center'>
                        {
                            data.map((res, i) => {
                                if (res.id == kegID){
                                    return <div key={i} className='opacity-100 transition-all duration-300 rounded-full leading-3 bg-white w-2 h-2'></div>
                                } else{
                                    return <div key={i} className='opacity-20 transition-all duration-300 rounded-full text-sm bg-white leading-none w-1 h-1'></div>
                                }
                            })
                        }
                    </div>

                </div>

            </div>
        </div>
    )
}

export default AllKegiatan