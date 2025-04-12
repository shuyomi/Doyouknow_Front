import React, { useState, useEffect } from "react";
import "../../styles/News/NewsList.css";
import NewsItem from "./NewsItem"; 
import { Paginator } from 'primereact/paginator';

const NewsList = ({ news, onNewsClick }) => {
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);



    const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
    };

    const sortedNews = [...news].sort((a, b) => new Date(b.date) - new Date(a.date)); // 날짜 기준 정렬
    const currentNews = sortedNews.slice(first, first + rows);
    
    return (
        <div className="news-box">

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
                    {currentNews.map((item, index) => (
                            <NewsItem key={item.id} item={item} index={first + index} onNewsClick={onNewsClick} />
                        ))}
                    </tbody>
                </table>
            </div>

            <Paginator
                first={first}
                rows={rows}
                totalRecords={news.length}
                onPageChange={onPageChange}
            />
        </div>
    );
};

export default NewsList;