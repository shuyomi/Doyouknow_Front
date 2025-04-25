import React from "react";
import { Fieldset } from 'primereact/fieldset';
import "../../../styles/Schedule/ScheduleDetail.css";

const Jan = () => {
    return (
        <div className="schedule">
           <Fieldset legend="1월 일정">
             
                <div>
                <p><i className="pi pi-circle-fill" 
                style={{ marginRight: '6px', color: '#1e90ff',fontSize: '0.6rem'  }}></i>
                06(월)~10(금)</p>
                    <p>재입학 신청 기간</p>
                </div>

                <div style={{ paddingTop: '5px' }}>
                <p>
                <i className="pi pi-circle-fill" 
                style={{ marginRight: '6px', color: '#1e90ff',fontSize: '0.6rem'  }}></i>
                20(월)~24(금)</p>
                    <p>부·복·연계·자기설계전공 및 전과 신청</p>
                </div>

                <div style={{ paddingTop: '5px' }}>
                <p>
                <i className="pi pi-circle-fill" 
                style={{ marginRight: '6px', color: '#1e90ff',fontSize: '0.6rem'  }}></i>
                20(월)~31(금)</p>
                    <p>휴학 및 복학 신청 기간</p>
                </div>

              <div style={{ paddingTop: '5px' }}>
                <p>
                <i className="pi pi-circle-fill" 
                style={{ marginRight: '6px', color: '#1e90ff',fontSize: '0.6rem'  }}></i>
                23(목)~24(금)</p>
                    <p>졸업연기 신청기간</p>
                </div>

                <div style={{ paddingTop: '5px' }}>
                <p>
                <i className="pi pi-circle-fill" 
                style={{ marginRight: '6px', color: '#1e90ff',fontSize: '0.6rem'  }}></i>
                27(월)~30(목)</p>
                    <p>설 연휴</p>
                </div>

                <div style={{ paddingTop: '5px' }}>
                <p>
                <i className="pi pi-circle-fill" 
                style={{ marginRight: '6px', color: '#1e90ff',fontSize: '0.6rem'  }}></i>
               01(수)</p>
                    <p>동계 계절수업 종강</p>
                </div>
                
            
                 </Fieldset>
    
        </div>
    );
};

export default Jan;
