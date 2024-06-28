import React from "react";
import './skills.css';

const Skills = ({ skillsData }) => {
    return (
        <div className="skills-container">
            {skillsData.map((item, index) => (
                <div className="skill-content" key={index}>
                    <div className="skill-header">
                        <div className="skill-box">
                            <span className="title">{item.skill}</span>
                            <div className="skill-bar">
                                <div className="skill-per" style={{ width: item.width }}>
                                    <span className="tooltip">{item.tooltip}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Skills;
