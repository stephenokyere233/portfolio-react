import React,{useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
    useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section id="about" className='lg:max-w-7xl sm:max-w-screen  min-h-[70vh] mx-auto px-20 py-10 snap-y scroll-mt-[7.5em]' >
        <h2 className='font-[500] text-5xl pb-6' data-aos='zoom-in'>About</h2>
        <p className='align-justify leading-[2em] text-2xl' data-aos='zoom-in'>
            Tech is one thing I'm very passionate about,I love to learn new
            stuff. I was a bit late to programming tho buh I'm doing my best
            and I try to document my progress everyday by building new stuff.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus a ea pariatur similique eum est aliquid rerum reiciendis, incidunt ratione!
        </p>
    </section>
  )
}

export default About