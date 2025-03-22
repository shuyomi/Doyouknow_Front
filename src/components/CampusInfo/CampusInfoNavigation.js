import React from 'react';
import '../../styles/CampusInfo/CampusInfoNavigation.css';



const  CampusInfoNavigation  = ({ currentCampus, onCampusChange }) => {

  return (
    <div className='button'>
         <div className='left-button'>
           <button
        className={`nav-button ${currentCampus === 'anyang' ? 'active' : ''}`}
        onClick={() => onCampusChange('anyang')}>
          안양캠퍼스
      </button>
         </div>
       


         <div className='right-button'>
      <button
        className={`nav-button ${currentCampus === 'ganhwa' ? 'active' : ''}`}
        onClick={() => onCampusChange('ganhwa')}>
        강화캠퍼스
      </button>
    </div>
    </div>
  );
};

export default CampusInfoNavigation;