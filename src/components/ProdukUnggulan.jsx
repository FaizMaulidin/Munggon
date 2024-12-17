import React, { useRef, useState } from 'react'
import BoxProduk from './BoxProduk'
import Title from './Title'

const ProdukUnggulan = () => {
  const slideIndex = useRef(0)
  const box0 = useRef()
  const box1 = useRef()
  const box2 = useRef()

  const nextSlide = (el, noEl, noEl2) => {
    const newSlideIndex = slideIndex.current == 2 ? 2 : slideIndex.current + 1
    slideIndex.current = newSlideIndex
    el.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    })
    noEl.current.style.opacity = 0.5
    noEl2.current.style.opacity = 0.5
    el.current.style.opacity = 1
  }
  const prevSlide = (el, noEl, noEl2) => {
    const newSlideIndex = slideIndex.current == 0 ? 0 : slideIndex.current - 1
    slideIndex.current = newSlideIndex
    el.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    })
    noEl.current.style.opacity = 0.5
    noEl2.current.style.opacity = 0.5
    el.current.style.opacity = 1
  }

  return (
    <div className=' w-full h-fit bg-darkerblue flex py-32 items-center flex-col gap-3'>
      <Title name='Produk Unggulan' color='#fffad1'/>
      <div className="container bg-lightblue bg-opacity-10 w-[64rem] h-[24rem] flex rounded-xl items-center overflow-hidden">
        <div className="slider h-[22rem] w-fit px-[12rem] bg-transparent flex gap-16 relative">
          <BoxProduk refs={box0} opacity={1} image={'./batik.jpg'}/>
          <BoxProduk refs={box1} opacity={0.5} image={'./makanan.jpg'}/>
          <BoxProduk refs={box2} opacity={0.5} image={'./beras.jpg'}/>
          <button className="seemore absolute -translate-y-1/2 top-1/2 text-center text-sm text-lightblue right-[3rem] flex justify-center items-center h-24 w-24 rounded-full bg-cream italic leading-4">Produk Lainnya{'>>'}</button>
        </div>
      </div>
      <div className="flex gap-8">
        <div onClick={() => {
          switch (slideIndex.current){
            case 2:
              prevSlide(box1, box2, box0)
              break

            default:
              prevSlide(box0, box1, box2)
              break
          }
        }} className="w-10 h-10 rounded-full cursor-pointer hover:bg-cream hover:text-darkerblue transition-all duration-200 ease-in-out bg-lightblue bg-opacity-10 text-cream flex justify-center items-center">{"<"}</div>
        <div onClick={() => {
          switch (slideIndex.current){
            case 0:
              nextSlide(box1, box2, box0)
              break

            default:
              nextSlide(box2, box1, box0)
              break
          }
        }} className="w-10 h-10 rounded-full cursor-pointer hover:bg-cream hover:text-darkerblue transition-all duration-200 ease-in-out bg-lightblue bg-opacity-10 text-cream flex justify-center items-center">{">"}</div>
      </div>
    </div>
  )
}

export default ProdukUnggulan