import "./index.scss"
import { Link } from "react-router-dom"
import LogoTitle from "../../assets/images/logo-a.png"
import { useEffect, useState } from "react"
import AnimatedLetters from "../AnimatedLetters"
import HeroBgAnimation from "./HeroBgAnimation"
import Loader from "react-loaders"
import LogoA from '../../assets/images/hero-img1.png'

const Home = () => {
  const [ letterClass, setLetterClass] = useState('text-animate')
const nameArray = ['j','a','y']
const jobArray = [
                    'M',
                    'E',
                    'R',
                    'N',
                    ' ',
                    'S',
                    't',
                    'a',
                    'c',
                    'k',
                    ' ',
                    'D',
                    'e',
                    'v',
                    'e',
                    'l',
                    'o',
                    'p',
                    'e',
                    'r'
]


useEffect(() => {
  setTimeout(()=> {
    setLetterClass('text-animate-hover')
  },3000)
},[])

  return (
    <>
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
                idx={13} />
              <br />
              <AnimatedLetters
                letterClass={letterClass} 
                strArray={jobArray}
                idx={10} />
              
              </h1>
              <br />
              <h2>Frontend Web Developer / React.js Developer</h2>
              <Link to='/contact' className='flat-button'>CONTACT ME</Link>
          </div>
          
          <div className="righside-animation">
            <div className="img-container">
              <img className='hero-img' src={LogoA} alt='A' />
              <HeroBgAnimation />
            </div>
          </div>
      </div>
      <Loader type='pacman' />
    </>
  )
}

export default Home