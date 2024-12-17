import React, { useEffect, useRef } from 'react'

const PesanDukuh = ({refs}) => {
  const pesan = useRef()
  const pembicara = useRef()

  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting){
      pesan.current.style.transform = "translateY(0px)"
      pesan.current.style.opacity = 1
      pembicara.current.style.transform = "translateY(0px)"
      pembicara.current.style.opacity = 1
    }
  }, { threshold: 0.6 })

  useEffect(() => {
    observer.observe(refs.current)
  }, [])

  return (
    <div ref={refs} className=' bg-cream pb-64 pt-40 px-48 gap-6 flex flex-col text-darkerblue'>
      <h1 ref={pesan} className=' text-4xl text-center translate-y-14 transition-all duration-500 opacity-0 delay-100'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia molestias nemo quasi consequatur dolorum sint eos animi quibusdam magni quaerat!</h1>
      <h3 ref={pembicara} className='italic text-center translate-y-14 transition-all duration-500 opacity-0 delay-200'>- Pak Sumarjiyana (Kepala Dusun Munggon)</h3>
    </div>
  )
}

export default PesanDukuh