import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Schedule/ScheduleHeader.css";

const ScheduleHeader = () => {
    return (
        <header className="schedule-header">
            <Link to="/"></Link>
            <h1>학사일정</h1>
            <div></div>
        </header>
    );
};

export default ScheduleHeader;
