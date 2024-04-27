import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(()=>{
            setLetterClass('text-animate-hover')
        },3000)
    },[])

  return (
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque commodi qui unde ad quos quae aut consequatur, hic sequi officia excepturi iste, ut in sint at consectetur laborum quod ab.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque commodi qui unde ad quos quae aut consequatur, hic sequi officia excepturi iste, ut in sint at consectetur laborum quod ab.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque commodi qui unde ad quos quae aut consequatur, hic sequi officia excepturi iste, ut in sint at consectetur laborum quod ab.
            </p>
        </div>
    </div>
  )
}

export default About