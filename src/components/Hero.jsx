import React,{useEffect} from 'react'
import profile from './profile.jpeg'
import AOS from "aos";
import "aos/dist/aos.css";
// import Dark from './Dark';

const Hero = () => {
    useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <main className='px-4 md:px-10 ' data-aos='zoom-in'>
       <div className='overflow-hidden min-h-[85vh] lg:max-w-7xl mx-auto flex flex-col lg:flex-row justify-evenly items-center '>
         <section className='leading-[2.5em '>
            <h1 className='text-[2.5em] md:text-[3.5em] font-bold'>I'm Stephen <span className='text-purple-700'>Okyere,</span></h1>
            <p className='font-semibold text-lg mb-8'>Frontend Developer &clubs; Content Creator</p>
            <a href="/steve#contact" className='bg-purple-600 py-4 px-10 w-[300px] rounded-[100px] '>
                Let's Link Up!&rarr;
            </a>

        </section>
        <img className="w-[30em] m-6 rounded-[9999px] overflow-x-hidden" src={profile} alt="" />
       </div>
    </main>
  )
}

export default Hero