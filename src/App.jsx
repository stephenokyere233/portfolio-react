// import React,{useEffect} from 'react'
import { useState } from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Dark from './components/Dark'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from'./components/Projects'
import Skills from './components/Skills'
// import { DarkContext,DarkProvider } from './DarkContext'
// DarkContext,


function App() {
  const[dark,setDark]=useState(false)
function toggle(){
  setDark(prev=>prev=!prev)
  localStorage.setItem('dark',dark)
  // addDark()
}
// window.addEventListener('load',()=>{
  // if(toggle){
  // let stored=localStorage.setItem('dark',dark)
  // console.log(stored)
  // if(toggle()){
  //   localStorage.setItem('dark',true)
  // }
  // else{
  //   localStorage.setItem('dark',false)
  // }
  function check(){
    if(localStorage.getItem('dark')==='true'){
      setDark(true)
      console.log(true)
    }
    else{
      setDark(false)
      console.log(false);
    }
  }
  window.addEventListener('load',check)
  // check()
  // console.log(localS);
// })

  return (
    // <DarkProvider>
    <div className={`box-border scroll-smooth select-none ${dark?'bg-[#222] text-white':'bg-white text-black'}`}>
  <Header back={dark?'bg-[#222]':'bg-white'}/>
  <Hero/>
  <Dark onToggle={toggle} dark={dark} back={dark?'border-white':'border-[#222]'}/>
  <About/>
  <Projects/>
  <Skills/>
  <Contact/>
    </div>
    // </DarkProvider>
  )
}

export default App
