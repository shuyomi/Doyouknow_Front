import React from "react";
import "../../styles/ContactInfo/ContactInfoHeader.css";
import { useNavigate } from 'react-router-dom';

const ContactInfoHeader = () => {

     const navigate = useNavigate();
     
    return (
        <div className='header'>
        <button className="header-button" onClick={() => navigate(-1)}>
         <i className="pi pi-arrow-left" style={{ fontSize: '1.5rem', color: 'dodgerblue' }}></i>

         </button>
           <h1 className="header-title">교내 연락처</h1>
            <button className="header-button" onClick={() => navigate('/')}>
         <i className="pi pi-home" style={{ fontSize: '1.7rem', color: 'dodgerblue' }}></i>

        </button>

    </div>
    );
};

export default ContactInfoHeader;
