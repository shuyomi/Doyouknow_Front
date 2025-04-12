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
            <img src="/images/portal.png" alt="학교 포털" className="footer-img" />
            <span>학교 포털</span>
        </a>

        <a
            href="https://www.anyang.ac.kr/main/index.do"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-item"
        >
            <img src="/images/official.png" alt="공식 사이트" className="footer-img" />
            <span>공식 사이트</span>
        </a>

        <a
            href="https://naver.me/yourformlink"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-item"
        >
            <img src="/images/inquiry.png" alt="문의하기" className="footer-img" />
            <span>문의하기</span>
        </a>
    </div>

    );
};

export default Footer;