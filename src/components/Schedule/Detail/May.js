import React from "react";
import "../../../styles/Schedule/ScheduleDetail.css";

const May = () => {
    return (
        <div className="schedule">
            <p className="month">5월</p>
            <div className="detail">
                <div>
                    <p>05(월)~05(월)</p>
                    <p>어린이날, 부처님 오신 날</p>
                </div>
                <div>
                    <p>06(화)~06(화)</p>
                    <p>부처님오신날 대체휴일</p>
                </div>
                <div>
                    <p>07(수)~09(금)</p>
                    <p>수료자 졸업 신청 기간</p>
                </div>
                <div>
                    <p>07(수)~16(금)</p>
                    <p>중간강의평가 및 수시고사 성적 확인</p>
                </div>
                <div>
                    <p>23(금)~23(금)</p>
                    <p>수업주수 3/4선</p>
                </div>
                <div>
                    <p>29(목)~29(목)</p>
                    <p>학기시작 90일</p>
                </div>
            </div>
        </div>
    );
};

export default May;
