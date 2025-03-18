import React from "react";
import "../../../styles/Schedule/ScheduleDetail.css";

const Dec = () => {
    return (
        <div className="schedule">
            <p className="month">12월</p>
            <div className="detail">
                <div>
                    <p>08(월)~12(금)</p>
                    <p>기말고사 기간</p>
                </div>
                <div>
                    <p>08(월)~19(금)</p>
                    <p>성적입력 기간</p>
                </div>
                <div>
                    <p>12(금)~12(금)</p>
                    <p>2학기 종강</p>
                </div>
                <div>
                    <p>22(월)~22(월)</p>
                    <p>동계 계절수업 개강</p>
                </div>
                <div>
                    <p>25(목)~25(목)</p>
                    <p>성탄절</p>
                </div>
                <div>
                    <p>22(월)~26(금)</p>
                    <p>성적확인 및 정정 기간</p>
                </div>
                <div>
                    <p>22(월)~02(금)</p>
                    <p>강의평가 기간</p>
                </div>
            </div>
        </div>
    );
};

export default Dec;
