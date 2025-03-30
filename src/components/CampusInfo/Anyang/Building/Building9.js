import React from 'react';
import './Building.css';


const floors = [
    { floor: '4층', description: '중강당, 음악대학행정지원실, 창업보육센터' },
    { floor: '3층', description: '음악대학 연습실, 음악대학 레슨실, 교수연구실' },
    { floor: '2층', description: '음악대학전용 강의실, 교수연구실' },
    { floor: '1층', description: '식품영양학과 실습실, 교수연구실, 지휘세미나실' },
    { floor: '지하 1층', description: '관현악 실습실, 공연 연습실, 총동문회실, 졸업준비위원회, 식품영양학과 실습실' }



];

const Building9 = () => {
  return (
    <div className='building-detail-container'>
      <div className='building-name'>
        문화관
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

export default Building9;