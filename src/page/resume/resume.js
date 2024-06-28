import React, { useState, useEffect } from "react";
import './resume.css';
import Education from "./education";
import WorkHistory from "./workHistory";
import Skills from "./skills";
import Certificate from "./certificate";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faHandshake, faLaptop, faUniversity } from '@fortawesome/free-solid-svg-icons';

const Resume = () => {
    const [visibleSection, setVisibleSection] = useState('education'); 
    const hat = <FontAwesomeIcon icon={faGraduationCap} />;
    const handShake = <FontAwesomeIcon icon={faHandshake} />;
    const laptop = <FontAwesomeIcon icon={faLaptop} />;
    const university = <FontAwesomeIcon icon={faUniversity} />;

    const educationData = [
        {
            college: "Langara College",
            date: "2024-2026",
            degree: "DEGREE OF COMPUTER SCIENCE"
        },
        {
            college: "University Area 1",
            date: "2016-2021",
            degree: "BACHELOR OF COMPUTER ENGINEERING"
        },
        {
            college: "Sartre COC",
            date: "2012-2014",
            degree: "High School"
        }
    ];

    const workHistoryData = [
        {
            company: "Kelly Services Canada",
            date: "2024-Now",
            role: "IT FIELD TECHNICIAN",
            description: "Responsible for installation of new equipment, and the efficient relocation of existing equipment to meet client needs. Modified systems, upgraded hardware, and troubleshooted existing hardware by assessing their system requirements."
        },
        {
            company: "Smart4 Technologies",
            date: "2021-2022",
            role: "FULL STACK DEVELOPER",
            description: "For one year and three months, I worked as a full-stack software developer at the Smart4 company, where I developed and maintained systems for city halls, applying my knowledge in Java, ZK, and SQL daily to the development of those systems."
        }
    ];

    const skillsData = [
        {
            skill: "JavaScript",
            tooltip: " ",
            width: '70%',
        },
        {
            skill: "HTML",
            tooltip: " ",
            width: '80%',
        },
        {
            skill: "CSS",
            tooltip: " ",
            width: '80%',
        },
        {
            skill: "React",
            tooltip: " ",
            width: '60%',
        },
        {
            skill: "React",
            tooltip: " ",
            width: '50%',
        },
        {
            skill: "NodeJs",
            tooltip: " ",
            width: '50%',
        },
        {
            skill: "SQL",
            tooltip: " ",
            width: '65%',
        },
        {
            skill: "Python",
            tooltip: " ",
            width: '70%',
        },
        {
            skill: "MongoDB",
            tooltip: " ",
            width: '40%',
        },
        {
            skill: "GIT",
            tooltip: " ",
            width: '70%',
        },
    ];

    const certificateData = [
        {
            title: "Google Python Certificate",
            date: "Feb-2024",
            description: "Google Crash Course on Python"
        },
        {
            title: "Troubleshooting Certificate",
            date: "Feb-2024",
            description: "Google Troubleshooting and Debugging Techniques"
        },
    ];

    const handleItemClick = (section) => {
        setVisibleSection(section);
    };

    useEffect(() => {
        const handleClick = (event) => {
            const section = event.currentTarget.getAttribute("data-section");
            handleItemClick(section);
        };

        const imgListItems = document.querySelectorAll(".img-list li");
        const sectionListItems = document.querySelectorAll(".section-list li");

        imgListItems.forEach((item) => {
            item.addEventListener("click", handleClick);
        });

        sectionListItems.forEach((item) => {
            item.addEventListener("click", handleClick);
        });

        return () => {
            imgListItems.forEach((item) => {
                item.removeEventListener("click", handleClick);
            });
            sectionListItems.forEach((item) => {
                item.removeEventListener("click", handleClick);
            });
        };
    }, []);

    return (
        <div className="resume-wrapper">
            <h2 className="resume-title">Resume</h2>
            <div className="subtitle-container">
                <h2 className="resume-subtitle"></h2>
            </div>
            <div className="resume-container">
                <div className="nav-resume-container">
                    <ul className="img-list">
                        <li data-section="education" className={visibleSection === 'education' ? 'active' : ''}><span>{hat}</span></li>
                        <li data-section="workHistory" className={visibleSection === 'workHistory' ? 'active' : ''}><span>{handShake}</span></li>
                        <li data-section="skills" className={visibleSection === 'skills' ? 'active' : ''}><span>{laptop}</span></li>
                        <li data-section="certifications" className={visibleSection === 'certifications' ? 'active' : ''}><span>{university}</span></li>
                    </ul>
                    <ul className="section-list">
                        <li data-section="education" className={visibleSection === 'education' ? 'active' : ''}><span>Education</span></li>
                        <li data-section="workHistory" className={visibleSection === 'workHistory' ? 'active' : ''}><span>Work History</span></li>
                        <li data-section="skills" className={visibleSection === 'skills' ? 'active' : ''}><span>Skills</span></li>
                        <li data-section="certifications" className={visibleSection === 'certifications' ? 'active' : ''}><span>Certifications</span></li>
                    </ul>
                </div>
                <div className="content-list">
                    {visibleSection === 'education' && <Education educationData={educationData} />}
                    {visibleSection === 'workHistory' && <WorkHistory workHistoryData={workHistoryData} />}
                    {visibleSection === 'skills' && <Skills skillsData={skillsData} />}
                    {visibleSection === 'certifications' && <Certificate certificateData={certificateData} />}
                    {/* Render other sections based on visibleSection */}
                </div>
            </div>
        </div>
    );
}

export default Resume;
