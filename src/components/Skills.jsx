import React from 'react'
import {FaCss3, FaHtml5, FaJs, FaReact} from 'react-icons/fa'
import {} from 'react-icons/ai'


const Skills = () => {
  return (
    <section className='max-w-7xl min-h-[85vh] mx-auto px-20 py-10'>
        <h2 className='font-[500] text-5xl pb-6'>Tech Stack</h2>
        <p className='text-2xl'>Tools I can work with</p>
        <section className='grid grid-cols-5 gap-10 text-xl mt-10'>
        <div className='px-4 py-2 flex items-center w-[180px] rounded-[9999px] justify-center shadow-lg shadow-gray-300'>
            <p className='px-4'>HTML5</p>
            <FaHtml5/>
        </div>
             <div className='px-4 py-2 flex items-center w-[180px] rounded-[9999px] justify-center shadow-lg shadow-gray-300'>
            <p className='px-2'>CSS3</p>
            <FaCss3/>
        </div>
             <div className='px-4 py-2 flex items-center w-[180px] rounded-[9999px] justify-center shadow-lg shadow-gray-300'>
            <p className='px-2'>JavaScript</p>
            <FaJs/>
        </div>
             <div className='px-4 py-2 flex items-center w-[180px] rounded-[9999px] justify-center shadow-lg shadow-gray-300'>
            <p className='px-2'>ReactJS</p>
            <FaReact/>
        </div>
          <div className='px-4 py-2 flex items-center w-[180px] rounded-[9999px] justify-center shadow-lg shadow-gray-300'>
            <p className='px-2'>TailwindCSS</p>
            <FaReact/>
        </div>
        </section>



    </section>
  )
}

export default Skills