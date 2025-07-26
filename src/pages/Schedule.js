import React from "react";
import "../styles/Schedule/Schedule.css";
import ScheduleHeader from "../components/Schedule/ScheduleHeader";
import ScheduleCalendar from "../components/Schedule/ScheduleCalendar";
import ScheduleList from "../components/Schedule/ScheduleList";


const Schedule = () => {
    return (
        <div className="schedule-page">
            <div className="schedule-header">
                <ScheduleHeader />
            </div>
            <div className="schedule-body">
                <ScheduleCalendar />
                <ScheduleList />
            </div>
        </div>
    );
};

export default Schedule;