import React from 'react'

const Landing = (props) => {
  return (
    <div>
      Hello = {props.name};
      Age = {props.age};
      isStudent = {props.isStudent}
    </div>
  )
}

export default Landing
