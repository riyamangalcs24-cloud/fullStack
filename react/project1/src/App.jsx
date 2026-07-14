import React from 'react';
import './App.css';
import Navbar from './components/navbar'
import Welcome from './components/welcome';
import Landing from './components/Landing';
import Hero from './components/Hero';
import Child from './components/child';
const App = () => {
  return (
    <div>
      <h1>Hello</h1>
      <p>This is from my side</p>
      <Navbar/>
      <Welcome name="Riya"/>
      <Landing name="Riya" age="12" isStudent="true"/>
      <Landing name="Sneha" age="21" isStudent="false"/>
      <Hero name="Riya" age="23" year="2023"/>
      <Hero name="Priya" age="22" year="2342"/>
      <Child>
        <h1>Hello from Children Side</h1>
        <p>Welcome to React children props</p>
      </Child>

    </div>
  )
}

export default App
