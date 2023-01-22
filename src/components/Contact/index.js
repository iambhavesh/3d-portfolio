import React, { useRef } from 'react'
import Loader from 'react-loaders'
import './index.css'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function Contact() {
  const formref = useRef()
  const emailSubmit = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_nx5n62u',
        'template_21741i2',
        formref.current,
        'fD7SFwQwsj9s3Xc-X'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        (error) => {
          alert('Failed to send the message, please try again')
          console.log(error)
        }
      )
  }
  return (
    <>
      <div className="container contact-page">
        <div className="contact-details">
          <h1>Contact Me</h1>
          <p>
            I am interested in freelance opportunities – especially ambitious or
            large projects. However, if you have other request or question,
            don’t hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={formref} onSubmit={emailSubmit}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="maps-wrapper">
          <MapContainer center={[16.697392,74.223972]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[16.697392, 74.223972]}>
              <Popup>Sloba lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
