
function SkillsCard({image, title}:{image:string, title:string}) {

  return (   
 
        <div className='lg:py-16 lg:px-[40px] py-8 px-10 bg-secondary-light hover:bg-primary-light rounded-lg  pointer-events-auto'>
            <div className='flex justify-center items-center'>
                <img src={image} alt='skill' className='lg:w-[100px] lg:h-[100px] w-[40px] h-[40px] '/>
                </div>
                <div className='flex justify-center items-center mt-6 text-white font-bold text-3xl '>
                    <h1>{title}</h1>
                </div>
        </div>

  )
}

export default SkillsCard
