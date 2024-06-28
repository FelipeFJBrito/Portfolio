import React from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import './footer.css'

const Footer = () =>{
    return(
        <div className='footer-container'>
            <div>
                <p>Visit My Social Midia</p>
            </div>
            <div className="fav-icon">
                    {
                        //this box is going to be our favicons
                        //We are going to use ReactIcons to generate the favicons
                    }
                    <a href="https://www.linkedin.com/in/felipebrito-programador/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="fa-linkedin" color="white" size="1.8rem" style={{ marginRight: '10px' }} />
                    </a>

                    <a href="https://github.com/FelipeFJBrito" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="fa-github" color="white" size="1.8rem" style={{ marginRight: '10px' }} />
                    </a>
                </div>
                <span>Copyright ©2024 felipeBrito</span>
        </div>
    )
}

export default Footer;