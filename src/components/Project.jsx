import React from 'react'

const Project = ({src,description,name,link,key}) => {
  return (
    <div className='border-2 rounded-2xl overflow-hidden shadow-lg shadow-gray-300' key={key}>
        <img src={src} alt="" className='h-[320px] object-cover bg-cover w-full' />
        <article className='px-6 py-4 leading-[2em] '>
            <h3 className='font-semibold text-xl'>{name}</h3>
            <p>{description}</p>
            <a href={link} className='text-purple-600'>Go To Site&rarr;</a>
        </article>

    </div>
  )
}

export default Project