import React from "react";
import { Fieldset } from 'primereact/fieldset';
import "../../../styles/Schedule/ScheduleDetail.css";

const Apr = () => {
    return (
        <div className="schedule">
        <Fieldset legend="4월 일정"style={{ marginTop: '30px' }}>

                <div>
                <p><i className="pi pi-circle-fill" 
                style={{ marginRight: '6px', color: '#1e90ff',fontSize: '0.6rem'  }}></i>
                22(화)~28(월)</p>
                <p>수시고사 기간</p>
                </div>

                <div style={{ paddingTop: '5px' }}>
                <p>
                <i className="pi pi-circle-fill" 
                style={{ marginRight: '6px', color: '#1e90ff',fontSize: '0.6rem'  }}></i>
                29(화) </p>
                <p>학기시작60일</p>
                </div>
                
              
            </Fieldset>

             
            </div>

    );
};

export default Apr;
