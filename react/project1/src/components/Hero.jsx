import React from 'react'

const Hero = ({name,age,year}) => {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{year}</h1>
    </div>
  )
}

export default Hero
