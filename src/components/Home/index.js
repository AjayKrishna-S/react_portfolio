import "./index.scss"
import { Link } from "react-router-dom"
import LogoTitle from "../../assets/images/logo-a.png"
import { useEffect, useState } from "react"
import AnimatedLetters from "../AnimatedLetters"
import HeroBgAnimation from "./HeroBgAnimation"
import Logo from "./Logo"

const Home = () => {
  const [ letterClass, setLetterClass] = useState('text-animate')
const nameArray = ['j','a','y']


useEffect(() => {
  setTimeout(()=> {
    setLetterClass('text-animate-hover')
  },3000)
},[])

  return (
    <div className='container home-page'>
        <div className='text-zone'>
            <h1>
              <span className={letterClass}>H</span>
              <span className={`${letterClass} _12`}>i,</span>
              <br />
              <span className={`${letterClass} _13`}>I</span>
              <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt="developer" />
            <AnimatedLetters 
              letterClass={letterClass} 
              strArray={nameArray}
              idx={15} />
            </h1>
            <br />
            <h2>Frontend Web Developer / React.js Developer</h2>
            <Link to='/contect' className='flat-button'>CONTACT ME</Link>
        </div>
        <div className="righside-animation">
          <HeroBgAnimation />
          <div className="logo">
            <Logo />
          </div>
        </div>
    </div>
  )
}

export default Home