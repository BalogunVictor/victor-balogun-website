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
    <div className={style.skills}>
      { props.Skill.map(skill  => { 
          return (
            <div key={skill.id} >
             <div className={style.skillsWrapper}>
              <div className={style.card}>
                <div className={style.skillLogo}>
                <Image 
                  src={skill.logo} 
                  width='64'
                  height='64' 
                  alt='/' 
                />
                </div>
                <div className={style.skillName}>
                <h3>{skill.name}</h3>
              </div>
              </div>
             </div>
            </div>
          )
        })}

    </div>
  )
}
