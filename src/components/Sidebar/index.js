import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import headshot from '/Users/gabrielshalitmontagne/Desktop/PersonalPage/personal-site/src/project_images/headshot.jpg' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons'

export default function Sidebar() {
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/' >
                <img src={headshot} alt='headshot' />
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d43" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d43" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d43" />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a 
                        target="_blank" 
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/gabriel-shalitmontagne-a06878162"
                    >
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a 
                        target="_blank" 
                        rel="noreferrer"
                        href="https://github.com/RaccoonNW"
                    >
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a 
                        target="_blank" 
                        rel="noreferrer"
                        href="https://medium.com/@shalitmontagne.g"
                    >
                        <FontAwesomeIcon icon={faMedium} color="#4d4d4e" />
                    </a>
                </li>
            </ul>
        </div>
    )
}