import React from "react";
import Jan from "./Detail/Jan";
import Feb from "./Detail/Feb";
import Mar from "./Detail/Mar";
import Apr from "./Detail/Apr";
import May from "./Detail/May";
import Jun from "./Detail/Jun";
import Jul from "./Detail/Jul";
import Aug from "./Detail/Aug";
import Sep from "./Detail/Sep";
import Oct from "./Detail/Oct";
import Nov from "./Detail/Nov";
import Dec from "./Detail/Dec";

const ScheduleList = () => {
    return (
        <div className="schedule-list" style={{ margin: "10px 10px" }}>
            <h4>전체일정</h4>
            <Jan />
            <Feb />
            <Mar />
            <Apr />
            <May />
            <Jun />
            <Jul />
            <Aug />
            <Sep />
            <Oct />
            <Nov />
            <Dec />
        </div>
    );
};

export default ScheduleList;
