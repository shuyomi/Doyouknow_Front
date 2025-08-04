import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import "../../styles/Schedule/ScheduleCalendar.css";
import eventsData from "../../db/Schedule/events.json";

const ScheduleCalendar = () => {
    const handleEventClick = (info) => {
        const startDate = `${info.event.start.getMonth() + 1}/${info.event.start.getDate()}`;
        let endDate = startDate;

        if (info.event.end) {
            const adjustedEnd = new Date(info.event.end);
            adjustedEnd.setDate(adjustedEnd.getDate() - 1); // 하루 감소
            endDate = `${adjustedEnd.getMonth() + 1}/${adjustedEnd.getDate()}`;
        }

        alert(`${info.event.title} (${startDate} ~ ${endDate})`);
    };

    const handleDayCellContent = (arg) => {
        const dayNumber = arg.dayNumberText.replace("일", "");
        return dayNumber;
    };

    return (
        <div className="calendar-container">
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]} // 사용할 플러그인
                initialView="dayGridMonth" // 기본 달력 뷰 (한 달 보기)
                events={eventsData} // events.json 데이터 불러오기
                headerToolbar={{
                    left: "prev", //왼쪽에는 이전버튼
                    center: "title", //중앙엔 제목
                    right: "next", //오른쪽엔 다음버튼
                }}
                locale="ko" //한국어버전
                eventClick={handleEventClick} //이벤트 누르면 상세 정보 표시되게
                dayCellContent={handleDayCellContent} //1일 -> 1 이렇게 표시되게
            />
        </div>
    );
};

export default ScheduleCalendar;
