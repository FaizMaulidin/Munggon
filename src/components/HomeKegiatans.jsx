import React from 'react'

const HomeKegiatans = ({order}) => {
  return (
    <div className='bg-lightgray w-[64rem] h-[22rem] text-darkerblue flex justify-between rounded-xl overflow-hidden'>
        <div style={{
            order: order
        }} className="photo bg-green-400 h-full w-[49%] ">

        </div>
        <div className="text w-[50%] p-10 flex flex-col justify-between">
            <div className="flex flex-col gap-3">
                <h1 className="text-4xl font-medium">Nama Kegiatan</h1>
                <p className=' font-light text-gray'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dignissimos velit rem iusto in dolore, culpa ad illum eaque eius doloribus voluptatem eos explicabo tempora deserunt unde laborum repellendus aperiam?</p>
            </div>
            <button className='w-fit self-end py-3 px-6 rounded-md border-gold text-gold border-2 hover:bg-gold hover:text-cream transition-all duration-300 ease-in-out'>See More</button>
        </div>
    </div>
  )
}

export default HomeKegiatans