import React from "react";
import { Link } from "react-router-dom"; 
import './Styles/Menu.css';

const Header = () => {
    return(
    <div className="button-container">
    
    <Link to="/Schedule">
    <button className="square-btn">학사일정</button>
    </Link>

    <Link to="/notice">
    <button className="square-btn">공지사항</button>
    </Link>

    
    <Link to="/news">
    <button className="square-btn">학교소식</button>
    </Link>

    <Link to="/CampusInfo">
    <button className="square-btn">캠퍼스 안내</button>
    </Link>

    <Link to="/ContactInfo">
    <button className="square-btn">연락처 안내</button>
    </Link>

    <Link to="/Faq">
    <button className="square-btn">자주 묻는 질문</button>
    </Link>

  </div>
    )
};

export default Header;