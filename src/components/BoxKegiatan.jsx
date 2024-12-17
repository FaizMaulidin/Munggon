import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import ImageComp from './ImageComp'

const BoxKegiatan = ({name, toID}) => {

    const slide = useRef()
    const handleScroll = () => {
        const pos = window.pageYOffset
        let trans = 0
        let opacity = 1
        if (pos > 1800 && pos < 2200){
            switch (name) {
                case "Senam Rutin":
                    trans = Math.trunc((2100 - pos) / 9)
                    opacity = (90 - trans) / 100
                    slide.current.style.transform = 'translateX(-'+trans+'px)'
                    slide.current.style.opacity = opacity
                    break
                    
                case "Rapat Pemuda":
                    trans = Math.trunc((2200 - pos) / 9)
                    opacity = (100 - trans) / 100
                    slide.current.style.transform = 'translateX('+trans+'px)'
                    slide.current.style.opacity = opacity
                break

                default:
                    trans = Math.trunc((2200 - pos) / 3)
                    opacity = (100 - trans) / 100
                    slide.current.style.transform = 'translateX('+trans+'px)'
                    slide.current.style.opacity = opacity
                    break;
            }
        }
    }
// 1800 - 2200
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    })

    const src = () => {
        switch (name) {
            case "Senam Rutin":
                return "./assets/senam-pr.png"

            case "Rapat Pemuda":
                return "./assets/rapatpemuda-ls.jpg"
        
            default:
                return "./assets/posyandu-ls.JPG"
        }
    }

    const styling = () => {
        switch (name) {
            case "Senam Rutin":
                return {
                    gridRow: 'span 2 / span 2',
                    borderRadius: '8rem 0'
                }
                
            case "Rapat Pemuda":
                return {
                    gridColumn: 'span 2 / span 2',
                    borderRadius: '8rem 0'
            }
        
            default:
                return {
                    gridColumn: 'span 2 / span 2',
                    borderRadius: '0 8rem'
                }
        }
    }
    return (
        <Link to={"/kegiatan?id=" + toID} ref={slide} className='bg-cover cursor-pointer bg-center group overflow-hidden relative flex justify-center items-center' style={styling()}>
            <ImageComp src={src()} className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"/>
            <div className=' bg-darkerblue group-hover:opacity-30 transition-all absolute opacity-75 top-0 duration-300 w-full h-full'>
            </div>
            <h1 className='text-white group-hover:opacity-100 delay-150 group-hover:translate-y-0 opacity-0 transition-all duration-300 -translate-y-8 text-6xl tracking-wide font-semibold z-10 text-center'>{name}</h1>
        </Link>
    )
}

export default BoxKegiatan