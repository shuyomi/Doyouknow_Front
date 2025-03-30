import React from "react";

const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
};



const NewsItem = ({ item, index, onNewsClick }) => {
    return (
        <tr className="news-item" onClick={() => onNewsClick(item.id)}>
            <td>{index + 1}</td>
            <td>{truncateText(item.title, 20)}</td> 
            <td>{item.author}</td>
            <td>{item.date}</td>
        </tr>
    );
};

{/*const NewsItem = ({ news, onNewsClick}) => {
    return (
        <tr className="news-item" onClick={() => onNewsClick(item.id)}>
            <td>{news.newsNumber}</td>
            <td>{truncateText(news.newsTitle, 20)}</td> 
            <td>{news.author}</td>
            <td>{news.date}</td>
        </tr>
    );
}; */}

export default NewsItem;


