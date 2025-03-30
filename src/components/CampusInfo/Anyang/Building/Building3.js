import React from 'react';
import './Building.css';


const floors = [
  { floor: '14층', description: '예배실, 학생회실(기독교문화학과, 신학과), 교목실, 기도실, Internet Cafe' },
  { floor: '13층', description: '신앙상담실, 기독교교육과 전용강의실, 교양전용 강의실, 중국어학과, 전용강의실, 신학과 전용강의실, 기독교문화학과 전용강의실, 교수연수실' },
  { floor: '12층', description: '식품영양학과 전용강의실, 정보통계학과실습실, 교수연구실' },
  { floor: '11층', description: '러시아어학과 전용강의실, 중국어학과 전용강의실, 통계학과 전용강의실, 컴퓨터학과 전용강의실, 영문과 전용강의실, 교수연구실' },
  { floor: '10층', description: '공동컴퓨터실, 국문과 전용강의실, 영문과 전용강의실, 교수연수실, 입학사정관 연구실' },
  { floor: '9층',  description: '공동컴퓨터실, 전산정보원, 교수연구실' },
  { floor: '8층',  description: 'Multi-Room, 평생교육원 전용강의실, 신학연 컨소시센터, 입학사정관실' },
  { floor: '7층', description: '이사장실, 총장실, 부총장실, 회의실, 처장실, 대만연구소, 기획예산과' },
  { floor: '6층', description: '입학관리과, 평생교육원, 평가지원과, 대외협력홍보과, 총무과, 재무과, 법인사무처' },
  { floor: '5층', description: '유아교육과 전용강의실, 유아교육과 학과사무실, 안양교육 연구소, 교수연구실' },
  { floor: '4층', description: 'Dance Room, 교수연구실' },
  { floor: '3층', description: '국제교류센터, 학생휴게실, 구내미용실' },
  { floor: '2층', description: '평생교육원자료실, 유품실' },
  { floor: '1층', description: '복사실' },
 


];

const Building1 = () => {
  return (
    <div className='building-detail-container'>
      <div className='building-name'>
        대신관
      </div>

      <div className='floor-list'>

        {floors.map((floor, index) => (
          <div key={index} className='floor-card'>
            <div className='floor-name'>{floor.floor}</div>
            <div className='floor-description'>{floor.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Building1;