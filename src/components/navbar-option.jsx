import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'

const NavbarOpt = ({text, arrow}) => {

  return (
    <button className='font-light text-md justify-center hover:bg-white hover:text-darkblue px-7 py-3 rounded-full flex gap-2 transition-all duration-200 ease-in-out max-[480px]:bg-darkerblue max-[480px]:text-white max-[480px]:w-48 max-[1240px]:px-5'>
        {text}{arrow && <FontAwesomeIcon icon={faAngleDown}/>}
    </button>
  )
}

export default NavbarOpt