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
            {/* {!imgLoaded && hash
                ? <Blurhash
                    hash={hash}
                    height={500}
                    width={300}
                    className='rounded-xl'
                    resolutionX={32}
                    resolutionY={32}
                    punch={1}
                />
                : <img ref={refs} className={className} src={src} alt="" />
            } */}
            <img ref={refs} className={className} src={src} alt="" loading='lazy' />
        </>
    )
}

export default ImageComp