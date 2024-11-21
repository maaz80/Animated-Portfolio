import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import AnimatedCursor from 'react-animated-cursor'

function App() {
  return (
    <div className='bg-gradient-to-r from-black to-emerald-900 h-screen poppins-regular w-full'>
   
      <AnimatedCursor
      innerSize={28}
      outerSize={148}
      color='493, 411, 111'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
    />
      <Navbar/>
      <Home/>
    </div>
  )
}

export default App
