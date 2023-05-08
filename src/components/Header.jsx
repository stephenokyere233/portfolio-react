import React from 'react'
import logo from './logo.png'
import resume from "./resume.pdf"

const Header = () => {
  return (
    <header className={`max-w-7xl mx-auto flex justify-between z-10 bg-white dark:bg-[#222] px-6 h-[5em]  items-center sticky top-0`}>
        <a href="#">
          <img src={logo} alt="" className="w-[50px]" />
        </a>
        <nav className=' hidden lg:flex gap-x-10 text-[18px] font-semibold'>
            <a href="#">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
        </nav>
        <a className='bg-purple-600 p-4 rounded-[100px]'href={resume} >
            Download CV
        </a>
      
    </header>
  )
}

export default Header
