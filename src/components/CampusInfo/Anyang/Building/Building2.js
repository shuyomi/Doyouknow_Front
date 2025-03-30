import React from 'react';
import './Building.css';


const floors = [
  { floor: '7층', description: '학생식당, 교직원식당, 서점, 매점' },
  { floor: '6층', description: '실습실, 총여학생회, 여학생휴게실, 교수연구실, 강의실' },
  { floor: '5층', description: '공동컴퓨터실, 교수연구실' },
  { floor: '4층', description: '관광학부실습실, 공동컴퓨터실, 사회과학연구소, 복지행정 연구소, 교수연구실, 강의실' },
  { floor: '3층', description: '강의실, 수업행동분석실, 교수연구실' },
  { floor: '2층', description: '학생회실, 방송국, 교/강사휴게실, 기초디자인 실습실, 기초전기전자 실험실습실' },
  { floor: '1층', description: '학생지원과, 종합인재개발센터, 학생서비스센터, 학사지원과, 교무연구지원과, 관리과' },
  { floor: '지하1층', description: '학생회실, 안울타리' },


];

const Building2 = () => {
  return (
    <div className='building-detail-container'>
      <div className='building-name'>
        수리관
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

export default Building2;