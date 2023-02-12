import { Skills } from '@/components/Skillls/Skills'
import { skills } from 'Data'
import Image from 'next/image'
import Link from 'next/link'
import style from '../styles/about.module.scss'


function about(){
  return (
    <div className={style.about}>
       <h1 className={style.Title}>About Me.</h1>
      <div className={style.aboutWrapper}>

        <div className={style.aboutMe}>

          <div className={style.aboutText}>
            <h1> Who I am.</h1>
            <p>My name is Victor Balogun,I specialize in building mobile responsive front-end UI applications that connect with API’s and other backend technologies.I’m very passionate about learning new technologies and understand there is more one way to accomplish a task. 
            I love using my skill set to simplify work for enterprises.Though I am most proficient in building front-end applications using HTML, SCSS, Javascript, React and Typescript, I am a quick learner and can pick up new tech stacks as needed. I believe that being a great developer is not using one specific language, but choosing the best tool for the job.
            </p>
            <p>
              I started web development in 2020,i have built multiple projects like e-commerce, chat and social applcation and also cloned popular brands website like Netflix and Youtube. In my spare time I run a Fashion Brand where I create aesthetic designs.
            </p>
            <p>check out some of my <Link rel="stylesheet" href="/projects">projects</Link> </p>
          </div>

          <div className={style.aboutImage}>
            <Image 
              height={300}
              width={400}
              src="/assets/victor.png" 
              alt="victorImage" 
            />
          </div>

        </div>

        <div className={style.mySkills}>
          <h1>My skills</h1>
          <div className={style.mySkillsWrapper}>
            <Skills  Skill={skills}  />
          </div>
        </div>
        </div>
    </div>
  )
}

export default about
