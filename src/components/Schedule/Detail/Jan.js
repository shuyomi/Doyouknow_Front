import React from "react";
import "../../../styles/Schedule/ScheduleDetail.css";

const Jan = () => {
    return (
        <div className="schedule">
            <p className="month">1월</p>
            <div className="detail">
                <div>
                    <p>06(월)~10(금)</p>
                    <p>재입학 신청 기간</p>
                </div>
                <div>
                    <p>20(월)~24(금)</p>
                    <p>부·복·연계·자기설계전공 및 전과 신청</p>
                </div>
                <div>
                    <p>20(월)~31(금)</p>
                    <p>휴학 및 복학 신청 기간</p>
                </div>
                <div>
                    <p>23(목)~24(금)</p>
                    <p>졸업연기 신청기간</p>
                </div>
                <div>
                    <p>27(월)~30(목)</p>
                    <p>설 연휴</p>
                </div>
                <div>
                    <p>01(수)~01(수)</p>
                    <p>동계 계절수업 종강</p>
                </div>
            </div>
        </div>
    );
};

export default Jan;
