import React, { useContext } from 'react'
import BoxKegiatan from './BoxKegiatan'
import { Link } from 'react-router-dom'
import { LangContext } from './LangContext'

const NewKegiatan = () => {
  const lang = useContext(LangContext)

  return (
    <div id='keg' className=' w-full h-[140vh] bg-cream flex flex-col gap-8 py-16 px-28 items-center max-[480px]:px-4 max-[480px]:gap-6 max-[480px]:h-[120vh]'>
        <h1 className=' text-[5rem] font-semibold text-darkerblue max-[480px]:text-6xl'>{lang.homepage.kegiatan.title}</h1>
        <p className='font-light w-[50rem] text-lg leading-6 text-center max-[480px]:w-full max-[480px]:text-left max-[480px]:text-base'>{lang.homepage.kegiatan.hook}</p>
        <Link to={"/kegiatan?id=0"} state={lang} className=' bg-darkerblue rounded-xl px-8 py-5 text-cream hover:shadow-xl transition-all duration-150 hover:scale-[1.03] tracking-wide font-light max-[480px]:text-sm'>{lang.homepage.kegiatan.button}</Link>
        <div className='home-keg grid grid-cols-3 grid-rows-2 grow gap-6 w-full mt-8 max-[480px]:grid-cols-2 max-[480px]:gap-3'>
            <BoxKegiatan name={lang.id == "bahasa" ? "Senam Rutin" : "Regular Exercise"} toID={10}/>
            <BoxKegiatan name={lang.id == "bahasa" ? "Rapat Pemuda" : "Youth Meeting"} toID={7}/>
            <BoxKegiatan name={lang.id == "bahasa" ? "Posyandu" : "Integrated Health Service"} toID={6}/>
        </div>
    </div>
  )
}

export default NewKegiatan