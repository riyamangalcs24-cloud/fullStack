import React from 'react'

const child = (props) => {
  return (
    <div>
      <h1>Hello Riya</h1>
      {props.children}
    </div>
  )
}

export default child
