import style from './Footer.module.scss'
import {AiOutlineGithub,AiOutlineTwitter} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'


export const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.footerWrapper}> 
      <div className={style.icons}>
      <ul>
        <li>
          <a href="https://github.com/BalogunVictor">
            <AiOutlineGithub size={25} className={style.icon}/>
          </a>
        </li>

        <li >
          <a href="https://www.linkedin.com/in/balogun(moyinoluwa)victor">
            <BsLinkedin size={25} className={style.icon}/>
          </a>
        </li>

        <li>
          <a href="https://twitter.com/blvckaddiict">
            <AiOutlineTwitter size={25} className={style.icon}/>
          </a>
        </li>
      </ul>
      </div>

      <div className={style.vl}></div>
        
      </div>
    </div>
  )
}
