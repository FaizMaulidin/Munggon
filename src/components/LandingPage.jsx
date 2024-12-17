import React from 'react'

const LandingPage = ({scroll}) => {
    return (
        <div className=' w-full h-full bg-darkerblue flex justify-center px-24 pt-32 pb-14'>
            <div className="text w-1/2 pt-16 text-white">
                <h1 className='text-[7rem] font-bold tracking-wide text-white leading-[0.9]'>JELAJAH MUNGGON</h1>
                <h2 className=' text-xl font-light mt-3 italic tracking-wide'>Kecil dalam Ukuran, Besar dalam Cerita.</h2>
                <div className=' flex justify-center items-center mt-20 gap-3'>
                    <button onClick={scroll} className=' w-64 py-3 text-lg rounded-lg bg-white text-darkerblue hover:rotate-3 transition-all duration-100 tracking-wide font-light'>Mulai Jelajah</button>
                    <a href="https://www.google.com/maps/place/Rumah+Pak+Dukuh+Munggon/@-7.8107615,110.436084,16.65z/data=!4m6!3m5!1s0x2e7a51db9ba8a2c7:0xe75feff2d475a9cf!8m2!3d-7.8100729!4d110.4378641!16s%2Fg%2F11kbfq1fz0?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D" target='_blank'><button className=' w-64 py-3 text-lg rounded-lg text-white hover:rotate-3 transition-all duration-100 ring-2 ring-white ring-inset tracking-wide font-light'>Lihat Lokasi Kami</button></a>
                </div>
            </div>
            <div className="elements w-1/2 flex justify-end pr-20">
                <div className=" rounded-[999px] w-72 bg-hero bg-cover relative">
                    <div className='bg-gold w-40 h-28 rounded-2xl absolute top-20 -left-20'></div>
                    <div className='bg-gold w-32 h-36 rounded-2xl absolute bottom-20 -right-20'></div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage