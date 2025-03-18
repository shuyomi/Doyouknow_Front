import React from "react";
import "../../../styles/Schedule/ScheduleDetail.css";

const Nov = () => {
    return (
        <div className="schedule">
            <p className="month">11월</p>
            <div className="detail">
                <div>
                    <p>03(월)~14(금)</p>
                    <p>중간강의평가 및 수시고사 성적 확인</p>
                </div>
                <div>
                    <p>05(수)~07(금)</p>
                    <p>수료자 졸업 신청 기간</p>
                </div>
                <div>
                    <p>25(화)~25(화)</p>
                    <p>수업주수 3/4선</p>
                </div>
                <div>
                    <p>29(토)~29(토)</p>
                    <p>학기시작 90일</p>
                </div>
            </div>
        </div>
    );
};

export default Nov;
