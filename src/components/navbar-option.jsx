import React, { useEffect } from 'react'

const NavbarOpt = ({text, theme}) => {

  let styleClass = ''
  theme === 'light'
    ? styleClass = 'font-light text-md hover:bg-darkerblue hover:text-white px-7 py-3 rounded-full transition-all duration-200 ease-in-out max-[1240px]:px-5'
    : styleClass = 'font-light text-md hover:bg-white hover:text-darkblue px-7 py-3 rounded-full transition-all duration-200 ease-in-out max-[480px]:bg-darkerblue max-[480px]:text-white max-[480px]:w-48 max-[1240px]:px-5'

  return (
    <button className={styleClass}>
        {text}
    </button>
  )
}

export default NavbarOpt