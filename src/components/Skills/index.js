import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { Link, Outlet} from 'react-router-dom'
import Loader from 'react-loaders'


const Skills = () => {

    const [letterClass,setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(()=>{
            setLetterClass('text-animate-hover')
        },3000)
    },[])
  return (
    <>
        <div className="container skills-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={"Skills".split("")}
                            idx={12}      
                        />
                    </h1>
                    <div className="skills">
                        <div className="skill-container">
                            <div className='skill-languages'>
                                <Link to='/skills/languages'>Languages</Link> 
                            </div>
                            <div className='skill-frameworks'>
                                <Link to='/skills/frameworks'>Frameworks / Libraries</Link></div>
                            <div className='skill-database'>
                                <Link to='/skills/databases'>Databases</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Outlet />
        </div> 
        <Loader type='pacman' />
    </>
  )
}


export default Skills