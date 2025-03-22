import React from 'react';
import '../../styles/CampusInfo/CampusInfoBody.css';
import AnyangPage from './Anyang/AnyangPage';
import GanghwaPage from './Ganghwa/GanghwaPage';

const CampusInfoBody = ({ currentCampus }) => {
  return (
    <div className='Body'>
      {currentCampus === 'anyang' && <AnyangPage />}
      {currentCampus === 'ganhwa' && <GanghwaPage />}
    </div>
  );
};

export default CampusInfoBody;