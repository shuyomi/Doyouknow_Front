import react from "react";
import "../../../styles/Schedule/ScheduleDetail.css";

const Aug = () => {
    return (
        <div className="schedule">
            <p className="month">8월</p>
            <div className="detail">
                <div>
                    <p>14(목)~14(목)</p>
                    <p>대학원 후기 학위수여식</p>
                </div>
                <div>
                    <p>15(금)~15(금)</p>
                    <p>광복절</p>
                </div>
                <div>
                    <p>18(월)~21(목)</p>
                    <p>2학기 수강신청 기간</p>
                </div>
                <div>
                    <p>22(금)~22(금)</p>
                    <p>1차 수강정정 기간</p>
                </div>
                <div>
                    <p>22(금)~28(목)</p>
                    <p>전액 1차 등록기간</p>
                </div>
            </div>
        </div>
    );
};

export default Aug;
