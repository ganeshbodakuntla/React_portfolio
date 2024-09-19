import { useEffect, useRef, useState } from 'react'
import AnimatedLetters from '../AnimationLetters'
import './index.scss'
import Loader from 'react-loaders'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    return async () => {
      setTimeout(() => {
        setLetterClass(() => {
          'text-animate-hover'
        })
      }, 3000)
    }
  }, [])
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_jdn7ir9', 'template_n4avgce', form.current, {
        publicKey: 'Lt31-e_sipCMhJFX0',
      })
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
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Recent computer science graduate with strong skills in Java and
            JavaScript, eager to kickstart my career as a developer. Passionate
            about web and mobile application development, I thrive in
            collaborative environments and am committed to continuous learning.
            Ready to contribute to innovative projects and make a meaningful
            impact in a forward-thinking company.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    placeholder="Name"
                    type="text"
                    name="message"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="message"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="message"
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
        <div className='info-map'>
          Ganesh
          <br />
          india,
          hyderabad <br />
          <span>ganeshbodakuntla@gmail.com</span>

        </div>
        <div className='map-wrap' >
        <MapContainer center={[17.4313275, 78.4490092]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[17.4313275, 78.4490092]}>
              <Popup>Ganesh Lives <br /> Here</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
