import React from "react";
import { Fieldset } from 'primereact/fieldset';
import "../../../styles/Schedule/ScheduleDetail.css";

const Aug = () => {
    return (
       <div className="schedule">
        <Fieldset legend="8월 일정"style={{ marginTop: '30px' }}>
               
                <div>
                <p><i className="pi pi-circle-fill" 
                style={{ marginRight: '6px', color: '#1e90ff',fontSize: '0.6rem'  }}></i>
                    14(목)</p>
                    <p>대학원 후기 학위수여식</p>
                </div>

                <div style={{ paddingTop: '5px' }}>
                <p>
                <i className="pi pi-circle-fill" 
                style={{ marginRight: '6px', color: '#1e90ff',fontSize: '0.6rem'  }}></i>
                    15(금)</p>
                    <p>광복절</p>
                </div>

                <div style={{ paddingTop: '5px' }}>
                <p>
                <i className="pi pi-circle-fill" 
                style={{ marginRight: '6px', color: '#1e90ff',fontSize: '0.6rem'  }}></i>
                    18(월)~21(목)</p>
                    <p>2학기 수강신청 기간</p>
                </div>

              <div style={{ paddingTop: '5px' }}>
                <p>
                <i className="pi pi-circle-fill" 
                style={{ marginRight: '6px', color: '#1e90ff',fontSize: '0.6rem'  }}></i>
                    22(금)</p>
                    <p>1차 수강정정 기간</p>
                </div>

              <div style={{ paddingTop: '5px' }}>
                <p>
                <i className="pi pi-circle-fill" 
                style={{ marginRight: '6px', color: '#1e90ff',fontSize: '0.6rem'  }}></i>
                    22(금)~28(목)</p>
                    <p>전액 1차 등록기간</p>
                </div>
            </Fieldset>
        </div>
    );
};

export default Aug;
