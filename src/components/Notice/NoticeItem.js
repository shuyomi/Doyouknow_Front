import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Notice/NoticeItem.css";

// 제목 일정 길이 이상일 때 ... 처리
const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
};

const NoticeItem = ({ notice }) => {
    return (
        <Link to={`/notice/detail/${notice.id}`} className="noticeitem-link">
            <div className="noticeitem-container">
                <div className="notice-header">
                    <span className="category-title">
                        <span className="category">[{notice.noticeCategory}]</span>{" "}
                        {truncateText(notice.noticeTitle, 17)}
                    </span>
                </div>
                <div className="notice-footer">
                    <span className="date">{notice.noticeDate}</span>
                    <span className="divider">|</span>
                    <span className="author">{notice.noticeWriter}</span>
                </div>
            </div>
        </Link>
    );
};

export default NoticeItem;
