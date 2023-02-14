import Image from 'next/image';
import style from './Skill.module.scss'

interface skillsProps {
  Skill: {
    id: number;
    logo: string;
    name: string;
  }[]
}

export const Skills = (props: skillsProps) => {
  return (
    <div className='w-full lg:h-screen p-2 grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
      { props.Skill.map(skill  => { 
          return (
            <div key={skill.id} className=''>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300' >
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image 
                  src={skill.logo}
                  width='64'
                  height='64' 
                  alt='/' 
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='uppercase'>{skill.name}</h3>
              </div>
            </div>
            </div>
            </div>
          )
        })}
      </div>
  
  )
}
