import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/CampusInfo/CampusInfoHeader.css';





const CampusInfoHeader = () => {

  const navigate = useNavigate();

  return (
    <div className='header'>
         <button className="header-button" onClick={() => navigate(-1)}>
         <img src="/images/Backicon.png" alt="Back" />
         </button>

         <h1 className="header-title">캠퍼스 안내</h1>

        <button className="header-button" onClick={() => navigate('/')}>
        <img src="/images/Homeicon.png" alt="Back" />  {/*이미지 변경 필요*/}

        </button>

    </div>
  );
};

export default CampusInfoHeader;