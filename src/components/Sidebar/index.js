import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import logo from'../../assets/images/logo-a.png'
import sublogo from'../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHandshake, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons'
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
                className="skills-link"
                to="/skills">
                    <FontAwesomeIcon icon={faHandshake} color="#4d4d4e"/>
            </NavLink>
            <NavLink
                exact="true"
                activeclassname="active"
                className="portfolio-link"
                to="/portfolio">
                    <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
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
                    href="https://www.linkedin.com/in/ajay-krishna-4708582a9/"
                    >
                        <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
                </a>
            </li>
            <li>
                <a 
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/AjayKrishna-S"
                    >
                        <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
                </a>
            </li>
            <li>
                <a 
                    target="_blank"
                    rel="noreferrer"
                    href="mailto:ajaykrishna.sak@gmail.com"
                    >
                        <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
                </a>
            </li>
            <li>
                <a 
                    target="_blank"
                    rel="noreferrer"
                    href="https://wa.me/9363020697"
                    >
                        <FontAwesomeIcon icon={faWhatsapp} color='#4d4d4e'/>
                </a>
            </li>
        </ul>
    </div>
  )

export default Sidebar