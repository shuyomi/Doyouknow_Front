import react from "react";
import "../../../styles/Schedule/ScheduleDetail.css";

const Sep = () => {
    return (
        <div className="schedule">
            <p className="month">9월</p>
            <div className="detail">
                <div>
                    <p>01(월)~01(월)</p>
                    <p>2학기 개강</p>
                </div>
                <div>
                    <p>01(월)~05(금)</p>
                    <p>2차 수강정정 기간</p>
                </div>
                <div>
                    <p>01(월)~05(금)</p>
                    <p>2차 일반휴학 신청 기간</p>
                </div>
                <div>
                    <p>01(월)~05(금)</p>
                    <p>조기졸업 신청 기간</p>
                </div>
                <div>
                    <p>08(월)~14(일)</p>
                    <p>전액 2차 등록 기간</p>
                </div>
                <div>
                    <p>17(수)~17(수)</p>
                    <p>개교기념일</p>
                </div>
                <div>
                    <p>22(월)~23(화)</p>
                    <p>수강철회기간</p>
                </div>
                <div>
                    <p>30(화)~30(화)</p>
                    <p>학기시작 30일</p>
                </div>
            </div>
        </div>
    );
};

export default Sep;
