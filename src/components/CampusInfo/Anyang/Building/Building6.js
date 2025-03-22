import React from 'react';
import './Building.css';

//층별안내 정보 수저 필요
//홈페이지에 나와잇는 층별 정보랑 실제 정보랑 다른 거 같다.

const floors = [
  { floor: '7층', description: '조명 및 음향실' },
  { floor: '6층', description: '소극장, 교수연구실, 교수휴게실' },
  { floor: '5층', description: '공연연습실, 교수연구실, 원장실, 행정실, 교육회의실, 자재실, 개발실, 시스템실' },
  { floor: '4층', description: '강의실, 회화강의실, 국제교류센터사무실, 영어카페' },
  { floor: '3층', description: '강의실, 종합인재실, 상담실, 학생과, 회의실, 보건진료실, 학생홀 및 전시장' },
  { floor: '2층', description: '체력단련실, 체육실, 자치단체실, 학과사무실' },
  { floor: '1층', description: '회의실, 총학생회실(남), 다용도실, 다목적실' },
  { floor: '지하 1층', description: '자체단체실, 동아리실, 회의실, 총학생회실(여), 수면실, 동아리연급실' },
  { floor: '지하 2층', description: '임베디드 시스템 연구센터, 컴퓨터실습실, 설계제도실, 수도권발전연구소, 교수휴게실' },
  { floor: '지하 3층', description: '특성화실습실, 도시정보공학 전용강의실, 컴퓨터실습실' },
  { floor: '지하 4층', description: '아리 CEO ROOM, 아리센터, 교수휴게실' },


];

const Building6 = () => {
  return (
    <div className='building-detail-container'>
      <div className='building-name'>
        비전센터
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

export default Building6;