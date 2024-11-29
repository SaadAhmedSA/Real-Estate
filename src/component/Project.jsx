import React, { useEffect, useState } from 'react'
import { assets, projectsData } from '../assets/assets'

const Project = () => {
    const [index, setIndex] = useState(0); // Current index for the slide
    const [cardsPerView, setCardsPerView] = useState(1); // Number of cards visible based on screen size

    // Adjust the number of cards per view based on window width
    useEffect(() => {
        const updateCardsPerView = () => {
            if (window.innerWidth >= 1024) {
                setCardsPerView(projectsData.length); // Show all projects on larger screens
            } else {
                setCardsPerView(1); // Show one project per view on smaller screens
            }
        };

        updateCardsPerView();
        window.addEventListener('resize', updateCardsPerView);

        return () => {
            window.removeEventListener('resize', updateCardsPerView);
        };
    }, []);

    // Function to go to the next project
    const next = () => {
        setIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
    };

    // Function to go to the previous project
    const prev = () => {
        setIndex((prevIndex) => (prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1));
    };
  return (
    <div className='container mx-auto py-5 pt-10 my-15 md:px-20 lg:px-32 w-full' id="Project">
         <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Project <span className='underline underline-offset-4 under font-light decoration-1'>Completed</span></h1>
         <p className='text-center text-lg mb-5 text-gray-500 '>Crafting Spaces, Building Legacies-Explore our Portfolio</p>

         <div className='flex justify-end items-center mb-5'>
            <button onClick={prev} className='p-5 bg-gray-800 rounded mr-4' aria-label='Previous'>
                <img src={assets.left_arrow} alt="Previous" />
            </button>
            <button onClick={next} className='p-5 bg-gray-800 rounded mr-4' aria-label='Next'>
                <img src={assets.right_arrow} alt="next" />
            </button>
         </div>

         <div className='overflow-hidden'>
            <div className='flex gap-8 transition transform duration-500 ease-in-out'
            style={{transform:`translateX(-${(index * 100) / cardsPerView}%)`}}>
              {
                projectsData.map((item,index)=>{
                    return(
                    <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4'>
                     <img src={item.image} alt="" className='w-full h-auto mb-14' />
                     <div className='absolute left-3 right-3  bg-white px-4 py-2 bottom-5 inline-block text-center shadow-md'>
                        <h2 className='text-xl font-semibold'>{item.title}</h2>
                        <p>{item.price} || {item.location}</p>
                    </div>
                    </div>
                    )
                })
              }
            </div>

         </div>
    </div>
  )
}

export default Project
// import React, { useEffect, useState } from 'react'
// import { assets, projectsData } from '../assets/assets'

// const Project = () => {
   

//     return (
//         <div className="container mx-auto py-5 pt-10 my-15 md:px-20 lg:px-32 w-full">
//             <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
//                 Project <span className="underline underline-offset-4 font-light decoration-1">Completed</span>
//             </h1>
//             <p className="text-center text-lg mb-5 text-gray-500">
//                 Crafting Spaces, Building Legacies-Explore our Portfolio
//             </p>

//             <div className="flex justify-end items-center mb-5">
//                 <button onClick={prev} className="p-5 bg-gray-800 rounded mr-4" aria-label="Previous">
//                     <img src={assets.left_arrow} alt="Previous" />
//                 </button>
//                 <button onClick={next} className="p-5 bg-gray-800 rounded mr-4" aria-label="Next">
//                     <img src={assets.right_arrow} alt="Next" />
//                 </button>
//             </div>

//             <div className="overflow-hidden">
//                 <div
//                     className="flex gap-8 transition-all duration-500 ease-in-out"
//                     style={{
//                         transform: `translateX(-${(index * 100) / cardsPerView}%)`,
//                     }}
//                 >
//                     {projectsData.map((item, index) => (
//                         <div key={index} className="relative flex-shrink-0 w-full sm:w-1/4">
//                             <img src={item.image} alt={item.title} className="w-full h-auto mb-14" />
//                             <div className="absolute left-3 right-3 bg-white px-4 py-2 bottom-5 inline-block text-center shadow-md">
//                                 <h2 className="text-xl font-semibold">{item.title}</h2>
//                                 <p>
//                                     {item.price} || {item.location}
//                                 </p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Project;
