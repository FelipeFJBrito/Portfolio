import React, { useEffect, useRef } from "react";
import './aboutMe.css';

const AboutMe = ({ contactRef }) => {
    const buttonResumeRef = useRef(null);
    const buttonHireRef = useRef(null);

    const scrollToContact = () => {
        if (contactRef.current) {
            contactRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const url = '/Felipe-Brito-Resume.pdf';
    const downloadFileAtURL = (url) => {
        const fileName = url.split('/').pop();
        const aTag = document.createElement('a');
        aTag.href = url;
        aTag.setAttribute('download', fileName);
        document.body.appendChild(aTag);
        aTag.click();
        document.body.removeChild(aTag);
    }

    useEffect(() => {
        const buttonResume = buttonResumeRef.current;
        const buttonHire = buttonHireRef.current;

        if (buttonHire) {
            buttonHire.addEventListener('click', scrollToContact);
        }
        if (buttonResume) {
            const handleResumeClick = () => downloadFileAtURL(url);
            buttonResume.addEventListener('click', handleResumeClick);

            // Clean up the event listeners
            return () => {
                if (buttonHire) {
                    buttonHire.removeEventListener('click', scrollToContact);
                }
                if (buttonResume) {
                    buttonResume.removeEventListener('click', handleResumeClick);
                }
            };
        }
    }, [contactRef]);

    return (
        <div className="about-me-wrapper">
            <h2 className="about-me-title">About Me</h2>
            <div className="subtitle-container">
                <h2 className="about-me-subtitle"></h2>
            </div>
            <div className="about-me-container">
                <div className="image-container">
                </div>
                <div className="about-me-content">
                    <p>
                        Full stack developer, Bachelor of Computer Engineering from Wyden Area 1 University
                        with background knowledge of Python, JavaScript,
                        HTML and CSS, and currently pursuing a Computer
                        Science degree at Langara College.
                    </p>
                    <div className="list-container">
                        <h2>Here are a Few Highlights</h2>
                        <div>
                            <ul className="about-me-list">
                                <li>Fullstack Software Developer</li>
                                <li>JavaScript, Python, Java</li>
                                <li>React, React Native</li>
                                <li>Building APIs</li>
                                <li>Managing Databases</li>
                            </ul>
                        </div>
                    </div>
                    <div className="profile-options">
                        <button ref={buttonHireRef} className="btn-1 primary-btn-a">
                            Hire Me
                        </button>
                        <button ref={buttonResumeRef} className="btn-2 highl-btn-a">
                            Get Resume
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
