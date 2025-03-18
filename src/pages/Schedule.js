import React from "react";
import ScheduleHeader from "../components/Schedule/ScheduleHeader";
import ScheduleCalendar from "../components/Schedule/ScheduleCalendar";
import ScheduleList from "../components/Schedule/ScheduleList";

const Schedule = () => {
    return (
        <div>
            <ScheduleHeader />
            <ScheduleCalendar />
            <ScheduleList />
        </div>
    );
};

export default Schedule;