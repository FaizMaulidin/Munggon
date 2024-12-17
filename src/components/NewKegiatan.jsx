import React from 'react'
import BoxKegiatan from './BoxKegiatan'
import { Link } from 'react-router-dom'

const NewKegiatan = () => {
  return (
    <div id='keg' className=' w-full h-[140vh] bg-cream flex flex-col gap-8 py-16 px-28 items-center'>
        <h1 className=' text-[5rem] font-semibold text-darkerblue'>Kegiatan Rutin</h1>
        <p className='font-light w-[50rem] text-lg leading-6 text-center'>Kegiatan yang menjadi wujud nyata semangat kebersamaan warga Dusun Munggon dalam menjaga harmoni dan mempererat hubungan antarwarga.</p>
        <Link to={"/kegiatan?id=0"} className=' bg-darkerblue rounded-xl px-8 py-5 text-cream hover:shadow-xl transition-all duration-150 hover:scale-[1.03] tracking-wide font-light'>Lihat Semua Kegiatan</Link>
        <div className='grid grid-cols-3 grid-rows-2 row flex-grow gap-6 w-full mt-8'>
            <BoxKegiatan name={"Senam Rutin"} toID={10}/>
            <BoxKegiatan name={"Rapat Pemuda"} toID={7}/>
            <BoxKegiatan name={"Posyandu"} toID={6}/>
        </div>
    </div>
  )
}

export default NewKegiatan