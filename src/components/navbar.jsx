import React, { useContext, useEffect, useState } from 'react'
import NavbarOpt from './navbar-option'
import MunggonTitle from './MunggonTitle'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBurger, faChevronDown, faXmark } from '@fortawesome/free-solid-svg-icons'
import { LangContext, SetLangContext } from './LangContext'
import bahasa from '../data/bahasa.json'
import english from '../data/eng.json'

const Navbar = ({handleClick}) => {
    const [navbar, setNavbar] = useState(false)
    const [menu, setMenu] = useState(false)
    const lang = useContext(LangContext)
    const setLang = useContext(SetLangContext)
    const [langBox, setLangBox] = useState()

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    })

    const handleScroll = () => {
        window.scrollY > 20
            ? setNavbar(true)
            : setNavbar(false)
    }

    return (
        <div className={navbar ? 'navbar navbar-scrolled ' : 'navbar'}>
            <MunggonTitle justify={'center'}/>
            <ul className=' flex gap-2 max-[480px]:hidden'>
                <li><Link to={'/'} state={lang}><NavbarOpt text={lang.navbar[0]}/></Link></li>
                <li><Link to={'/kegiatan?id=0'} state={lang}><NavbarOpt text={lang.navbar[1]}/></Link></li>
                <li><Link to={'/produk'} state={lang}><NavbarOpt text={lang.navbar[2]}/></Link></li>
                <li onClick={handleClick}><Link to={'/?footnote=1'} state={lang}><NavbarOpt text={lang.navbar[3]}/></Link></li>
                <li onClick={() => setLangBox(!langBox)} className='relative'>
                    <NavbarOpt text={lang.navbar[4]} arrow={true}/>
                    {langBox && <div className=' absolute flex font-extralight flex-col bg-white text-darkerblue rounded-lg left-1/2 -translate-x-1/2 top-[150%] before:content-[""] before:w-6 before:h-6 before:bg-white before:absolute before:rotate-45 before:rounded-sm before:-translate-y-1/3 before:left-1/2 before:-translate-x-1/2'>
                        <button onClick={() => setLang(bahasa)} className='rounded-t-lg pt-4 pb-2 px-4 text-nowrap hover:text-gold'>Bahasa Indonesia</button>
                        <button onClick={() => setLang(english)} className='rounded-b-lg pb-4 py-2 px-4 hover:text-gold transition-all'>English</button>
                    </div>}
                </li>
            </ul>
            <button onClick={() => setMenu(true)} className=' hidden text-2xl max-[480px]:flex'>
                <FontAwesomeIcon icon={faBars}/>
            </button>
            {menu 
                ? <div className='fixed right-0 top-0 w-screen h-screen bg-neutral-900 bg-opacity-50 max-[480px]:flex hidden justify-end'>
                    <div className=' h-full w-[85%] text-darkerblue flex flex-col gap-3 bg-cream px-4 py-8' >
                        <div className=' flex justify-between text-3xl px-2'>
                            <h1 className=' font-semibold'>Menu</h1>
                            <button onClick={() => setMenu(false)} className='text-3xl'><FontAwesomeIcon icon={faXmark}/></button>
                        </div>
                        <div className=' h-[1px] w-full bg-darkerblue'></div>
                        <ul className='grow flex flex-col items-center gap-6 justify-center'>
                            <li><Link to={'/'} state={lang}><NavbarOpt text={lang.navbar[0]}/></Link></li>
                            <li><Link to={'/kegiatan?id=0'} state={lang}><NavbarOpt text={lang.navbar[1]}/></Link></li>
                            <li><Link to={'/produk'} state={lang}><NavbarOpt text={lang.navbar[2]}/></Link></li>
                            <li onClick={handleClick}><Link to={'/?footnote=1'} state={lang}><NavbarOpt text={lang.navbar[3]}/></Link></li>
                            <li onClick={() => setLangBox(!langBox)} className='relative'>
                                <NavbarOpt text={lang.navbar[4]} arrow={true}/>
                                {langBox && <div className=' absolute flex font-extralight flex-col bg-white text-darkerblue rounded-lg left-1/2 -translate-x-1/2 top-[150%] before:content-[""] before:w-6 before:h-6 before:bg-white before:absolute before:rotate-45 before:rounded-sm before:-translate-y-1/3 before:left-1/2 before:-translate-x-1/2'>
                                    <button onClick={() => setLang(bahasa)} className='rounded-t-lg pt-4 pb-2 px-4 text-nowrap hover:text-gold'>Bahasa Indonesia</button>
                                    <button onClick={() => setLang(english)} className='rounded-b-lg pb-4 py-2 px-4 hover:text-gold transition-all'>English</button>
                                </div>}
                            </li>
                        </ul>
                    </div>
                </div>
                : <></>
            }
        </div>
    )
}

export default Navbar