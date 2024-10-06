
import React from 'react'

function ExperianceStepper({year, title, location, description}:{year:string, title:string, location:string, description:string}) {
  return (
    <div className='flex flex-row gap-24'>
<div className='px-10 py-15  bg-primary-light clip-path '>
    <h1 className='text-white font-bold text-4xl text-center my-1'>{year}</h1>
</div>
<div className='flex flex-row gap-4 relative '> 
    <div className='flex-row-with-line ml-[14px] mt-2'>
    
    </div>
    <div>
    <svg height="30" width="30" xmlns="http://www.w3.org/2000/svg">
<circle r="10" cx="15" cy="15" fill="#302A25" />
</svg>
    </div>
    <div className=''>
        <h1 className='font-bold text-2xl text-secondary-light'>{title}</h1>
        <h2 className='font-semibold text-xl  text-secondary-light'>{location}</h2>
        <p className='pb-6 text-xl mt-3 text-primary-light text-justify'>
            {description}
        </p>
        </div>
        </div>
        
</div>

  )
}

export default ExperianceStepper
