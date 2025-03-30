import React from "react";
import "../../styles/News/NewsList.css";

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
                        <tr key={item.id} onClick={() => onNewsClick(item.id)} className="news-item">
                            <td>{index + 1}</td>
                            <td>{item.title}</td>
                            <td>{item.author}</td>
                            <td>{item.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default NewsList;