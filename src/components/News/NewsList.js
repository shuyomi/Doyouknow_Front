import React, { useState} from "react";
import "../../styles/News/NewsList.css"; 
import { Paginator } from 'primereact/paginator';

const NewsList = ({ news, onNewsClick }) => {
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);

const truncateText = (text, maxLength) => {
        return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
    };

    const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
    };

    const sortedNews = [...news].sort((a, b) => new Date(b.date) - new Date(a.date)); // 날짜 기준 정렬
    const currentNews = sortedNews.slice(first, first + rows);
    
    return (
        <div className="news-box">
    <div className="news-list">
        {currentNews.map((item, index) => (
            <div
                key={item.id}
                className="newsitem-container"
                onClick={() => onNewsClick(item.id)}
            >
                <div className="news-header">
                <span className="news-title">{truncateText(item.title, 20)}</span>
                </div>
                <div className="news-footer">
                    <span className="news-author">{item.author}</span>
                    <span className="divider">|</span>
                    <span className="news-date">{item.date}</span>
                    <span className="divider">|</span>
                    <span className="news-number">No. {first + index + 1}</span>
                </div>
            </div>
        ))}
    </div>

    <div style={{ margin: '0 -10px' }}>
    <Paginator
    first={first}
    rows={rows}
    totalRecords={news.length}
    onPageChange={onPageChange}
    pt={{
        pageButton: {
            className: 'custom-page-btn'
        },
        nextPageButton: {
            className: 'custom-btn'
        },
        prevPageButton: {
            className: 'custom-btn'
        }
    }}
/>
</div>
</div>

    );
};

export default NewsList;