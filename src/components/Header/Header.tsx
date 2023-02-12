import Link from 'next/link';
import { useState } from 'react';
import {RiMenu4Line} from 'react-icons/ri';
import {GrClose} from 'react-icons/gr'
import style  from './Header.module.scss';

export const Header = () => {
  const [clicked, setClicked] = useState(false);

  const handleClicked = () => {
    setClicked((prev) => !prev);
  };

  return (
    <div className={style.header}>
      <div className={style.headerWrapper}>

        <Link  href="/" className={style.logo}>  {'<victor.Balogun/>'} </Link>

      <div className={clicked ? style.nav + " " + style.active : style.nav }>

          <div className={style.menuIcon} onClick={handleClicked}>
          <div className={style.menuIconWrapper}>
            {clicked ? <GrClose  className={style.close}/> : <RiMenu4Line className={style.open} />}
            </div>
          </div>
          <div onClick={handleClicked} className={style.links}>
            <Link href="/" className={style.link}>Home</Link>
            <Link href="/projects" className={style.link}>Projects</Link>
            <Link href="/resume" className={style.link}>Resumé</Link>
            <Link  href="/about" className={style.link}>About</Link>
          </div>
        </div>
      </div>
      <hr className={style.headerHr} />
    </div>
  )
}
