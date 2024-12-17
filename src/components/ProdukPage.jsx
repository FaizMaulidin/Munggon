import { faCircleXmark, faLocationDot, faPhoneAlt, faUser, faX, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef, useState, createRef } from 'react'
import ImageComp from './ImageComp'

const ProdukPage = ({data, handleClick}) => {
    const ref = useRef()
    const refbg = useRef()
    const prevRef = useRef()
    const nextRef = useRef()
    const [imageID, setImageID] = useState(0)
    const [imageRef, setImageRef] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            ref.current.style.opacity = 1
            refbg.current.style.opacity = 1
        }, 100);
    })
    useEffect(() => {
        setImageRef((imageRef) => 
            Array(data.image.length)
                .fill()
                .map((_, i) => imageRef[i] || createRef())
        )
    }, [data.image.length])
    useEffect(() => {
        if (imageRef){
            imageRef[imageID].current.scrollIntoView({
                behavior: "smooth",
                inline: "center"
            })
        }
        prevRef.current.style.opacity = imageID > 0 ? 1 : 0.5
        nextRef.current.style.opacity = imageID < data.image.length - 1 ? 1 : 0.5
    }, [imageID])

    const handleNextImg = () => {
        if (imageID < data.image.length - 1){
            setImageID(imageID + 1)
        }

    }

    const handlePrevImg = () => {
        if (imageID > 0){
            setImageID(imageID - 1)
        }
    }
    
  return (
    <div ref={refbg} onClick={() => handleClick(0)} className=' fixed z-10 opacity-0 w-screen h-screen top-0 transition-all duration-300 bg-black bg-opacity-50 px-48 py-24 max-[480px]:px-8 max-[480px]:py-8'>
        <div ref={ref} onClick={e => e.stopPropagation()} className='opacity-0 w-full h-full transition-all duration-300 rounded-xl bg-neutral-300 flex justify-between items-center p-8 gap-8 relative max-[480px]:py-12 max-[480px]:px-10 max-[480px]:flex-col max-[480px]:gap-2'>
            <div className='w-96 h-full flex flex-col relative text-neutral-300 font-light text-2xl gap-3 max-[480px]:w-full max-[480px]:h-1/2'>
                <button ref={prevRef} onClick={() => handlePrevImg()} className=' left-0 absolute rounded-r-md bg-darkerblue h-fit px-4 py-2 top-[40%] transition-all duration-300 z-10'>{"<"}</button>
                <button ref={nextRef} onClick={() => handleNextImg()} className=' right-0 absolute rounded-l-md bg-darkerblue h-fit px-4 py-2 top-[40%] transition-all duration-300 z-10'>{">"}</button>
                <div className='w-96 h-96 overflow-hidden rounded-lg max-[480px]:w-full'>
                    <div className='h-96 w-fit flex'>
                        {data.image.map((e, i) => {
                            return <div className='w-96 relative bg-neutral-400'>
                                <ImageComp refs={imageRef[i]} src={e} key={i} className=" absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 object-cover h-full"/>
                            </div>
                        })}
                    </div>
                </div>
                <div className=' flex gap-2 items-center justify-center'>
                    {
                        data.image.map((res, i) => {
                            if (i === imageID){
                                return <div key={i} className='opacity-100 transition-all duration-300 rounded-full leading-3 bg-darkgray w-3 h-3 max-[480px]:w-2 max-[480px]:h-2'></div>
                            } else{
                                return <div key={i} className='opacity-30 transition-all duration-300 rounded-full text-sm bg-darkgray leading-none w-2 h-2 max-[480px]:w-1 max-[480px]:h-1'></div>
                            }
                        })
                    }
                </div>
            </div>
            <div className=' grow  flex h-full py-12 justify-between flex-col tracking-wide text-darkerblue pr-4 max-[480px]:py-0'>
                <div>
                    <h1 className='  text-4xl max-[480px]:text-2xl'>{data.name}</h1>
                    <h3 className='font-light text-lg opacity-50 max-[480px]:text-base'>{data.produk}</h3>
                    <p className=' mt-5 font-light text-lg opacity-80 max-[480px]:text-base'>{data.desc}</p>
                </div>
                <div className=' self-end justify-between w-full text-2xl flex items-end gap-4'>
                    <div className=' font-light opacity-70 flex text-base items-center gap-2'>
                        <FontAwesomeIcon icon={faUser}/>
                        {data.owner}
                    </div>
                    <div className='flex gap-3 opacity-80'>
                        <a className='group relative flex gap-3 hover:bg-darkerblue border-darkerblue border-2 hover:text-neutral-300 px-4 py-3 rounded-md transition-all duration-300 items-center origin-right' target='_blank' href={data.maps}>
                            <h1 className='font-ligh text-sm max-[480px]:text-xs max-[480px]:hidden'>Lihat Lokasi</h1>
                            <FontAwesomeIcon icon={faLocationDot}/>
                        </a>
                        <a className='group relative flex gap-3 hover:bg-darkerblue border-darkerblue border-2 hover:text-neutral-300 px-4 py-3 rounded-md transition-all duration-300 items-center origin-right' target='_blank' href={data.hp}>
                            <div className=' overflow-hidden max-[480px]:hidden'>
                                <h1 className='font-ligh text-sm max-[480px]:text-xs'>WhatsApp</h1>
                            </div>
                            <FontAwesomeIcon icon={faPhoneAlt}/>
                        </a>
                    </div>
                </div>
            </div>
            <button className='self-start text-3xl absolute right-6 top-4 text-darkerblue max-[480px]:right-3 max-[480px]:top-2' onClick={() => handleClick(0)}>
                <FontAwesomeIcon icon={faCircleXmark}/>
            </button>
        </div> 
    </div>
  )
}

export default ProdukPage