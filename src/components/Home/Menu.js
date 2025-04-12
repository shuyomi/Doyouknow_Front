import React from "react";
import { Link } from "react-router-dom"; 
import "../../styles/Home/Menu.css";

const Header = () => {
    return(
    <div className="button-container">

    
    <Link to="/Schedule">
    
    <button className="square-btn vertical-btn">
    <i className="pi pi-calendar-clock" 
    style={{ fontSize: '2rem', color: 'rgb(103, 181, 254)',marginBottom: '5px' }}></i>
    <span>학사일정</span>
  </button>
    </Link>

    <Link to="/notice">
    <button className="square-btn vertical-btn">
    <i className="pi pi-megaphone" 
    style={{ fontSize: '2rem', color: 'rgb(103, 181, 254)',marginBottom: '5px' }}></i>
    공지사항</button>
    </Link>

 
  <Link to="/news">
    <button className="square-btn vertical-btn">
    <i className="pi pi-graduation-cap" 
    style={{ fontSize: '2rem', color:'rgb(103, 181, 254)',marginBottom: '5px' }}></i>
    학교소식</button>
    </Link>

    <Link to="/CampusInfo">
    <button className="square-btn vertical-btn">
    <i className="pi pi-map-marker" 
    style={{ fontSize: '2rem', color: 'rgb(103, 181, 254)',marginBottom: '5px' }}></i>
    캠퍼스 안내</button>
    </Link>

    <Link to="/ContactInfo">
    <button className="square-btn vertical-btn">
    <i className="pi pi-address-book" 
    style={{ fontSize: '2rem', color: 'rgb(103, 181, 254)',marginBottom: '5px' }}></i>
    연락처 안내</button>
    </Link>

    <Link to="/Faq">
    <button className="square-btn vertical-btn">
    <i className="pi pi-question-circle" 
    style={{ fontSize: '2rem', color: 'rgb(103, 181, 254)',marginBottom: '5px' }}></i>
    자주 묻는 질문</button>
    </Link>

  </div>
    )
};

export default Header;