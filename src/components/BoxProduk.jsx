import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const BoxProduk = ({data}) => {

  if (data){
    return (
      <Link to={'/produk?id='+data.id} className="box cursor-pointer transition-all duration-500 hover:scale-[1.015] saturate-0 hover:saturate-50 rounded-md bg-cover h-full w-[26rem] text-2xl tracking-[0.2em] font-extralight text-white p-5 flex items-end" style={{
        backgroundImage: 'url('+data.image[0]+')'
      }}>
        {data.produk}
      </Link>
    )
  }
  return (
    <Link to={'/produk'} className="box bg-cream cursor-pointer transition-all duration-500 hover:scale-[1.015] saturate-0 hover:saturate-50 rounded-md bg-cover h-full w-[26rem] text-darkblue text-3xl gap-4 font-semibold flex flex-col justify-center items-center">
      <FontAwesomeIcon className='text-8xl' icon={faBasketShopping}/>
      <p>Lihat Produk Lainnya</p>
    </Link>
  )
}

export default BoxProduk