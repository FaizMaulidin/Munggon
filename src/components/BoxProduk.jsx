import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import ImageComp from './ImageComp'

const BoxProduk = ({data}) => {

  if (data){
    return (
      <Link to={'/produk?id='+data.id} className="box cursor-pointer transition-all duration-500 hover:scale-[1.015] saturate-0 hover:saturate-50 rounded-md bg-cover h-full w-[26rem] text-2xl tracking-[0.2em] font-extralight text-white p-5 flex items-end overflow-hidden max-[480px]:w-32 max-[480px]:text-lg max-[480px]:p-2 max-[480px]:tracking-wide">
        <ImageComp className="absolute -z-10 left-0 top-1/2 w-full -translate-y-1/2 object-cover h-full" src={data.image[0]}/>
        {data.produk}
      </Link>
    )
  }
  return (
    <Link to={'/produk'} className="box bg-cream cursor-pointer transition-all duration-500 hover:scale-[1.015] saturate-0 hover:saturate-50 rounded-md bg-cover h-full w-[26rem] text-darkblue text-3xl gap-4 font-semibold flex flex-col justify-center items-center max-[480px]:w-32 max-[480px]:text-xl max-[480px]:gap-2">
      <FontAwesomeIcon className='text-8xl max-[480px]:text-5xl' icon={faBasketShopping}/>
      <p className='max-[480px]:text-center'>Lihat Produk Lainnya</p>
    </Link>
  )
}

export default BoxProduk