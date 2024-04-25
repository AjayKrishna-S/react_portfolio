import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import logo from'../../assets/images/logo-a.png'
import sublogo from'../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to="/">
            <img src={logo} alt='logo'/>
            <img className='sub-logo' src={sublogo} alt='sublogo'/>
        </Link>
        <nav>
            <NavLink
                exact="true"
                activeclassname="active"
                to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />                
            </NavLink>
            <NavLink 
                exact="true" 
                activeclassname="active" 
                className="about-link"
                to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink
                exact="true"
                activeclassname="active" 
                className="contact-link"
                to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a 
                    target="_blank"
                    rel="noreffer"
                    href="www.github.com"
                    >
                        <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
                </a>
            </li>
            <li>
                <a 
                    target="_blank"
                    rel="noreferrer"
                    href="www.github.com"
                    >
                        <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
                </a>
            </li>
            <li>
                <a 
                    target="_blank"
                    rel="noreferrer"
                    href="www.github.com"
                    >
                        <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
                </a>
            </li>
            <li>
                <a 
                    target="_blank"
                    rel="noreferrer"
                    href="www.github.com"
                    >
                        <FontAwesomeIcon icon={faWhatsapp} color='#4d4d4e'/>
                </a>
            </li>
        </ul>
    </div>
  )

export default Sidebar