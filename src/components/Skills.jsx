import React from 'react'
import {FaCss3, FaHtml5, FaJs, FaReact,FaGit} from 'react-icons/fa'


const Skills = () => {
  let skillStyle=`px-4 py-2 flex items-center w-[180px] rounded-[9999px] justify-center shadow-lg shadow-gray-300'`
  return (
    <section id="skills" className='lg:max-w-7xl w-screen px-8 lg:px-20 min-h-[75vh] mx-auto py-10 snap-y scroll-mt-[7.5em]'>
        <h2 className='font-[500] text-5xl pb-6' data-aos='zoom-in'>Tech Stack</h2>
        <p className='text-xl lg:text-2xl'>Tools I can work with</p>
        <section className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 text-xl mt-10'>
        <div className={skillStyle}>
            <p className='px-4'>HTML5</p>
            <FaHtml5/>
        </div>
             <div className={skillStyle}>
            <p className='px-2'>CSS3</p>
            <FaCss3/>
        </div>
             <div className={skillStyle}>
            <p className='px-2'>JavaScript</p>
            <FaJs/>
        </div>
             <div className={skillStyle}>
            <p className='px-2'>ReactJS</p>
            <FaReact/>
        </div>
          <div className={skillStyle}>
            <p className='px-2'>TailwindCSS</p>
            <FaReact/>
        </div>
              <div className={skillStyle}>
            <p className='px-2'>Git</p>
            <FaGit/>
        </div>
        </section>



    </section>
  )
}

export default Skills