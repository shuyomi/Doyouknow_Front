import React from 'react';
import './Building.css';

const floors = [
  { floor: '6층', description: '공연예술학과 연구실, 환경공학과 실습실, 교수연구실' },
  { floor: '5층', description: '토익강좌 전용 강의실, 강의실' },
  { floor: '4층', description: '전기전자공학과 연구실, 산업기술연구소, 이공대학 행정실, 교수연구실' },
  { floor: '3층', description: '공동컴퓨터실, 디지털미디어디자인학과 실습실, CAD 및 ASIC 설계센터' },
  { floor: '2층', description: '환경공학과 실습실, 물리과학 실습실, 교수연구실' },
  { floor: '1층', description: '공연예술학과 실습실, 창업보육센터, 전자응용실험실' },
  { floor: '지하1층', description: '안양대신문사, 동아리실, 학생회실(정보통계학과, 컴퓨터학과, 정보통신공학과), 관재과' },


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