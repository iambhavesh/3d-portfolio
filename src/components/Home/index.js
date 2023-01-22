import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import LogoB from '../../assets/images/logo-b.png'
import Logo from './Logo'
import Loader from 'react-loaders'

function Home() {
  return (
    <>
      <div className="conatiner home-page">
        <div className="introduction">
          <h1>
            Hi,
            <br />
            I’m <img src={LogoB} alt="developer" />
            havesh, <br /> web developer.
          </h1>
          <h2>Front end Developer/JavaScript Developer/ Freelancer</h2>
          <Link to="/contact" className="flat-button">
            Contact Me
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
