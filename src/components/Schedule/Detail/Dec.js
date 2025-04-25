import React from "react";
import { Fieldset } from 'primereact/fieldset';
import "../../../styles/Schedule/ScheduleDetail.css";

const Dec = () => {
    return (
        <div className="schedule">
          <Fieldset legend="12월 일정"style={{ marginTop: '30px' }}>
                <div>
                <p><i className="pi pi-circle-fill" 
                style={{ marginRight: '6px', color: '#1e90ff',fontSize: '0.6rem'  }}></i>
                    08(월)~12(금)</p>
                    <p>기말고사 기간</p>
                </div>

               <div>
                <p><i className="pi pi-circle-fill" 
                style={{ marginRight: '6px', color: '#1e90ff',fontSize: '0.6rem'  }}></i>
                    08(월)~19(금)</p>
                    <p>성적입력 기간</p>
                </div>

                <div>
                <p><i className="pi pi-circle-fill" 
                style={{ marginRight: '6px', color: '#1e90ff',fontSize: '0.6rem'  }}></i>
                    12(금)</p>
                    <p>2학기 종강</p>
                </div>

                <div>
                <p><i className="pi pi-circle-fill" 
                style={{ marginRight: '6px', color: '#1e90ff',fontSize: '0.6rem'  }}></i>
                    22(월)</p>
                    <p>동계 계절수업 개강</p>
                </div>

                <div>
                <p><i className="pi pi-circle-fill" 
                style={{ marginRight: '6px', color: '#1e90ff',fontSize: '0.6rem'  }}></i>
                    25(목)</p>
                    <p>성탄절</p>
                </div>

                <div>
                <p><i className="pi pi-circle-fill" 
                style={{ marginRight: '6px', color: '#1e90ff',fontSize: '0.6rem'  }}></i>
                    22(월)~26(금)</p>
                    <p>성적확인 및 정정 기간</p>
                </div>

               <div>
                <p><i className="pi pi-circle-fill" 
                style={{ marginRight: '6px', color: '#1e90ff',fontSize: '0.6rem'  }}></i>
                    22(월)~02(금)</p>
                    <p>강의평가 기간</p>
                </div>
            </Fieldset>
        </div>
    );
};

export default Dec;
