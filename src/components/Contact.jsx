import React from 'react'
import {FaTwitter,FaEnvelope,FaWhatsapp,FaGithub,FaYoutube,FaInstagram,FaLinkedin} from "react-icons/fa"

const Contact = () => {
  return (
    <section id="contact" className='lg:max-w-7xl w-screen px-8 lg:px-20 min-h-[85vh] mx-auto  py-10 '>
              <h2 className='font-[500] text-5xl pb-6' >Let's Link Up</h2>
        {/* <p className='text-2xl'>Want to send me a message reach out on my socials</p> */}
       <div className="flex flex-wrap gap-8 my-10 px-4">
        <a href="mailto:stephenokyere621@gmail.com"  className="text-5xl text-gray-400"><FaEnvelope/></a>
        <a href="https://twitter.com/dev__steve" className="text-5xl text-blue-500"><FaTwitter/></a>
        <a href="https://www.linkedin.com/in/devsteve23/?originalSubdomain=gh" className="text-5xl text-blue-800"><FaLinkedin/></a>
        <a href="https://github.com/stephenokyere233" className="text-5xl"><FaGithub/></a>
        <a href="https://www.youtube.com/@stevedevelops" className="text-5xl text-red-600"><FaYoutube/></a>
        <a href="https://www.instagram.com/dev.__steve/" className="text-5xl text-purple-600"><FaInstagram/></a>

       </div>

    </section>
  )
}

export default Contact
// https://mail.google.com/mail/?view=cm&fs=1&to=someone@gmail.com&su=subject_here&body=body_here