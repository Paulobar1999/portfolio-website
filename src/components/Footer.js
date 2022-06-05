import React from 'react';
import {Link} from 'react-router-dom';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import "../styles/Footer.scss";
function Footer() {
  return (
    <div className="footer">
    <div className='socialMedia'>

    <a href={"https://www.linkedin.com/in/paul-o-bar-7659a417b/"} target="_blank" rel="noreferrer" >
    <LinkedInIcon/>
    </a>

    <a href={"https://github.com/Paulobar1999"} target="_blank" rel="noreferrer" >
    <GithubIcon/>
    </a>
    <Link to ="/contact">
    <EmailIcon/>
    </Link>
    </div>
    <p>&copy; 2022 Paul O'Bar </p>
    </div>
  )
}

export default Footer