import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/synmbol.png'
import LogoSubtitle from '../../assets/images/ganesh name.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import {
    faLinkedin,
    faGithub,
    faYoutube,
    faSkype,
  } from '@fortawesome/free-brands-svg-icons'
const Sidebar = () => {
  return (
    <>
      <div className="nav-bar">
        <Link className="logo" to="/">
          <img src={LogoS} alt="logo" />
          <img className="sub-logo" src={LogoSubtitle} alt="logo" />
        </Link>
        <nav>
          <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>
          <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </NavLink>
          <NavLink exact="true" activeclassname="active" to="/contact" className="contact-link">
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>
              </nav>
              <ul>
                  <li>
                      <a target="_blank"rel='noreferrer' href="https://www.linkedin.com/in/ganesh-bodakuntla-b9411828a/">
                          <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
                      </a>
                  </li>
                  <li>
                      <a target="_blank"rel='noreferrer' href="https://github.com/ganeshbodakuntla">
                          <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
                      </a>
                  </li>
                  {/* <li>
                      <a target="_blank"rel='noreferrer' href="https://www.linkedin.com/in/ganesh-bodakuntla-b9411828a/">
                          <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
                      </a>
                  </li> */}
              </ul>
      </div>
    </>
  )
}
export default Sidebar
