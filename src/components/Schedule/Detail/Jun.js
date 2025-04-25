import React from "react";
import { Fieldset } from 'primereact/fieldset';
import "../../../styles/Schedule/ScheduleDetail.css";

const Jun = () => {
    return (
      <div className="schedule">
                   <Fieldset legend="6월 일정"style={{ marginTop: '30px' }}>
                   
                   <div>
                <p><i className="pi pi-circle-fill" 
                style={{ marginRight: '6px', color: '#1e90ff',fontSize: '0.6rem'  }}></i>
                    06(금)</p>
                    <p>현충일</p>
                </div>

               
                <div style={{ paddingTop: '5px' }}>
                <p>
                <i className="pi pi-circle-fill" 
                style={{ marginRight: '6px', color: '#1e90ff',fontSize: '0.6rem'  }}></i>
                    10(화)~16(월)</p>
                    <p>기말고사 기간</p>
                </div>

               
                <div style={{ paddingTop: '5px' }}>
                <p>
                <i className="pi pi-circle-fill" 
                style={{ marginRight: '6px', color: '#1e90ff',fontSize: '0.6rem'  }}></i>
                    10(화)~20(금)</p>
                    <p>성적입력 기간</p>
                </div>

               
                <div style={{ paddingTop: '5px' }}>
                <p>
                <i className="pi pi-circle-fill" 
                style={{ marginRight: '6px', color: '#1e90ff',fontSize: '0.6rem'  }}></i>
                    16(월)</p>
                    <p>1학기 종강</p>
                </div>

                
                <div style={{ paddingTop: '5px' }}>
                <p>
                <i className="pi pi-circle-fill" 
                style={{ marginRight: '6px', color: '#1e90ff',fontSize: '0.6rem'  }}></i>
                    23(월)</p>
                    <p>하계 계절수업 개강</p>
                </div>

                
                <div style={{ paddingTop: '5px' }}>
                <p>
                <i className="pi pi-circle-fill" 
                style={{ marginRight: '6px', color: '#1e90ff',fontSize: '0.6rem'  }}></i>
                    24(화)~27(금)</p>
                    <p>성적확인 및 정정 기간</p>
                </div>

                
                <div style={{ paddingTop: '5px' }}>
                <p>
                <i className="pi pi-circle-fill" 
                style={{ marginRight: '6px', color: '#1e90ff',fontSize: '0.6rem'  }}></i>  
                    24(화)~04(금)</p>
                    <p>강의평가 기간</p>
                </div>

            </Fieldset>
        </div>
    );
};

export default Jun;
