import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='h-[100vh] flex items-center justify-center  w-full ' id='header'>
        <Navbar/> 

<div className='  text-white text-center lg:mt-5'>
    <h2 className='text-5xl sm:text-6xl mx-auto max-w-2xl font-semibold lg:mt-2'>Explore Homes that fit your dreams</h2>
    <div className='space-x-2 mt-10'>
    <a href="#Project"  className=" bg-transparent border border-white text-white font-semibold py-3 px-8 rounded-full transition duration-200">Project</a>
    <a href="#contact-form"  className=" bg-white border border-white text-black font-semibold py-3 px-8 rounded-full  transition duration-200">Get in touch</a>
    </div>
</div>
    </div>
  )
}

export default Header