import React from "react";
import { Link } from "react-router-dom";
import "../../styles/News/NewsItem.css";

const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
};

const NewsItem = ({ newsDetail }) => {
    return (
        <Link to={`/news/detail/${newsDetail.id}`} className="newsitem-link">
            <div className="news-container">
                <div className="news-header">
                    <span className="category-title">{truncateText(newsDetail.newsTitle, 23)}</span>
                </div>
                <div className="news-footer">
                    <span className="date">{newsDetail.newsDate}</span>
                    <span className="divider">|</span>
                    <span className="writer">{newsDetail.newsWriter}</span>
                </div>
            </div>
        </Link>
    );
};

export default NewsItem;
