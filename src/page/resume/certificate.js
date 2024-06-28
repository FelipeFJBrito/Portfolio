import React from "react";
import './certificate.css'

const Certificate = ({ certificateData }) => {
    return (
        <div className="certificate">
            {certificateData.map((item, index) => (
                <div className="certificate-content" key={index}>
                    <div className="certificate-header">
                        <h2 className="college">{item.title}</h2>
                        <h3 className="date">{item.date}</h3>
                    </div>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    );
}

export default Certificate;