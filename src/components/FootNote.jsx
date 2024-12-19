import React from 'react'
import MunggonTitle from './MunggonTitle'
import FootNoteList from './FootNoteList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import dataKeg from '../data/kegiatan.json'
import dataProd from '../data/produk.json'


const FootNote = ({refs}) => {
  return (
    <div ref={refs} className='bg-darkerblue flex text-white justify-center items-center gap-12 py-16 max-[480px]:px-4'>
        <div className='grid grid-cols-footnote gap-x-20 gap-y-4 grid-rows-footnote max-[480px]:flex max-[480px]:flex-col max-[480px]:gap-8 max-[1240px]:gap-x-12'>
          <MunggonTitle justify={'end'}/>
          <h1 className='text-xl font-semibold tracking-wider self-end leading-none max-[480px]:hidden'>Kegiatan</h1>
          <h1 className='text-xl font-semibold tracking-wider self-end leading-none max-[480px]:hidden'>Produk</h1>
          <a className=' row-span-2 flex rounded-md overflow-hidden max-[480px]:order-3' href="https://www.google.com/maps/place/Rumah+Pak+Dukuh+Munggon/@-7.8107615,110.436084,16.65z/data=!4m6!3m5!1s0x2e7a51db9ba8a2c7:0xe75feff2d475a9cf!8m2!3d-7.8100729!4d110.4378641!16s%2Fg%2F11kbfq1fz0?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D" target='_blank'>
            <div style={{
              backgroundImage: "url('./assets/maps.png')"
            }} className="peta overflow-hidden bg-cover bg-right w-full max-[480px]:h-32 ">
            </div>
          </a>
          <div className='flex flex-col gap-3 font-extralight tracking-wider w-auto text-sm'>
            <div className='flex gap-2 items-start justify-start'>
              <FontAwesomeIcon icon={faLocationDot}/>
              <p>Munggon, RT.001/RW.020, Kemasan, Sendangtirto, Kec. Berbah, Kabupaten Sleman, Daerah Istimewa Yogyakarta</p>
            </div>
            <div className='flex gap-2 items-start justify-start'>
              <FontAwesomeIcon icon={faPhone}/>
              <p>+62 895-4038-40508</p>
            </div>
            <div className='flex gap-2 items-start justify-start'>
              <FontAwesomeIcon icon={faGlobe}/>
              <p>https://dusun-munggon.vercel.app</p>
            </div>
          </div>
          <FootNoteList name={'Kegiatan'} list={dataKeg}/>
          <FootNoteList name={'Produk'} list={dataProd}/>
        </div>
    </div>
  )
}

export default FootNote