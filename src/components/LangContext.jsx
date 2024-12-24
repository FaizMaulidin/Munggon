import React, { createContext } from 'react'


export const LangContext = createContext()
export const SetLangContext = createContext()

const AllContext = ({children, lang, setLang}) => {
  return (
    <LangContext.Provider value={lang}>
        <SetLangContext.Provider value={setLang}>
            {children}
        </SetLangContext.Provider>
    </LangContext.Provider>
  )
}

export default AllContext