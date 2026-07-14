import { useState } from 'react'
import './App.css'

function App() {
  const [show, setShow] = useState(false)

  function toggleTest(){
    setShow(!show)
  }

  // function increament(){
  //   setCount(count+1);
  // }

  // function decreament(){
  //   setCount(count-1);
  // }

  return (
    <div>
      <button onClick={toggleTest}>Toggle</button>
      {show && <h1>Hello Riya</h1>}
    </div>
  )
}

export default App
