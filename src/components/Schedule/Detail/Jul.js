import React from "react";
import "../../../styles/Schedule/ScheduleDetail.css";

const Jul = () => {
    return (
        <div className="schedule">
            <p className="month">7월</p>
            <div className="detail">
                <div>
                    <p>07(월)~11(금)</p>
                    <p>재입학 기간</p>
                </div>
                <div>
                    <p>11(금)~11(금)</p>
                    <p>하계 계절수업 종강</p>
                </div>
                <div>
                    <p>14(월)~18(금)</p>
                    <p>부·복·연계·자기설계전공 및 전과 신청</p>
                </div>
                <div>
                    <p>14(월)~25(금)</p>
                    <p>휴학 및 복학 신청 기간</p>
                </div>
                <div>
                    <p>17(목)~18(금)</p>
                    <p>졸업연기 신청 기간</p>
                </div>
            </div>
        </div>
    );
};

export default Jul;
