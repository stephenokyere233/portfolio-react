import React from 'react'
import logo from './logo.png'

const Header = ({back}) => {
  return (
    <header className={`flex justify-between lg:justify-around z-10 ${back} p-6  items-center sticky top-0`}>
        <a href="steve#">
          <img src={logo} alt="" className="w-[50px]" />
        </a>
        <nav className=' hidden lg:flex gap-x-10 text-[18px] font-semibold'>
            <a href="/steve#">Home</a>
            <a href="/steve#about">About</a>
            <a href="/steve#projects">Projects</a>
            <a href="/steve#skills">Skills</a>
            <a href="/steve#contact">Contact</a>
        </nav>
        <a className='bg-purple-600 p-4 rounded-[100px]'href={'https://resume.showwcase.com/devsteve.pdf'} >
            Download CV
        </a>
      
    </header>
  )
}

export default Header
