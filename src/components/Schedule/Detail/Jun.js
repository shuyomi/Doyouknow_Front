import react from "react";
import "../../../styles/Schedule/ScheduleDetail.css";

const Jun = () => {
    return (
        <div className="schedule">
            <p className="month">6월</p>
            <div className="detail">
                <div>
                    <p>06(금)~06(금)</p>
                    <p>현충일</p>
                </div>
                <div>
                    <p>10(화)~16(월)</p>
                    <p>기말고사 기간</p>
                </div>
                <div>
                    <p>10(화)~20(금)</p>
                    <p>성적입력 기간</p>
                </div>
                <div>
                    <p>16(월)~16(월)</p>
                    <p>1학기 종강</p>
                </div>
                <div>
                    <p>23(월)~23(월)</p>
                    <p>하계 계절수업 개강</p>
                </div>
                <div>
                    <p>24(화)~27(금)</p>
                    <p>성적확인 및 정정 기간</p>
                </div>
                <div>
                    <p>24(화)~04(금)</p>
                    <p>강의평가 기간</p>
                </div>
            </div>
        </div>
    );
};

export default Jun;
