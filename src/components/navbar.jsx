import React, { useEffect, useState } from 'react'
import NavbarOpt from './navbar-option'
import MunggonTitle from './MunggonTitle'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Navbar = ({theme, handleClick}) => {
    const [navbar, setNavbar] = useState(false)

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
        }} className={navbar ? 'navbar navbar-scrolled' : 'navbar'}>
            <MunggonTitle justify={'center'}/>
            <ul className=' flex gap-2'>
                <li><HashLink to={'/'}><NavbarOpt text='Beranda' theme={theme}/></HashLink></li>
                <li><Link to={'/kegiatan?id=0'}><NavbarOpt text='Kegiatan' theme={theme}/></Link></li>
                <li><Link to={'/produk'}><NavbarOpt text='Produk' theme={theme}/></Link></li>
                <li onClick={handleClick}><Link to={'/?footnote=1'}><NavbarOpt text='Hubungi Kami' theme={theme}/></Link></li>
                <li><a href="#"><NavbarOpt text='Bahasa' theme={theme}/></a></li>
            </ul>
        </div>
    )
}

export default Navbar