import React,{useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
    useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section id="about" className='lg:max-w-7xl w-screen min-h-[70vh] mx-auto px-8 lg:px-20 py-10 snap-y scroll-mt-[6em]' >
        <h2 className='font-[500] text-5xl pb-6' data-aos='zoom-in'>About</h2>
        <p className='align-justify leading-[2em] lg:leading-[2.1em] text-lg lg:text-2xl' data-aos='zoom-in'>
            Tech is one thing I'm very passionate about,I love to learn new
            stuff. I was a bit late to programming tho buh I'm doing my best
            and I try to document my progress everyday by building new stuff.
            I craft stunning, intuitive
            websites and mobile apps that deliver exceptional
            user experiences. Turning your vision into reality on
            the web, one pixel at a time.
        </p>
    </section>
  )
}

export default About