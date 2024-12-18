import React, { useEffect, useState } from 'react'
import NavbarOpt from './navbar-option'
import MunggonTitle from './MunggonTitle'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBurger, faXmark } from '@fortawesome/free-solid-svg-icons'

const Navbar = ({theme, handleClick}) => {
    const [navbar, setNavbar] = useState(false)
    const [menu, setMenu] = useState(false)

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
        <div style={{
            backgroundColor: theme === 'light' ? "transparent" : '#14252d',
            color: theme === 'light' ? '#14252d' : 'white'
        }} className={navbar ? 'navbar navbar-scrolled ' : 'navbar'}>
            <MunggonTitle justify={'center'}/>
            <ul className=' flex gap-2 max-[480px]:hidden'>
                <li><HashLink to={'/'}><NavbarOpt text='Beranda' theme={theme}/></HashLink></li>
                <li><Link to={'/kegiatan?id=0'}><NavbarOpt text='Kegiatan' theme={theme}/></Link></li>
                <li><Link to={'/produk'}><NavbarOpt text='Produk' theme={theme}/></Link></li>
                <li onClick={handleClick}><Link to={'/?footnote=1'}><NavbarOpt text='Hubungi Kami' theme={theme}/></Link></li>
                <li><a href="#"><NavbarOpt text='Bahasa' theme={theme}/></a></li>
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
                        <ul className='grow flex flex-col items-center gap-6 justify-center max-md:hidden'>
                            <li><HashLink to={'/'}><NavbarOpt text='Beranda' theme={theme}/></HashLink></li>
                            <li><Link to={'/kegiatan?id=0'}><NavbarOpt text='Kegiatan' theme={theme}/></Link></li>
                            <li><Link to={'/produk'}><NavbarOpt text='Produk' theme={theme}/></Link></li>
                            <li onClick={handleClick}><Link to={'/?footnote=1'}><NavbarOpt text='Hubungi Kami' theme={theme}/></Link></li>
                            <li><a href="#"><NavbarOpt text='Bahasa' theme={theme}/></a></li>
                        </ul>
                    </div>
                </div>
                : <></>
            }
        </div>
    )
}

export default Navbar