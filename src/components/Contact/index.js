import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(()=>{
            setLetterClass('text-animate-hover')
        },3000)
    },[])

  return (
    <>
        <div className='container contact-page'>
            <div className="text-zone">
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={[
                                    'C',
                                    'o',
                                    'n',
                                    't',
                                    'a',
                                    'c',
                                    't',
                                    ' ',
                                    'm',
                                    'e'
                                ]}   
                        idx={15}
                    />
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, a illo reiciendis sequi nobis eligendi debitis porro? Iste totam ad dolorem eaque, commodi unde qui officia odio quibusdam consectetur aliquid.</p>
                <div className='contact-form'>
                    <form>
                        <ul>
                            <li className='haft'>
                                <input 
                                    type='text' 
                                    name='name'
                                    placeholder='Name'
                                    required
                                     />
                            </li>
                            <li className='haft'>
                                <input 
                                    type='email'
                                    name='email'
                                    placeholder='Email'
                                    required />
                            </li>
                            <li> 
                                <input 
                                    name='subject'
                                    placeholder='Subject'
                                    type='text'
                                    required />
                            </li>
                            <li>
                                <textarea 
                                    placeholder='Message'
                                    name='message'
                                    required
                                ></textarea>
                            </li>
                            <li>
                                <input
                                    type='submit' 
                                    className='flat-button'
                                    value='SEND'
                                />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        <Loader type='pacman' />
    </>
  )
}

export default Contact