import React from 'react'

const Title = ({name, color}) => {
  return (
    <h1 style={{
        color: color
    }} className=' text-5xl font-medium mb-3'>{name}</h1>
  )
}

export default Title