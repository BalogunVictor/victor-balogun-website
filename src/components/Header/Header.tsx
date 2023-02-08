import Link from 'next/link';
import { useState } from 'react';
import {RiMenu4Line} from 'react-icons/ri';
import {GrClose} from 'react-icons/gr'
import './Header.scss'

export const Header = () => {
  const [clicked, setClicked] = useState(false);

  const handleClicked = () => {
    setClicked((prev) => !prev);
  };

  return (
    <div className="header">
      <div className="headerWrapper">

        <Link  href="/" className="logo">  {'<victor.Balogun/>'} </Link>

        <div className={clicked ? "nav active" : "nav"}>

          <div className="menuIcon" onClick={handleClicked}>
            <div className="menuIconWrapper">
            {clicked ? <GrClose  className='close'/> : <RiMenu4Line className='open' />}
            </div>
          </div>
          <div onClick={handleClicked} className="links">
            <Link href="/" className="link">Home</Link>
            <Link href="/projects" className="link">Projects</Link>
            <Link href="/resume" className="link">Resumé</Link>
            <Link  href="/aboutme" className="link">About</Link>
          </div>
        </div>
      </div>
      <hr className='headerHr' />
    </div>
  )
}
