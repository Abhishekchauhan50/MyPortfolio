import React from 'react'
import Profile from './components/Profile'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Connection from './components/Connection'


function App() {
  return (
    <>
    
    <div>
      <Profile/>
    </div>
    <hr />
    <div>
      <About/>
    </div>
    <hr />
    <div>
      <Skills/>
    </div>
    <hr />
    <div>
      <Projects/>
    </div>
    <hr />
    <div>
      <Connection/>
    </div>
    </>
  )
}

export default App

