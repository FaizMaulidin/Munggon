import React from 'react'
import ImageComp from './ImageComp'

const ProdukSelect = ({handleClick, data}) => {
  return (
      <button onClick={() => handleClick(data.id)} className='bg-cover rounded-sm hover:scale-105 transition-all duration-200 shadow-boxproduk hover:shadow-boxprodukhov bg-center relative overflow-hidden'>
        <ImageComp src={data.image[0]} className={"absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 object-cover w-full h-full"}/>
        <div className='bg-darkerblue w-full h-full bg-opacity-70 hover:bg-opacity-50 transition-all duration-300 text-white flex justify-center items-center text-2xl tracking-[0.2em] font-thin px-4 absolute top-0 left-0'>
            {data.produk}
        </div>
    </button>
  )
}

export default ProdukSelect