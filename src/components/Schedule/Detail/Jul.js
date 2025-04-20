import React from "react";
import { Fieldset } from 'primereact/fieldset';
import "../../../styles/Schedule/ScheduleDetail.css";

const Jul = () => {
    return (
         <div className="schedule">
            <Fieldset legend="7월 일정"style={{ marginTop: '30px' }}>
                <div>
                <p><i className="pi pi-circle-fill" 
                style={{ marginRight: '6px', color: '#1e90ff',fontSize: '0.6rem'  }}></i>
                    07(월)~11(금)</p>
                    <p>재입학 기간</p>
                </div>

                 <div style={{ paddingTop: '5px' }}>
                <p>
                <i className="pi pi-circle-fill" 
                style={{ marginRight: '6px', color: '#1e90ff',fontSize: '0.6rem'  }}></i>
                    11(금)</p>
                    <p>하계 계절수업 종강</p>
                </div>

                 <div style={{ paddingTop: '5px' }}>
                <p>
                <i className="pi pi-circle-fill" 
                style={{ marginRight: '6px', color: '#1e90ff',fontSize: '0.6rem'  }}></i>
                    14(월)~18(금)</p>
                    <p>부·복·연계·자기설계전공 및 전과 신청</p>
                </div>

                 <div style={{ paddingTop: '5px' }}>
                <p>
                <i className="pi pi-circle-fill" 
                style={{ marginRight: '6px', color: '#1e90ff',fontSize: '0.6rem'  }}></i>
                    14(월)~25(금)</p>
                    <p>휴학 및 복학 신청 기간</p>
                </div>

                 <div style={{ paddingTop: '5px' }}>
                <p>
                <i className="pi pi-circle-fill" 
                style={{ marginRight: '6px', color: '#1e90ff',fontSize: '0.6rem'  }}></i>
                    17(목)~18(금)</p>
                    <p>졸업연기 신청 기간</p>
                </div>
           </Fieldset>
        </div>
    );
};

export default Jul;
