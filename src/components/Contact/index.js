import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        setTimeout(()=>{
            setLetterClass('text-animate-hover')
        },3000)
    },[])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_l6ado3p',
                'template_apcavra',
                refForm.current,
                '5HnZamh-YXxClkDP2'
            )
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again') 
                }
            )
    }

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

                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input 
                                    type='text' 
                                    name='name'
                                    placeholder='Name'
                                    required
                                     />
                            </li>
                            <li className='half'>
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
            <div className='info-map'>
                S. Ajay Krishna, <br />
                Thisayanvilai (tk), <br />
                Tirunelveli (dt), <br />
                Tamil Nadu - 627657 <br />
                <span>ajaykrishna.sak@gmail.com</span>
            </div>
            <div className="map-wrap">
                <MapContainer center={[8.307893911938974, 77.86042687696374]} zoom={13}>
                    <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                    <Marker position={[8.307893911938974, 77.86042687696374]} >
                        <Popup>Ajay lives here, come over for a cup of coffee :)</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>

        <Loader type='pacman' />
    </>
  )
}

export default Contact