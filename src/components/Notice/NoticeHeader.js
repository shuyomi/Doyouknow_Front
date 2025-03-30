import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Notice/NoticeHeader.css";

const NoticeHeader = () => {
    return (
        <header className="notice-header">
            <Link to="/"></Link>
            <h1>공지사항</h1>
            <div></div>
        </header>
    );
};

export default NoticeHeader;
