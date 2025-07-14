import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faHtml5, faJsSquare, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons'

import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import Loader from 'react-loaders'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')


    useEffect(() => {
        setTimeout(()=>{
            setLetterClass('text-animate-hover')
        },3000)
    },[])

  return (
    <>
        <div className='container about-page'>
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass} 
                        strArray={[
                            'A',
                            'b',
                            'o',
                            'u',
                            't',
                            ' ',
                            'm',
                            'e',
                        ]}
                        idx={15}
                    />
                </h1>
                <p>
                I’m a MERN Stack Developer passionate about building modern, full-stack web applications. Currently working as a Junior Software Developer at AppExert.
                </p>

                <p>
                I specialize in both frontend and backend development using JavaScript-based technologies. I enjoy solving complex problems and writing clean, maintainable code.
                </p>
                <br/>
                <p>
                <span style={{ color: "#ffd700" }}>Frontend:</span> React.js, Next.js, jQuery, Tailwind CSS, SCSS, HTML, CSS
                </p>

                <p>
                <span style={{ color: "#ffd700" }}>Backend:</span> Node.js, Express.js, MongoDB, Mongoose, MySQL
                </p>
            </div>
            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faNodeJs} color='#21A366' />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faDatabase} color='#00758f ' />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
                    </div>
                </div>
            </div>
        </div>
        <Loader type='pacman' />
    </>
  )
}

export default About