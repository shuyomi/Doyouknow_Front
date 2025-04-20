import React from "react";
import "../../styles/News/NewsList.css";
import NewsItem from "./NewsItem"; 




const NewsList = ({ news, onNewsClick }) => {
    return (
        <div className="news-list">
            <table className="news-table">
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                    </tr>
                </thead>
                <tbody>
                {news.map((item, index) => (
                        <NewsItem key={item.id} item={item} index={index} onNewsClick={onNewsClick} />
                    ))}
                    {/*{news.map(news) => (
                        <NewsItem key={news.id} news={news} onNewsClick={onNewsClick} />
                    ))} */}
                </tbody>
            </table>
        </div>
    );
};

export default NewsList;