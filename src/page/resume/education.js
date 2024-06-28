import React from "react";
import './education.css'

const Education = ({ educationData }) => {
    return (
        <div className="education">
            {educationData.map((item, index) => (
                <div className="education-content" key={index}>
                    <div className="education-header">
                        <h2 className="college">{item.college}</h2>
                        <h3 className="date">{item.date}</h3>
                    </div>
                    <p>{item.degree}</p>
                </div>
            ))}
        </div>
    );
}

export default Education;