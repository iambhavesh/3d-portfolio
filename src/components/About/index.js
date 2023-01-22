import {
  faCss3,
  faHtml5,
  faJsSquare,
  faPhp,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Loader from 'react-loaders'
import './index.css'
import resume from '../../assets/resume/BhaveshRathod.pdf'

function About() {
  return (
    <>
      <div className="container about-page">
        <div className="about-information">
          <h1>About me</h1>
          <p>
            I’m very ambitious front-end developer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p>
            I'm quietly confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            If I need to define myself in one sentence that would be a family
            person, father of a beautiful daughter, a sports fanatic,
            photography enthusiast, and tech-obsessed!!!
          </p>
          <a href={resume} className="flat-button" download='Bhavesh Rathod'>
            Resume
          </a>
        </div>
        <div className="about-image-container">
          <div className="image-slider">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            <FontAwesomeIcon icon={faPhp} color="#5ED4F4" />
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
