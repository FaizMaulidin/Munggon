import React, { useEffect, useState } from 'react'
import { Blurhash } from 'react-blurhash'

const ImageComp = ({src, className, refs, hash}) => {

    const [imgLoaded, setImgLoaded] = useState(false)

    useEffect(() => {
        const img = new Image()
        img.onload = () => {
            setImgLoaded(true)
        }
        img.src = src
    }, [src])

    return (
        <>
            {!imgLoaded && hash
                ? <img ref={refs} className={className} src={hash} alt="" />
                : <img ref={refs} className={className} src={src} alt="" />
            }
            {/* <img ref={refs} className={className} src={src} alt="" /> */}
        </>
    )
}

export default ImageComp