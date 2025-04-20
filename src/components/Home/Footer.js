import React from "react";
import "../../styles/Home/Footer.css";

const Footer = () => {
    return (
        <div className="footer">
        <a
            href="https://portal.anyang.ac.kr/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-item"
        >
            <i
        className="pi pi-external-link footer-icon"
        style={{ margin: 'auto', paddingBottom:'5px'}}
        ></i>
            <span>학교 포털</span>
        </a>
        <a
            href="https://www.anyang.ac.kr/main/index.do"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-item"
        >
             <i
        className="pi pi-globe footer-icon"
        style={{  margin: 'auto', paddingBottom:'5px' }}
        ></i>
            <span>공식 사이트</span>
        </a>

        <a
         href="https://naver.me/yourformlink"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-item"
        >
        <i
        className="pi pi-comments footer-icon"
        style={{ margin: 'auto', paddingBottom:'5px' }}
        ></i>
        <span>문의하기</span>
        </a>
        </div>

    );
};

export default Footer;