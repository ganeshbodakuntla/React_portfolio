import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimationLetters'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'
import {
  faAngular,
  faBootstrap,
  faCss3,
  faGitAlt,
  faGithub,
  faHtml5,
  faJava,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    return async () => {
      setTimeout(() => {
        setLetterClass(() => {
          'text-animate-hover'
        })
      }, 3000)
    }
  }, [])
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I’m very ambitious front-end developer looking for a role in <br />
            established IT company with the opportunity to work with the latest
            <br />
            technologies on challenging and diverse projects.
          </p>
          <p>
            If I need to define myself in one sentence that would be a family
            <br />
            person, father of a beautiful daughter, a sports fanatic,
            <br />
            photography enthusiast, and tech-obsessed!!!
          </p>
          <p>
            I'm quietly confident, naturally curious, and perpetually working on
            <br />
            improving my chops one design problem at a time.
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faHtml5} color="#f06529" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faJava} color="#f89820" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#efd81d" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#ec4d28" />
            </div>
          </div>
        </div>
          </div>
          <Loader type="pacman"/>
    </>
  )
}

export default About
