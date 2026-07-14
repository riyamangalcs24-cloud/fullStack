import React from 'react'

const welcome = (props) => {
  return (
    <div>
      <h1>Hello , {props.name}</h1>
      <p>{props.name} ! How can i help you</p>
    </div>
  )
}

export default welcome
