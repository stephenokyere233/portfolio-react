import React from 'react'
import {FaTwitter,FaEnvelope,FaWhatsapp,FaGithub,FaYoutube,FaInstagram,FaLinkedin} from "react-icons/fa"

const Contact = () => {
  return (
    <section id="contact" className='max-w-7xl min-h-[85vh] mx-auto px-20 py-10 '>
              <h2 className='font-[500] text-5xl pb-6'>Let's Link Up</h2>
        {/* <p className='text-2xl'>Want to send me a message reach out on my socials</p> */}
       <div className="flex gap-10 my-10">
        <a href="" className="text-4xl text-gray-400"><FaEnvelope/></a>
        <a href="" className="text-4xl text-blue-500"><FaTwitter/></a>
        <a href="" className="text-4xl text-blue-800"><FaLinkedin/></a>
        <a href="" className="text-4xl"><FaGithub/></a>
        <a href="" className="text-4xl text-red-600"><FaYoutube/></a>
        <a href="" className="text-4xl text-purple-600"><FaInstagram/></a>

       </div>

    </section>
  )
}

export default Contact