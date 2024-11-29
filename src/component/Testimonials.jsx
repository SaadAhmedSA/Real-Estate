import React from 'react'
import { assets, testimonialsData } from '../assets/assets'

const Testimonials = () => {
  return (
   <div className='container mx-auto py-5 pt-10 my-15 md:px-20 lg:px-32 w-full' id='testimonials'>

    <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Customer <span className='underline underline-offset-4 under font-light decoration-1'>Testimonials</span></h1>
    <p className='text-center text-lg mb-5 text-gray-500 '>Real Stories, From Those Who Found Home with Us

    </p>
      
     <div className='flex flex-wrap justify-center gap-8'>
       {testimonialsData.map((item,index)=>{
          return <div key={index} className='max-w-[300px] border shadow-lg px-6 py-12 text-center'>
            <img src={item.image} className='w-20 h-20 rounded-full mx-auto mb-4' alt={item.alt} />
            <h2>{item.name}</h2>
            <p>{item.title}</p>
            <div className='flex justify-center m-2'>
                {Array.from({length:item.rating},(item,index)=>{
                 return    <img key={index} src={assets.star_icon}/>
                })}
            </div>
            <p>{item.text}</p>
          </div>
       })}
     </div>
    </div>
  )
}

export default Testimonials