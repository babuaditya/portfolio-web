import './Experience.css'
import ExperienceStepper from './ExperianceStepper'
const ExperienceData:{year:string,title:string,location:string,description:string}[] = [
    {
        year: '2024',
        title: 'Software Developer Engineer-I',
        location: 'P99 Soft., Hyderabad',
        description: 'As a React developer intern at P99 for Electronic Arts, I developed a Next.js application using micro frontend architecture. My responsibilities included writing unit tests with 100% coverage and collaborating with the backend team. By following agile methodologies, we efficiently delivered features, leading to my conversion into a Software Development Engineer (SDE) due to my contributions and growth.'
    },
    {
        year: '2023',
        title: 'Intern',
        location: 'CSIR-NPL, New Delhi',
        description: 'Under the guidance of Mr. Unnikrishnan and Dr. Neeraj Bhanot, I created a groundbreaking web application that streamlines project cost estimates for 37 CSIR laboratories in India during my CSIR-NPL internship. This innovation increases productivity and lowers costs in the research environment by improving efficiency '
    }
]
function Experience() {
  return (
    <div className='mt-20 mb-[150px]'>
        <h1 className='text-5xl font-bold text-secondary-light mb-16 text-center'>Experience</h1>
        {ExperienceData.map((item, index) => {
            return( <ExperienceStepper key={index+1} year={item.year} title={item.title} location={item.location} description={item.description}/>);
        })}
   
   
    </div>
  )
}

export default Experience
