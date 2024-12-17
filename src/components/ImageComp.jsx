import React from 'react'

const ImageComp = ({src, className, refs}) => {
  return (
    <>
        <img ref={refs} className={className} src={src} alt="" />
    </>
  )
}

export default ImageComp