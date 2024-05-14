import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'

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
                        <div className='skill-languages'>Languages</div>
                        <div className='skill-frameworks'>Frameworks / Libraries</div>
                        <div className='skill-database'>Databases</div>
                    </div>
                </div>
            </div>
        </div>
        <div>

        </div>

    </>
  )
}

export default Skills