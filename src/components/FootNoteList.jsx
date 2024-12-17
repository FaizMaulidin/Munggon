import React from 'react'
import { Link } from 'react-router-dom'

const FootNoteList = ({name, list}) => {
    const lowName = name.toLowerCase()
    return (
        <div className="kegiatan text-white max-[480px]:hidden">
            <ul className=' font-extralight flex flex-col gap-2 text-sm'>
                {list.map((e, i) => {
                    if (e.produk) {
                        return <li key={i}><Link to={'/'+lowName+'?id='+e.id}>{e.produk}</Link></li>
                    } else{
                        return null
                    }
                })}
            </ul>
        </div>
    )
}

export default FootNoteList