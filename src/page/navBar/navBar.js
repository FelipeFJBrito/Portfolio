import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import './navBar.css';

const NavBar = () => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [showBackButton, setShowBackButton] = useState(false);

    const list = <FontAwesomeIcon icon={faList} />;
    const cUp = <FontAwesomeIcon icon={faCaretUp} />;

    useEffect(() => {
        const handleScroll = () => {
            const aboutMeSection = document.getElementById("about");
            if (aboutMeSection) {
                const rect = aboutMeSection.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom >= 0) {
                    setShowBackButton(true);
                } else if (window.scrollY === 0) {
                    setShowBackButton(false);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    return (
        <div className="nav-container-wrapper">
            <div className="nav-container">
                <span className="my-name">Felipe Brito</span>
                <div className="nav-list">
                    <a href="#about">About Me</a>
                    <a href="#resume">Resume</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
                <div className="flex" onClick={toggleDropdown}>{list}</div>
            </div>
            <div className={`nav-flex ${isDropdownVisible ? 'show' : ''}`}>
                <a href="#about">About Me</a>
                <a href="#resume">Resume</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>
            {showBackButton && <a href="#nav" className="back">{cUp}</a>}
        </div>
    );
}

export default NavBar;
