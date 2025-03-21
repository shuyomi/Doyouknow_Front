import React from "react";
import { Link } from "react-router-dom"; // Link 임포트
import "../../styles/Notice/NoticeItem.css";

const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
};

const NoticeItem = ({ notice }) => {
    return (
        <Link to={`/notice/detail/${notice.id}`} className="noticeitem-link">
            <div className="noticeitem-container">
                <div className="notice-header">
                    <span className="category-title">
                        <span className="category">[{notice.category}]</span>{" "}
                        {truncateText(notice.title, 17)}
                    </span>
                </div>
                <div className="notice-footer">
                    <span className="date">{notice.date}</span>
                    <span className="divider">|</span>
                    <span className="author">{notice.author}</span>
                </div>
            </div>
        </Link>
    );
};

export default NoticeItem;
