import React from 'react'

const MunggonTitle = ({justify}) => {
  return (
    <div style={{
      alignItems: justify
    }} className=' font-semibold tracking-wider flex gap-2 '>
        <img className='w-16 h-fit max-[480px]:w-12 object-contain' src="./logo_sleman.png" alt="" />
        <div className="flex flex-col justify-center leading-none gap-1">
            <h1 className=' text-xl'>Dusun Munggon</h1>
            <h2 className='text-xs font-extralight'>Sendangtirto, Berbah, Sleman, DIY</h2>
        </div>
    </div>
  )
}

export default MunggonTitle