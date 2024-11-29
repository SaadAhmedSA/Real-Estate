import React from 'react'
import { assets } from '../assets/assets'
const About = () => {
  return (
    <div className='flex flex-col items-center justify-center mx-auto p-10 md:px-20 lg:px-32' id='about'>
     <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span className='underline underline-offset-4 under font-light decoration-1'>Us</span></h1>
     <p className='text-center text-lg mb-5 text-gray-500 max-w-80'>Passionate About Properties, Dedicated to your Vision.</p>
     <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
        <img src={assets.brand_img} alt="brand-image" className ='w-full sm:w-1/2 max-w-lg' />
        <div className='flex flex-col items-center  md:items-start mt-10 text-gray-900'>
            <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-20'>
             <div>
             <p className='text-4xl font-medium'>10+</p>
             <p>Years of Experience</p>
             </div>
             <div>
             <p className='text-4xl font-medium'>150+</p>
             <p>Project Completed</p>
             </div>
             <div>
             <p className='text-4xl font-medium'>50+</p>
             <p>Square Feet Delieverd</p>
             </div>
             <div>
             <p className='text-4xl font-medium'>70+</p>
             <p>Ongoing Projects</p>
             </div>
            </div>
             <p className='my-10 max-w-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, est necessitatibus saepe, illum, molestiae iste adipisci impedit molestias maiores reprehenderit fuga ipsam cum nobis nemo quisquam cupiditate autem iure nulla.</p>
             <button className='bg-black text-white px-8 py-2 rounded'>Learn More</button>

        </div>
     </div>
    </div>
  )
}

export default About