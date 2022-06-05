import React from 'react'
import "../styles/Contact.scss";
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function Contact() {
  return (
    <div className='contact'>
        <div className='header'>
        <h1>Contact</h1>

        </div>

        <div className='body'>
        <h3>If you would like to get in touch, please contact me via LinkedIn.
        </h3>    
        <a href={"https://www.linkedin.com/in/paul-o-bar-7659a417b/"} target="_blank" rel="noreferrer" >
        <LinkedInIcon/>
        </a>


        <div className='bottom'>
        <p>Or solve the following to get my phone number.  
        51 32 39 74 5A 53 42 76 62 69 42 30 61 47 46 30 49 48 64 76 64 57 78 6B 49 47 4A 6C 49 48 52 76 62 79 42 6C 59 58 4E 35 49 51 3D 3D
        </p>
        </div>

        </div>
  </div>
  )
}
