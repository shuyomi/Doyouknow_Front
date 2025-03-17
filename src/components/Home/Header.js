import React, { useState } from "react";
import './Styles/Header.css';
import { Link } from "react-router-dom"; 


const Header = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // 메뉴 데이터를 배열로 저장
  const menuItems = [ { name: "학사일정", path: "/Schedule" },
    { name: "공지사항", path: "/notice" },
    { name: "학교소식", path: "/news" },
    { name: "캠퍼스 안내", path: "/CampusInfo" },
    { name: "연락처 안내", path: "/ContactInfo" },
    { name: "FAQ", path: "/Faq" },];

    return(

       
     <div className="header">
     <div className="left">
      AYU
     </div>
     <div className="right" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
     ☰
    </div>
      {/* 사이드바 */}
        <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        {/* 사이드바 닫기 버튼 */}
        <button className="close-button" onClick={() => setIsSidebarOpen(false)}>✖</button>

        {/* 메뉴 리스트 */}
        <ul className="menu">
          {menuItems.map((item, index) => (
            <li key={index}>
            <Link to={item.path} onClick={() => setIsSidebarOpen(false)}> 
            {item.name}
            </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* 어두운 배경 (사이드바가 열리면 보이게 됨) */}
      {isSidebarOpen && <div className="overlay" onClick={() => setIsSidebarOpen(false)}></div>}


    </div>
    );
     
  };
  
  export default Header;
