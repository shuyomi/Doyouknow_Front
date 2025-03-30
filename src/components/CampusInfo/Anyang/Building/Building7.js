import React from 'react';
import './Building.css';



const floors = [
  { floor: '준비중입니다.' },



];

const Building7 = () => {
  return (
    <div className='building-detail-container'>
      <div className='building-name'>
        창의융합관
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

export default Building7;