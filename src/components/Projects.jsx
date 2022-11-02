import React from 'react'
import Project from './Project'
import { ProjectData } from '../Data'

const Projects = () => {
  return (
    <section className='max-w-7xl min-h-[85vh] mx-auto px-20 py-10'>
        <h2 className='font-[500] text-5xl pb-6'>Projects</h2>
        <p className='text-2xl'>Some stuff I built</p>
        <div className='grid grid-cols-2 gap-20 mt-10'>
          {ProjectData.map(project=>(<Project key={project.name} name={project.name}
          description={project.desc}
          src={project.imgSrc}
          link={project.siteLink}/>))}
        </div>
    </section>
  )
}

export default Projects