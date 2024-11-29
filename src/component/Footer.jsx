import React from 'react'
import { assets } from '../assets/assets'
const Footer = () => {
  return (
    <div className='bg-black text-white w-full py-8 px-4 md:px-20 lg:px-32'>
        <div className=' mx-auto flex flex-col gap-10 md:flex-row justify-between items-start'>
            <div className='w-full md:w-1/3'>
                 <img src={assets.logo_dark} alt="footer" />
                 <p className='mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe optio ipsam numquam quisquam assumenda dignissimos eligendi dolore facere aspernatur eum voluptatum nobis quae esse error impedit, ad similique porro iure!</p>
            </div>
            <div >
              <h3 className='text-xl'>Company</h3>
              <ul className='flex flex-col gap-3 mt-6'>
              <a href="#header" className='cursor-pointer hover:text-gray-400'>Home</a>
              <a href="#about"className='cursor-pointer hover:text-gray-400'>About</a>
              <a href="#contact-form"className='cursor-pointer hover:text-gray-400'>Contact</a>
              <a href="#" className='cursor-pointer hover:text-gray-400'>Privacy Policy</a>
              </ul>
            </div>
            <div className='md:w-1/3'>
              <h3 className='text-xl mb-4'>Subscribe to our NewsLetter!</h3>
              <p className='mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe optio ipsam</p>
              <div className='flex gap-2 mt-5'>
              <input type="text" placeholder='Enter your email' className='p-2 rounded '/>
              <button className='bg-blue-700 rounded px-4 py-2'>Submit</button>
              </div>
            </div>

        </div>
        <div className='mx-auto border-t mt-10 border-gray-500  text-center'>
            <p className='pt-3'>Copyright by Saad Ahmed || 2024. All Right Reserved.</p>
        </div>

    </div>
  )
}

export default Footer