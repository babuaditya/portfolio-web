
function Hero() {
  return (
    <div className='grid grid-cols-12 mt-[120px]'>
        <div className='col-span-5'>
            <h1 className='text-[72px] font-extrabold text-secondary-light'>
            Hy! I Am <br/>Aditya Dev
            </h1>
            <button className='py-2 px-10 bg-primary-light rounded-md hover:bg-orange-400 mt-14'>
                    <h1 className='text-[20px] font-bold text-white'>Hire Us</h1>
                    </button>
        </div>
        <div className='col-start-6 col-span-12  flex justify-end'>
            <img src='./image.png' alt='hero' loading="lazy" className='w-[340px] h-[380px] object-cover'/>
            </div>
    </div>
  )
}

export default Hero
