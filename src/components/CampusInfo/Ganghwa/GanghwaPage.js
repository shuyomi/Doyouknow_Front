import React from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import 'primereact/resources/themes/lara-light-blue/theme.css'; 
import 'primereact/resources/primereact.min.css'; 
import 'primeicons/primeicons.css';
import './GanghwaPage.css';

const GTest = () => {
  return (
    <div className="anyang-page">
      <div className="map-container">
        <img src="/images/CampusGanghwa.png" alt="캠퍼스 지도" className="campus-map" />
      </div>
      <div className="active-box">
      <Accordion activeIndex={0}>
        <AccordionTab header="① 이공 인문학관"  style={{ margin: 0,  fontSize: '1rem' }}>
          <ul className="info-content" style={{ margin: 0,  fontSize: '0.8rem' }}>
            <li><i className="pi pi-circle-fill" 
                style={{ marginRight: '10px', color: '#1e90ff',fontSize: '0.6rem'  }}></i>5층 해양바이오공학전공 실습실, 전산실습실, 참고도서자료실, 열람실, 개가자료실</li>
            <li><i className="pi pi-circle-fill" 
                style={{ marginRight: '10px', color: '#1e90ff',fontSize: '0.6rem'  }}></i>4층 융합소프트웨어전공 학과사무실, 회의실, 컴퓨터실습실, 학생회실, 강의실</li>
            <li><i className="pi pi-circle-fill" 
                style={{ marginRight: '10px', color: '#1e90ff',fontSize: '0.6rem'  }}></i>2층 공공행정학과 학과사무실, 교수연구실, 강의실, 탁구장/당구장</li>
            <li><i className="pi pi-circle-fill" 
                style={{ marginRight: '10px', color: '#1e90ff',fontSize: '0.6rem'  }}></i>1층 멀티미디어강의실, 학장실, 행정실, 교수휴게실</li>
            <li><i className="pi pi-circle-fill" 
                style={{ marginRight: '10px', color: '#1e90ff',fontSize: '0.6rem'  }}></i>B1층 교양실습실, 매점</li>
          </ul>
        </AccordionTab>
        <AccordionTab header="② 학생회관"  style={{ margin: 0,  fontSize: '1rem' }}>
          <ul className="info-content" style={{ margin: 0,  fontSize: '0.8rem' }}>
            <li><i className="pi pi-circle-fill" 
                style={{ marginRight: '10px', color: '#1e90ff',fontSize: '0.6rem'  }}></i>대강의실, 학생회실, 동아리실</li>

          </ul>
        </AccordionTab>
        <AccordionTab header="③ 생활관" style={{ margin: 0,  fontSize: '1rem' }}>
          <ul className="info-content" style={{ margin: 0,  fontSize: '0.8rem' }}>
            <li><i className="pi pi-circle-fill" 
                style={{ marginRight: '10px', color: '#1e90ff',fontSize: '0.6rem'  }}></i>기숙사, 식당, 관리실, 휴게실</li>
          
          </ul>
        </AccordionTab>
        <AccordionTab header="④ 팔각정"  style={{ margin: 0,  fontSize: '1rem' }}>
          <ul className="info-content">
            <li> </li>
          </ul>
        </AccordionTab>
      </Accordion>
      </div>
    </div>
  );
};

export default GTest;