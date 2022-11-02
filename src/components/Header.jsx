import React from 'react'

const Header = () => {
  return (
    <header className='flex justify-around shadow-md z-10 bg-white shadow-gray-200 p-6  items-center sticky top-0'>
        <div className="text-3xl font-bold">
            port<span className='text-purple-700'>folio</span>
        </div>
        <nav className='flex gap-x-10 text-[18px] font-semibold'>
            <p>Home</p>
            <p>About</p>
            <p>Projects</p>
            <p>Skills</p>
            <p>Contact</p>
        </nav>
        <button className='bg-purple-600 p-4 rounded-[100px]'>
            Download CV
        </button>
      
    </header>
  )
}

export default Header
