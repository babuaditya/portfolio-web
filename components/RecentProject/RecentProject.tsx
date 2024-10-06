import HoverCard from './HoverCard'
const HoverCardData:{
    image:string,
    title:string,
    description:string,
    tools:string[]
}[]=[
{
    image: 'Project/cost-cal.jpg',
    title: 'Cost Calculator',
    description: 'Under the guidance of Mr. Unnikrishnan and Dr. Neeraj Bhanot, I created a groundbreaking web application that streamlines project cost estimates for 37 CSIR laboratories in India during my CSIR-NPL internship.This innovation increases productivity and lowers costs in the research environment by improving efficiency',
    tools: ['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg','https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg','https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg']
},
{
    image: 'Project/call-center.jpg',
    title: 'Cost Calculator',
    description: 'This project is a comprehensive call center solution that integrates Asterisk and Twilio for telephony, with a dynamic dashboard built using Node.js and React.js. It also includes Rasa NLU for an AI voice assistant. The entire application is containerized using Docker and deployed on AWS EC2 for scalability and reliability.',
    tools: ['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg','https://www.svgrepo.com/show/354472/twilio-icon.svg','https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg','https://upload.wikimedia.org/wikipedia/commons/e/e4/Rasa_nlu_horizontal_purple.svg']
},
{
    image: 'Project/tiffin.jpg',
    title: 'Cost Calculator',
    description: 'This mobile application is designed for Dabbawalas to efficiently manage billing and for customers to place, cancel, and pay for their orders. Built using React Native and Supabase, the app provides a seamless experience for both Dabbawalas and their customers.',
    tools:['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg','https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg','https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg']
},
]
function RecentProject() {
  return (
    <div>
        <div>
        <h1 className='text-5xl font-bold text-secondary-light mb-16 mt-16 text-center'>Recent Project</h1>
        <div className='flex justify-center items-center '>

        <div  className='grid grid-cols-3 gap-4'>
           {HoverCardData.map((item, index) => {
            return( <HoverCard key={index+1} image={item.image} title={item.title} description={item.description} tools={item.tools}/>);
           })}
        </div>
        </div>
        </div>
    </div>
  )
}

export default RecentProject
