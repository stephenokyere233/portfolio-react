import React,{useEffect} from 'react'
import Project from './Project'
import { ProjectData } from '../Data'
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
   useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section id="projects" className='lg:max-w-7xl w-screen px-8 lg:px-20  min-h-[85vh] mx-auto py-10  snap-y scroll-mt-[6em]'>
        <h2 className='font-[500] text-5xl pb-6' data-aos="zoom-in">Projects</h2>
        <p className='text-xl lg:text-2xl'>Some stuff I built</p>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-20   mt-10'>
          {ProjectData.map(project=>(<Project key={project.id} name={project.name}
          description={project.desc}
          src={project.imgSrc}
          link={project.siteLink}/>))}
        </div>
    </section>
  )
}

export default Projects