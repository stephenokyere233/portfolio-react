import React,{useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const Project = ({src,description,name,link,key}) => {
   useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section className='border-2 rounded-2xl overflow-hidden shadow-lg shadow-gray-300 snap-y scroll-mt-[7.5em]' key={key} data-aos="zoom-in">
        <img src={src} alt="" className='h-[320px] object-cover bg-cover w-full' />
        <article className='px-6 py-4 leading-[2em] '>
            <h3 className='font-semibold text-xl'>{name}</h3>
            <p>{description}</p>
            <a href={link} className='text-purple-600'>Go To Site&rarr;</a>
        </article>

    </section>
  )
}

export default Project