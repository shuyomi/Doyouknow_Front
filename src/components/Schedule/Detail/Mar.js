import react from "react";
import "../../../styles/Schedule/ScheduleDetail.css";

const Mar = () => {
    return (
        <div className="schedule">
            <p className="month">3월</p>
            <div className="detail">
                <div>
                    <p>03(월)~03(월)</p>
                    <p>삼일절 대체휴일</p>
                </div>
                <div>
                    <p>04(화)~04(화)</p>
                    <p>1학기 개강</p>
                </div>
                <div>
                    <p>04(화)~07(금)</p>
                    <p>조기졸업 신청 기간</p>
                </div>
                <div>
                    <p>04(화)~07(금)</p>
                    <p>2차 일반휴학 신청 기간</p>
                </div>
                <div>
                    <p>04(화)~10(월)</p>
                    <p>2차 수강정정 기간</p>
                </div>
                <div>
                    <p>07(금)~13(목)</p>
                    <p>전액 2차 등록 기간</p>
                </div>
                <div>
                    <p>25(화)~26(수)</p>
                    <p>수강철회 기간</p>
                </div>
                <div>
                    <p>30(일)~30(일)</p>
                    <p>학기시작 30일</p>
                </div>
            </div>
        </div>
    );
};

export default Mar;
