import React from "react";
import { Fieldset } from 'primereact/fieldset';
import "../../../styles/Schedule/ScheduleDetail.css";

const Oct = () => {
    return (
       <div className="schedule">
            <Fieldset legend="10월 일정"style={{ marginTop: '30px' }}>
                
            <div>
                <p><i className="pi pi-circle-fill" 
                style={{ marginRight: '6px', color: '#1e90ff',fontSize: '0.6rem'  }}></i>
                    03(금)</p>
                    <p>개천절</p>
                </div>

               <div>
                <p><i className="pi pi-circle-fill" 
                style={{ marginRight: '6px', color: '#1e90ff',fontSize: '0.6rem'  }}></i>
                    06(월)~08(수)</p>
                    <p>추석 연휴</p>
                </div>

                <div>
                <p><i className="pi pi-circle-fill" 
                style={{ marginRight: '6px', color: '#1e90ff',fontSize: '0.6rem'  }}></i>
                    09(목)</p>
                    <p>한글날</p>
                </div>

                 <div>
                <p><i className="pi pi-circle-fill" 
                style={{ marginRight: '6px', color: '#1e90ff',fontSize: '0.6rem'  }}></i>   
                    20(월)~24(금)</p>
                    <p>수시고사 기간</p>
                </div>

                <div>
                <p><i className="pi pi-circle-fill" 
                style={{ marginRight: '6px', color: '#1e90ff',fontSize: '0.6rem'  }}></i>
                    30(목)</p>
                    <p>학기시작 60일</p>
                </div>

            </Fieldset>
        </div>
    );
};

export default Oct;
