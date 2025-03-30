import React from 'react';
import './Building.css';


const floors = [
    { floor: '수리관, 문화관과 운동장을 잇는 나무계단의 오솔길 / 자연의 정취를 맛볼 수 있는 아름다운 휴식공간' },



];

const Building10 = () => {
  return (
    <div className='building-detail-container'>
      <div className='building-name'>
      구름, 나뭇잎사이로
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

export default Building10;