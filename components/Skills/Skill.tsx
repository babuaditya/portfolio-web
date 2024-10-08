import SkillsCard from './SkillsCard'
const SkillData:{image:string,title:string}[] = [ 
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
        title: 'React Js.'
    },
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
        title: 'Next Js'
    },
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
        title: 'Figma'
    },
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg',
        title: 'Supabase'
    },
    {
        image:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
        title: 'Github'
    },
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg',
        title: 'Go'
    },
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
        title: 'Javascript'
    },
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
        title: 'Typescript'
    },
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-line-wordmark.svg',
        title: 'Nodejs'
    },
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
        title: 'Express js'
    },

]
function Skill() {
    return (
        <div className='grid lg:grid-cols-4  grid-cols-2  gap-5 mt-9'>
            <div className='lg:col-span-4 flex justify-center items-center w-full'>
                <h1 className='text-5xl font-bold text-secondary-light mb-10  text-center'>Skills</h1>
                </div>
                <div></div>
            {SkillData.map((item, index) => {
                
                return(
                    <SkillsCard key={index+1} image={item.image} title={item.title}/>
                );
            })}
        </div>
    )
}

export default Skill
