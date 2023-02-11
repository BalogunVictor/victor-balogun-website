import style from './Button.module.scss'
import {FaArrowDown,FaArrowRight} from "react-icons/fa"

interface CustomButtonProps {
  children: React.ReactNode
}

export const ArrowDownButton = () => {
  return (
    <FaArrowDown className={style.arrowDown}/>
  )
}

export const ArrowRightButton = () => {
  return (
    <FaArrowRight className={style.arrowRight} />
  )
}

export const CustomButton = ({children}: CustomButtonProps) => {
  return (
    <button className={style.btn}> 
      {children}
    </button>
  )
}

