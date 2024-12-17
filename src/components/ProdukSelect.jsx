import React from 'react'

const ProdukSelect = ({handleClick, data}) => {
  return (
    <button style={{
        backgroundImage: "url('"+data.image[0]+"')"
    }} onClick={() => handleClick(data.id)} className='bg-cover rounded-sm hover:scale-105 transition-all duration-200 shadow-boxproduk hover:shadow-boxprodukhov bg-center'>
        <div className='bg-darkerblue w-full h-full bg-opacity-70 hover:bg-opacity-60 transition-all duration-300 text-white flex justify-center items-center text-2xl tracking-[0.2em] font-thin px-4'>
            {data.produk}

        </div>
    </button>
  )
}

export default ProdukSelect