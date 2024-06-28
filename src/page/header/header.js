import React, { useEffect, useRef } from "react";
import { useTypewriter } from "react-simple-typewriter";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import './header.css';

const Header = ({ contactRef }) => {
    const [typeEffect] = useTypewriter({
        words: ["Software Developer", "Computer Engineer"],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 40,
    });

    const buttonHireMeRef = useRef(null);

    const scrollToContact = () => {
        if (contactRef.current) {
            contactRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }

    useEffect(() => {
        const buttonHireMe = buttonHireMeRef.current;

        if (buttonHireMe) {
            buttonHireMe.addEventListener('click', scrollToContact);
        }

        // Clean up the event listener
        return () => {
            if (buttonHireMe) {
                buttonHireMe.removeEventListener('click', scrollToContact);
            }
        };
    }, [contactRef]);

    return (
        <div className="header-container">
            <div className="profile-picture-wrapper">
                <div className='profile-picture'>
                    <div className="profile-picture-background"></div>
                </div>
            </div>
            <div className="presentation">
                <p>Hello, I am <span>Felipe</span></p>
            </div>
            <div className="profile-details-role">
                <span className="primary-key">
                    <h1>
                        <span style={{ display: 'inline-block' }}>{typeEffect}<span style={{ color: 'transparent' }}>.</span></span>
                    </h1>
                </span>
                <div className="profile-role-container">
                    <span className="profile-role-tag-line">
                        Developing applications with front and backend operations.
                    </span>
                </div>
            </div>
            <div className="profile-options">
                <button ref={buttonHireMeRef} className="btn primary-btn">
                    Hire Me
                </button>
                <a href="https://drive.google.com/file/d/1ZWIZVcckTNHf0usRQKR_p4IhV0ycXpC8/view?usp=sharing" className="btn highl-btn" target="_blank" rel="noopener noreferrer">
                    Get Resume
                </a>
                {/* The "Get Resume" functionality has been removed */}
            </div>
            <div className="fav">
                <div className="fav-icon">
                    <a href="https://www.linkedin.com/in/felipebrito-programador/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="fa-linkedin" color="white" size="1.8rem" style={{ marginRight: '10px' }} />
                    </a>
                    <a href="https://github.com/FelipeFJBrito" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="fa-github" color="white" size="1.8rem" style={{ marginRight: '10px' }} />
                    </a>
                </div>
            </div>
            <div className="botton-header"></div>
        </div>
    );
}

export default Header;
