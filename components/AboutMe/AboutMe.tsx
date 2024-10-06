
function AboutMe() {
  return (
    <div className='w-full  flex flex-row space justify-between item-center py-10 gap-40 px-10'>
        <div className='flex justify-center items-center'>
            <h1 className='text-center bold text-secondary-light text-6xl font-inter font-bold'>About Me</h1>
        </div>
        <div className='w-3/5 font-semibold text-justify text-lg text-primary-light'>
            <p>
            As a frontend developer, I specialize in building scalable, low-latency single-page applications with a focus on SEO optimization and responsiveness. I prioritize creating intuitive user interfaces and seamless user experiences to enhance engagement across all devices. My approach emphasizes clean, maintainable code to ensure readability and facilitate collaboration. I am committed to achieving high test coverage with unit tests and strive for mutation scores near 100% to ensure robust and reliable applications. By integrating these practices, I aim to deliver web solutions that are efficient, user-friendly, and impactful.
            </p>
        </div>
    </div>
  )
}

export default AboutMe
