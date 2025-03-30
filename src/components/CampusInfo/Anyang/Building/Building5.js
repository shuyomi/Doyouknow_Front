import React from 'react';
import './Building.css';

const floors = [
  { floor: '옥상', description: '무대' },
  { floor: '4층', description: '대학원교학과, 대학원강의실, 디지털미디어공학 전용강의실, 교수연구실' },
  { floor: '3층', description: '디지털미디어공학 실습실, 교양강의실, 프로젝트 실습실' },
  { floor: '2층', description: '디지털미디어공학 실습실, 교양강의실, 프로젝트 실습실' },
  { floor: '1층', description: '아리 CEO ROOM, 아리센터, 교수휴게실' },
  { floor: '지하 1층', description: '네트워크 시스템실습실, 응용소프트웨어 실습실, 시스템소프트웨어 실습실, 임베디드 S/W 실습실, 교수연구실' },
  { floor: '지하 2층', description: '임베디드 시스템 연구센터, 컴퓨터실습실, 설계제도실, 수도권발전연구소, 교수휴게실' },
  { floor: '지하 3층', description: '특성화실습실, 도시정보공학 전용강의실, 컴퓨터실습실' },
  { floor: '지하 4층', description: '아리 CEO ROOM, 아리센터, 교수휴게실' },


];

const Building5 = () => {
  return (
    <div className='building-detail-container'>
      <div className='building-name'>
        아리관
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

export default Building5;