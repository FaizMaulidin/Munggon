import React, { useContext } from 'react'
import ImageComp from './ImageComp'
import { LangContext } from './LangContext'

const LandingPage = ({scroll}) => {
    const lang = useContext(LangContext)

    return (
        <div className=' w-full h-full bg-darkerblue flex justify-center px-24 pt-32 pb-14 max-[480px]:px-8 max-[480px]:flex-col max-[480px]:pt-36 max-[480px]:pb-20 max-[1240px]:px-12'>
            <div className="text w-1/2 pt-16 text-white flex flex-col max-[480px]:order-2 max-[480px]:w-full max-[480px]:pt-4">
                <h1 className='text-[7rem] font-bold tracking-wide text-white leading-[0.9] max-[480px]:text-6xl '>{lang.homepage.hero.main}</h1>
                <h2 className=' text-xl font-light mt-3 italic tracking-wide max-[480px]:text-base max-[480px]:w-full max-[480px]:mt-1'>{lang.homepage.hero.hook}</h2>
                <div className=' flex justify-center items-center mt-20 gap-3 text-lg max-[480px]:text-sm max-[480px]:mt-10'>
                    <button onClick={scroll} className=' grow py-3 rounded-lg bg-white text-darkerblue hover:rotate-3 transition-all duration-100 tracking-wide font-light'>{lang.homepage.hero.start}</button>
                    <a className='grow' href="https://www.google.com/maps/place/Rumah+Pak+Dukuh+Munggon/@-7.8107615,110.436084,16.65z/data=!4m6!3m5!1s0x2e7a51db9ba8a2c7:0xe75feff2d475a9cf!8m2!3d-7.8100729!4d110.4378641!16s%2Fg%2F11kbfq1fz0?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D" target='_blank'><button className=' w-full px-5 py-3 rounded-lg text-white hover:rotate-3 transition-all duration-100 ring-2 ring-white ring-inset tracking-wide font-light'>{lang.homepage.hero.location}</button></a>
                </div>
            </div>
            <div className="elements w-1/2 flex justify-end pr-20 max-[480px]:w-full max-[480px]:justify-center max-[480px]:p-0 max-[1240px]:pr-10">
                <div className=" w-72 relative flex justify-center ">
                    <ImageComp hash='./tugu1-small.png' className="rounded-full object-cover h-full max-[480px]:w-40" src="./tugu1.png"/>
                    <div className='bg-gold w-40 h-28 rounded-2xl absolute top-20 -left-20 max-[480px]:w-24 max-[480px]:h-16 max-[480px]:rounded-md max-[480px]:left-0'></div>
                    <div className='bg-gold w-32 h-36 rounded-2xl absolute bottom-20 -right-20 max-[480px]:w-16 max-[480px]:h-24 max-[480px]:right-8 max-[480px]:bottom-14'></div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage