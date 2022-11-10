import React,{useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const Project = ({src,description,name,link,key}) => {
   useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const styles={
        // backdropFilter: `blur(25px) saturate(200%)`,
    // webkitBackdropFilter: `blur(25px) saturate(200%)`,
    // border: `1px solid rgba(255, 255, 255, 0.125)`,
  }
  return (
    <section className='backdrop-blur-[25px] backdrop-saturate-[200%] h-[320px]  md:h-[450px] bg-[rgba(17, 25, 40, 0.37)]  rounded-2xl overflow-hidden shadow-2xl snap-y scroll-mt-[7.5em] ' key={key} data-aos="zoom-in">
        <img src={src} alt="" className='h-[200px] md:h-[320px] object-cover bg-cover w-full' />
        <article className='px-6 py-4 leading-[2em] '>
            <h3 className='font-semibold text-xl'>{name}</h3>
            <p>{description}</p>
            <a href={link} className='text-purple-600'>Go To Site&rarr;</a>
        </article>

    </section>
  )
}

export default Project