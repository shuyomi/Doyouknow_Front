import react from "react";
import "../../../styles/Schedule/ScheduleDetail.css";

const Oct = () => {
    return (
        <div className="schedule">
            <p className="month">10월</p>
            <div className="detail">
                <div>
                    <p>03(금)~03(금)</p>
                    <p>개천절</p>
                </div>
                <div>
                    <p>06(월)~08(수)</p>
                    <p>추석 연휴</p>
                </div>
                <div>
                    <p>09(목)~09(목)</p>
                    <p>한글날</p>
                </div>
                <div>
                    <p>20(월)~24(금)</p>
                    <p>수시고사 기간</p>
                </div>
                <div>
                    <p>30(목)~30(목)</p>
                    <p>학기시작 60일</p>
                </div>
            </div>
        </div>
    );
};

export default Oct;
