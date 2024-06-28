import React from "react";
import './workHistory.css'
const WorkHistory = ({workHistoryData}) => {
    return (
        <div className="workHistory">
            {workHistoryData.map((item, index) => (
                <div className="workHistory-content" key={index}>
                    <div className="workHistory-header">
                        <h2 className="company">{item.company}</h2>
                        <h3 className="date">{item.date}</h3>
                    </div>
                    <div className="workHistory-content">
                        <h3 className="role">{item.role}</h3>
                        <p className="description">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default WorkHistory;