import React from "react";
import { Fieldset } from 'primereact/fieldset';
import "../../../styles/Schedule/ScheduleDetail.css";

const Sep = () => {
    return (
        <div className="schedule">
               <Fieldset legend="9월 일정"style={{ marginTop: '30px' }}>
                
               <div>
                <p><i className="pi pi-circle-fill" 
                style={{ marginRight: '6px', color: '#1e90ff',fontSize: '0.6rem'  }}></i>
                    01(월)</p>
                    <p>2학기 개강</p>
                </div>

                <div style={{ paddingTop: '5px' }}>
                <p>
                <i className="pi pi-circle-fill" 
                style={{ marginRight: '6px', color: '#1e90ff',fontSize: '0.6rem'  }}></i>
                    01(월)~05(금)</p>
                    <p>2차 수강정정 기간 / 2차 일반휴학 신청 기간 / 조기졸업 신청 기간 </p>
                </div>

            

                <div style={{ paddingTop: '5px' }}>
                <p>
                <i className="pi pi-circle-fill" 
                style={{ marginRight: '6px', color: '#1e90ff',fontSize: '0.6rem'  }}></i>
                    08(월)~14(일)</p>
                    <p>전액 2차 등록 기간</p>
                </div>

                <div style={{ paddingTop: '5px' }}>
                <p>
                <i className="pi pi-circle-fill" 
                style={{ marginRight: '6px', color: '#1e90ff',fontSize: '0.6rem'  }}></i>
                    17(수)</p>
                    <p>개교기념일</p>
                </div>

               <div style={{ paddingTop: '5px' }}>
                <p>
                <i className="pi pi-circle-fill" 
                style={{ marginRight: '6px', color: '#1e90ff',fontSize: '0.6rem'  }}></i>
                    22(월)~23(화)</p>
                    <p>수강철회기간</p>
                </div>

               <div style={{ paddingTop: '5px' }}>
                <p>
                <i className="pi pi-circle-fill" 
                style={{ marginRight: '6px', color: '#1e90ff',fontSize: '0.6rem'  }}></i>
                    30(화)</p>
                    <p>학기시작 30일</p>
                </div>
            </Fieldset>
        </div>
    );
};

export default Sep;
