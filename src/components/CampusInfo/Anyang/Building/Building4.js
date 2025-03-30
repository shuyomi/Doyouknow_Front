import React from 'react';
import './Building.css';

const floors = [
  { floor: '5층', description: '한구석밝히기 실천운동본부, 한구석밝히기 연구소, 한구석밝히기 전용강의실, 명예총장 유품실, 교수연구실' },
  { floor: '4층', description: '개가자료실1, 개가자료실2, 국외도서자료실, 열람과, 대화실' },
  { floor: '3층', description: '멀티미디어실, 영상자료실, 학위논문실, 참고도서자료실, 정기간행물실, 과월호실, 대화실' },
  { floor: '2층', description: '제3열람실, 개가자료실3(종교, 예술), 정보검색실, 도서관장실, 수서과' },
  { floor: '1층', description: '아트리움, 제1열람실, 제2열람실, 세미나실' },
  { floor: '지하 1층', description: '아름대운리더홀, 세미나실, 교수연구실, 자료보관실' },
  { floor: '지하 2층', description: '강의실' },
  { floor: '지하 3층', description: '전산실습실, 강의실' },
  { floor: '지하 4층', description: '기계실, 변전실, 발전기실' },


];

const Building4 = () => {
  return (
    <div className='building-detail-container'>
      <div className='building-name'>
        일우중앙도서관
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

export default Building4;