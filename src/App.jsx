import React,{useEffect} from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from'./components/Projects'
import Skills from './components/Skills'



function App() {


  return (
    <div className="box-border scroll-smooth select-none overflow-x-hidden">
  <Header />
  <Hero/>
  <About/>
  <Projects/>
  <Skills/>
  <Contact/>

    
    </div>
  )
}

export default App
