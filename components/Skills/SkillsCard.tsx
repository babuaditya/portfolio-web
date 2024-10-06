import React from 'react'

function SkillsCard({image, title}:{image:string, title:string}) {

  return (   
 
        <div className='py-16 px-[40px] bg-secondary-light hover:bg-primary-light rounded-lg  pointer-events-auto'>
            <div className='flex justify-center items-center'>
                <img src={image} alt='skill' className='w-[100px] h-[100px]'/>
                </div>
                <div className='flex justify-center items-center mt-6 text-white font-bold text-3xl '>
                    <h1>{title}</h1>
                </div>
        </div>

  )
}

export default SkillsCard
