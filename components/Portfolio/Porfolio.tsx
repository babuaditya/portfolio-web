//@ts-ignore
const Card=({image,title,description})=>{
    return(
        <div className='flex justify-between items-center bg-white rounded-md shadow-md p-5 mb-4'>
        <div className='flex   justify-between gap-6 max-sm:flex-col'>
            <div className='flex justify-center items-center'>
            <div className=' bg-[#F9E7DB] p-5 rounded-[50%]'>
            <img src={image} height={"80px"} width={"80px"} alt="website-logo" className='max-w-none'/>
                </div>
            </div>
                <div className="">
                    <h1 className='text-2xl font-bold text-secondary-light'>
                       {title}</h1>
                    <p className='text-justify mt-5 text-lg font-semibold text-secondary-light'>
                        {description}
                        </p>
                </div>
            </div>
        </div>
    )
}
const ServiceData:{
    image:string,
    title:string,
    description:string,
}[]=[
    {
        image:"https://www.svgrepo.com/show/494486/website-program.svg",
        title:"Web Development",
        description:"I design and develop responsive websites using modern technologies like React, Nextjs, and Tailwind CSS. I also build serverless applications using Supabase and Firebase."
    },
    {
        image:"Project/arch.png",
        title:" Solution Architect",
        description:"I help You to build website and app which are scalable and reliable. I also provide consultation on how to improve your existing website and app."
    },
    {
        image:"Project/ui-ux.png",
        title:" UI/UX Design",
        description:"I design user-friendly interfaces and engaging user experiences for websites and mobile applications. I use Figma to create wireframes and prototypes."
    }
]
function Porfolio() {
  return (
    <div className='mt-24 lg:grid grid-cols-12 max-sm:flex max-sm:flex-col-reverse  gap-10 '>
               
        {/* <h1 className='text-5xl font-bold text-secondary-light mb-16 text-center'>Services</h1> */}
       
        <div className='bg-[#F9E7DB] p-10 lg:col-span-5 rounded-md '>
           {ServiceData.map((item, index) => {
            return( <Card key={index+1} image={item.image} title={item.title} description={item.description}/>);
           })}
        </div>
        <div className='col-start-7 col-end-13 max-sm:mx-10  '>
        <div className='flex items-center '>
           <h1 className='text-6xl text-secondary-light font-extrabold text-center'>My Awesome
            <h1 className='text-primary-light text-left'>Services</h1>
            </h1><br/>
            </div>
            <p className='text-lg font-semibold text-justify mt-6'>I provide a range of digital services focused on creating responsive and dynamic web solutions. My expertise in Web Development includes using React, Next.js, and Tailwind CSS, along with building serverless applications using Supabase and Firebase. I also offer Solution Architecture to design scalable and reliable digital platforms.</p>
            <p className='text-lg font-semibold text-justify mt-6'>
            In UI/UX Design, I craft intuitive user experiences for websites and mobile apps. Using Figma, I develop wireframes and prototypes that align user needs with business goals, ensuring seamless and engaging user journeys. As a Solution Architect, I provide strategies to build and optimize digital products, ensuring they meet performance and scalability standards. I work closely with clients to offer tailored solutions, transforming concepts into realized products. My consulting services include evaluating existing websites and apps to enhance functionality and user engagement. By combining user-centric design with cutting-edge technology, I deliver holistic solutions that drive success and elevate user experiences.
            </p>
        </div>
    </div>
  )
}

export default Porfolio
