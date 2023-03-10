import Link from 'next/link'
import { ArrowDownButton, CustomButton } from '../Button/Button'
import style from './Main.module.scss'

export const Main = () => {
  return (
    <div className={style.main}>
      <div className={style.mainWrapper}>
        <div className={style.maintext}>
          <h1>Hi, i’m <span>Victor</span> </h1>
          <p>I’m a frontend developer based in Lagos, Nigeria. specializing in building quality,<br/>  responsive websites with exceptional user experience.<br/>
          Currently, I’m focused on building front-end web applications and integrating back-end technologies </p>
          </div>
              <div className={style.options}>
                <Link href='/resume' className={style.option}>
                <CustomButton>Resume</CustomButton>
                </Link>
                <Link href='/about'>
                <CustomButton>About</CustomButton>
                </Link>
                <Link href='/projects' className={style.option}>
                <CustomButton>Projects</CustomButton>
                </Link>
              </div>
          </div>
      </div>
  )
}
