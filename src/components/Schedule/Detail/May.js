import React from "react";
import { Fieldset } from 'primereact/fieldset';
import "../../../styles/Schedule/ScheduleDetail.css";

const May = () => {
    return (
       <div className="schedule">
             <Fieldset legend="5월 일정"style={{ marginTop: '30px' }}>
             <div>
                <p><i className="pi pi-circle-fill" 
                style={{ marginRight: '6px', color: '#1e90ff',fontSize: '0.6rem'  }}></i>
                    05(월)</p>
                    <p>어린이날, 부처님 오신 날</p>
                </div>

                <div style={{ paddingTop: '5px' }}>
                <p>
                <i className="pi pi-circle-fill" 
                style={{ marginRight: '6px', color: '#1e90ff',fontSize: '0.6rem'  }}></i>
                06(화)</p>
                    <p>부처님오신날 대체휴일</p>
                </div>

               <div style={{ paddingTop: '5px' }}>
                <p>
                <i className="pi pi-circle-fill" 
                style={{ marginRight: '6px', color: '#1e90ff',fontSize: '0.6rem'  }}></i>
                07(수)~09(금)</p>
                    <p>수료자 졸업 신청 기간</p>
                </div>

               <div style={{ paddingTop: '5px' }}>
                <p>
                <i className="pi pi-circle-fill" 
                style={{ marginRight: '6px', color: '#1e90ff',fontSize: '0.6rem'  }}></i>
                07(수)~16(금)</p>
                    <p>중간강의평가 및 수시고사 성적 확인</p>
                </div>

               <div style={{ paddingTop: '5px' }}>
                <p>
                <i className="pi pi-circle-fill" 
                style={{ marginRight: '6px', color: '#1e90ff',fontSize: '0.6rem'  }}></i>
                23(금)</p>
                    <p>수업주수 3/4선</p>
                </div>

                <div style={{ paddingTop: '5px' }}>
                <p>
                <i className="pi pi-circle-fill" 
                style={{ marginRight: '6px', color: '#1e90ff',fontSize: '0.6rem'  }}></i>
                29(목)</p>
                    <p>학기시작 90일</p>
                </div>
            </Fieldset>
                
     </div>
    );
};

export default May;
