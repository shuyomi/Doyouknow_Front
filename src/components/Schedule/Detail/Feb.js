import React from "react";
import "../../../styles/Schedule/ScheduleDetail.css";

const Feb = () => {
    return (
        <div className="schedule">
            <p className="month">2월</p>
            <div className="detail">
                <div>
                    <p>14(금)~14(금)</p>
                    <p>학위수여식</p>
                </div>
                <div>
                    <p>18(화)~24(월)</p>
                    <p>1학기 수강신청 기간</p>
                </div>
                <div>
                    <p>21(금)~28(금)</p>
                    <p>전액 1차 등록기간</p>
                </div>
                <div>
                    <p>26(수)~27(목)</p>
                    <p>1차 수강정정 기간</p>
                </div>
                <div>
                    <p>06(목)~07(금)</p>
                    <p>장바구니</p>
                </div>
                <div>
                    <p>17(월)~18(화)</p>
                    <p>아리비전학기</p>
                </div>
                <div>
                    <p>24(월)~26(수)</p>
                    <p>신입생 오리엔테이션</p>
                </div>
                <div>
                    <p>28(금)~28(금)</p>
                    <p>입학식</p>
                </div>
            </div>
        </div>
    );
};

export default Feb;
