import React, { useState } from 'react';
import '../../styles/CampusInfo/CampusInfoContents.css';
import CampusInfoNavigation from "./CampusInfoNavigation";
import CampusInfoBody from "./CampusInfoBody"; 






const CampusInfoContents = () => {

  const [currentCampus, setCurrentCampus] = useState('anyang'); // 기본은 안양캠 페이지


  return (
    <div className='CampusInfo-contents'>
          <div className='Nav'>
          <CampusInfoNavigation currentCampus={currentCampus} onCampusChange={setCurrentCampus} />
           </div>

      <div className='CampusBody'>
      <CampusInfoBody currentCampus={currentCampus} />
      </div>
        
    </div>
  );
};

export default CampusInfoContents;