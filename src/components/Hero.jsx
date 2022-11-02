import React from 'react'
import profile from './profile.jpeg'

const Hero = () => {
  return (
    <main className='min-h-[85vh] max-w-7xl m-auto flex justify-around items-center'>
        <section className='leading-[2.5em'>
            <h1 className='text-[3.5em] font-bold'>I'm Stephen <span className='text-purple-700'>Okyere,</span></h1>
            <p className='font-semibold text-lg'>Frontend Developer &clubs; Content Creator</p>
            <button className='bg-purple-600 py-2 px-6 rounded-[100px] my-8'>
                Let's Link Up!&rarr;
            </button>

        </section>
        <img className="w-[30em] rounded-[9999px]" src={profile} alt="" />
    </main>
  )
}

export default Hero