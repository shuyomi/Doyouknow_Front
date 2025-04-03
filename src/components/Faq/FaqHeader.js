import React from "react";
import { useNavigate } from 'react-router-dom';
import "../../styles/Faq/FaqHeader.css";

const FaqHeader = () => {
    const navigate = useNavigate();
    
      return (
        <div className='header'>
             <button className="header-button" onClick={() => navigate(-1)}>
             <img src="/images/Backicon.png" alt="Back" />
             </button>
    
             <h1 className="header-title">자주 묻는 질문</h1>
    
            <button className="header-button" onClick={() => navigate('/')}>
            <img src="/images/Homeicon.png" alt="Back" />  {/*이미지 변경 필요*/}
    
            </button>
    
        </div>
      );
    };

export default FaqHeader;
