import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
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
                Results-driven Frontend Developer with a strong foundation in web development and a passion for creating visually appealing and intuitive user interfaces. Proficient in HTML, CSS, and JavaScript, with hands-on experience using modern frontend frameworks such as React.js and Boostrap. Adept at translating design mockups into responsive and interactive web applications. 
                </p>
                <p>
                Demonstrated ability to collaborate effectively with cross-functional teams, ensuring seamless integration of frontend elements. Proven track record of optimizing website performance and user experience. Constantly staying updated with industry trends and emerging technologies to deliver cutting-edge solutions.
                </p>
                <p>
                Strong problem-solving skills and a commitment to writing clean, maintainable code. Seeking to contribute expertise in frontend development to a dynamic and innovative team.
                </p>
            </div>
            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color='#F06529' />
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