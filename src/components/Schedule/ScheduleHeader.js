import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Schedule/ScheduleHeader.css";

const ScheduleHeader = () => {
    const navigate = useNavigate();
    
      return (
        <div className='header'>
             <button className="header-button" onClick={() => navigate(-1)}>
             <i className="pi pi-arrow-left" style={{ fontSize: '1.2rem', color: 'dodgerblue' }}></i>
    
             </button>
    
             <h1 className="header-title">학사일정</h1>
             <button className="header-button" onClick={() => navigate('/')}>
         <i className="pi pi-home" style={{ fontSize: '1.5rem', color: 'dodgerblue' }}></i>

        </button>

    </div>
    );
};

export default ScheduleHeader;
