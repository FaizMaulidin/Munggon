import React, { useEffect, useRef, useState } from 'react'
import BoxProduk from './BoxProduk'
import data from '../data/produk.json'

const NewProduk = () => {
    const slide = useRef()
    const slide2 = useRef()
    let transWindow = window.innerWidth > 375 ? 0 : 20
    const handleScroll = (e) => {
        const pos = window.pageYOffset
        const transX = Math.trunc((pos - 1550 + (transWindow * 15)) / 6)
        const transY = Math.trunc(transX * 0.2126+100)
        const transX2 = 0 - 40 - transWindow - transX
        const transY2 = Math.trunc(transX2 * 0.2126+100)
        e.stopPropagation()
        if (pos > 580) {
            slide.current.style.transform = 'translateX(' + transX2 + 'px) translateY(' + transY2 + 'px) rotate(12deg) skewX(6deg)'        
            slide2.current.style.transform = 'translateX(' + transX + 'px) translateY(' + transY + 'px) rotate(12deg) skewX(6deg)'        
        }
    }
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })
// toppest 580, botfirst-top 800, botfirst-bot 1040, bottest 1880

    return (
        <div className='w-full h-[120vh] bg-darkerblue p-4 flex flex-col relative justify-center items-center text-white overflow-hidden max-[480px]:h-[90vh]'>
            <h1 className=' text-[5rem] absolute font-semibold rotate-12 top-[5.75rem] right-8 skew-x-6 max-[480px]:text-4xl max-[480px]:top-16 max-[480px]:right-4'>Produk Unggulan</h1>
            <div className='w-full h-full overflow-hidden'>
                <div ref={slide} className='w-[100%] h-[40%] flex justify-center rotate-12 skew-x-6 gap-8 p-4 max-[480px]:w-fit max-[480px]:gap-2 '>
                    <BoxProduk data={data[1]}/>
                    <BoxProduk data={data[0]}/>
                    <BoxProduk data={data[2]}/>
                </div>
                <div ref={slide2} className='w-[100%] h-[40%] justify-center flex rotate-12 skew-x-6 gap-8 p-4 max-[480px]:w-fit max-[480px]:gap-2'>
                    <BoxProduk data={data[6]}/>
                    <BoxProduk/>
                </div>

            </div>
        </div>
    )
}

export default NewProduk