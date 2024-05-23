import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { Outlet, NavLink} from 'react-router-dom'
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
                        <nav>
                            <NavLink
                                exact="true"
                                activeclassname="active"
                                to="/skills/languages">
                                    Languages
                            </NavLink>
                            <NavLink
                                exact="true"
                                activeclassname="active"
                                to="/skills/frameworks">
                                    Frameworks / Libraries
                            </NavLink>
                            <NavLink
                                exact="true"
                                activeclassname="active"
                                to="/skills/databases">
                                    Databases
                            </NavLink>
                        </nav>
                    </div>
                </div>
                <Outlet />
        </div> 
        <Loader type='pacman' />
    </>
  )
}


export default Skills