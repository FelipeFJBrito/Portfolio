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

    const buttonResumeRefH = useRef(null);
    const buttonHireMeRef = useRef(null);

    const scrollToContact = () => {
        if (contactRef.current) {
            contactRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const downloadFileAtURLH = (url) => {
        const fileName = url.split('/').pop();
        const aTag = document.createElement('a');
        aTag.href = url;
        aTag.setAttribute('download', fileName);
        document.body.appendChild(aTag);
        aTag.click();
        document.body.removeChild(aTag);
    }

    useEffect(() => {
        const buttonResumeH = buttonResumeRefH.current;
        const buttonHireMe = buttonHireMeRef.current;
        const url = '/Felipe-Brito-Resume.pdf';

        if (buttonHireMe) {
            buttonHireMe.addEventListener('click', scrollToContact);
        }
        if (buttonResumeH) {
            const handleResumeClick = () => downloadFileAtURLH(url);
            buttonResumeH.addEventListener('click', handleResumeClick);

            // Clean up the event listeners
            return () => {
                if (buttonHireMe) {
                    buttonHireMe.removeEventListener('click', scrollToContact);
                }
                if (buttonResumeH) {
                    buttonResumeH.removeEventListener('click', handleResumeClick);
                }
            };
        }
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
                <button ref={buttonResumeRefH} className="btn highl-btn">
                    Get Resume
                </button>
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
