import React, { useEffect, useRef } from 'react'

const PesanDukuh = ({refs}) => {
  const pesan = useRef()
  const pembicara = useRef()

  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting){
      pesan.current.style.transform = "translateY(0px)"
      pesan.current.style.opacity = 1
      pembicara.current.style.transform = "translateY(0px)"
      pembicara.current.style.opacity = 0.75
    }
  }, { threshold: 0.6 })

  useEffect(() => {
    observer.observe(refs.current)
  }, [])

  return (
    <div ref={refs} className=' bg-cream pb-64 pt-40 px-48 gap-6 flex flex-col text-darkerblue max-[1200px]:px-24 max-[480px]:px-4 max-[480px]:py-48'>
      <h1 ref={pesan} className=' text-3xl text-center translate-y-14 transition-all duration-200 opacity-0 delay-100 max-[480px]:text-xl'>Terima kasih telah mengunjungi website Dusun Munggon. Situs ini kami hadirkan sebagai jendela informasi untuk mengenal lebih dekat keunikan, potensi, dan kehidupan sehari-hari masyarakat kami. Selamat menjelajahi, dan temukan cerita menarik yang membuat dusun kami istimewa!</h1>
      <h3 ref={pembicara} className='italic text-center translate-y-14 transition-all duration-200 opacity-0 delay-200 max-[480px]:text-sm'>- Pak Sumarjiana (Kepala Dusun Munggon)</h3>
    </div>
  )
}

export default PesanDukuh