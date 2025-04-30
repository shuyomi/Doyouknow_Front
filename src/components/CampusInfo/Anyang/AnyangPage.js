import React from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import 'primereact/resources/themes/lara-light-blue/theme.css'; 
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './AnyangPage.css';



const Test = () => {
  return (
    <div className="anyang-page">
          <div className="map-container">
            <img src="/images/CampusAnyang.png" alt="캠퍼스 지도" className="campus-map" />
          </div>
          <Accordion activeIndex={0}>
            <AccordionTab header="① 대신관"  style={{ margin: 0,  fontSize: '1rem' }}>
              <ul className="info-content" style={{ margin: 0,  fontSize: '0.8rem' }}>
                <li><i className="pi pi-circle-fill" 
                    style={{ marginRight: '10px', color: '#fefefe',fontSize: '0.6rem'  }}></i>
                    이공대학 실험실습실, 교수 연구실, 학보사, 복지공간 위치 / 실시간 쌍방향 수업진행 "U-러닝 강의실"</li>
                
              </ul>
            </AccordionTab>
            <AccordionTab header="② 수리관"  style={{ margin: 0,  fontSize: '1rem' }}>
              <ul className="info-content" style={{ margin: 0,  fontSize: '0.8rem' }}>
                <li><i className="pi pi-circle-fill" 
                    style={{ marginRight: '10px', color: '#1e90ff',fontSize: '0.6rem'  }}></i>
                    안양대학교 최초의 건물 / 교수, 강사를 위한 휴게실 / 학생 및 교직원의 식당&서점</li>
    
              </ul>
            </AccordionTab>
            <AccordionTab header="③ 수봉관" style={{ margin: 0,  fontSize: '1rem' }}>
              <ul className="info-content" style={{ margin: 0,  fontSize: '0.8rem' }}>
                <li><i className="pi pi-circle-fill" 
                    style={{ marginRight: '10px', color: '#1e90ff',fontSize: '0.6rem'  }}></i>
                    14층 높이의 안양대학교 명물 수봉관</li>
              
              </ul>
            </AccordionTab>
            <AccordionTab header="④ 일우중앙도서관"  style={{ margin: 0,  fontSize: '1rem' }}>
              <ul className="info-content" style={{ margin: 0,  fontSize: '0.8rem' }}>
                <li><i className="pi pi-circle-fill" 
                    style={{ marginRight: '10px', color: '#1e90ff',fontSize: '0.6rem'  }}></i>
                  멀티미디어실, 영상자료실, 학위논문실, 참고도서자료실, 정기간행물실, 과월호실, 대화실, 제3열람실, 개가자료실3(종교, 예술), 정보검색실, 도서관장실, 수서과</li>
              </ul>
            </AccordionTab>
            <AccordionTab header="⑤ 아리관"  style={{ margin: 0,  fontSize: '1rem' }}>
              <ul className="info-content" style={{ margin: 0,  fontSize: '0.8rem' }}>
                <li><i className="pi pi-circle-fill" 
                    style={{ marginRight: '10px', color: '#1e90ff',fontSize: '0.6rem'  }}></i>
                 첨단시설을 집합시킨 인텔리전트 건축물 / 아름다운리더의 학습 공간 스터디 룸 / 글로벌 시대에 발맞춰나가는 외국어 교육센터</li>
              </ul>
            </AccordionTab>
            <AccordionTab header="⑥ 비전센터"  style={{ margin: 0,  fontSize: '1rem' }}>
              <ul className="info-content" style={{ margin: 0,  fontSize: '0.8rem' }}>
                <li><i className="pi pi-circle-fill" 
                    style={{ marginRight: '10px', color: '#1e90ff',fontSize: '0.6rem'  }}></i>
                 최첨단 시설을 갖춘 문화복지공간</li>
              </ul>
            </AccordionTab>
            <AccordionTab header="⑦ 창의융합관"  style={{ margin: 0,  fontSize: '1rem' }}>
              <ul className="info-content" style={{ margin: 0,  fontSize: '0.8rem' }}>
                <li><i className="pi pi-circle-fill" 
                    style={{ marginRight: '10px', color: '#1e90ff',fontSize: '0.6rem'  }}></i>
                 1층 AI실', '2층 프로젝트실', '3층 창업보육센터</li>
              </ul>
            </AccordionTab>
            <AccordionTab header="⑧ 문화관"  style={{ margin: 0,  fontSize: '1rem' }}>
              <ul className="info-content" style={{ margin: 0,  fontSize: '0.8rem' }}>
                <li><i className="pi pi-circle-fill" 
                    style={{ marginRight: '10px', color: '#1e90ff',fontSize: '0.6rem'  }}></i>
                음악대학과 다양한 매체공간이 위치한 문화관 / 중소ㆍ벤쳐 기업의 창업촉진을 돕는 창업보육센터</li>
              </ul>
            </AccordionTab>
          </Accordion>
        </div>
      );
    };


export default Test;
