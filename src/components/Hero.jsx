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
    <main className='min-h-[85vh] max-w-7xl sm: m-auto flex flex-col lg:flex-row justify-around items-center' data-aos='zoom-in'>
        <section className='leading-[2.5em'>
            <h1 className='text-[3.5em] font-bold'>I'm Stephen <span className='text-purple-700'>Okyere,</span></h1>
            <p className='font-semibold text-lg mb-8'>Frontend Developer &clubs; Content Creator</p>
            <a href="/steve#contact" className='bg-purple-600 py-4 px-6 rounded-[100px] '>
                Let's Link Up!&rarr;
            </a>

        </section>
        <img className="w-[30em] rounded-[9999px]" src={profile} alt="" />
        {/* <Dark/> */}
    </main>
  )
}

export default Hero