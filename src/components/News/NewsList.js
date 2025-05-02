import React from "react";
import "../../styles/News/NewsList.css";
import { Paginator } from "primereact/paginator";
import NewsItem from "./NewsItem";

const NewsList = ({ newslist, page, size, totalRecords, onPageChange }) => {
    return (
        <div className="news-box">
            <div className="news-list">
                {newslist.map((newsDetail) => (
                    <NewsItem key={newsDetail.id} newsDetail={newsDetail} />
                ))}
            </div>

            <div style={{ margin: "-20px -10px" }}>
                <Paginator
                    first={page * size} // 시작 인덱스
                    rows={size} // 페이지 당 데이터 수
                    totalRecords={totalRecords} // 전체 데이터 수
                    onPageChange={onPageChange} // 페이지 바뀔 때 함수
                    pt={{
                        pageButton: { className: "custom-page-btn" },
                        nextPageButton: { className: "custom-btn" },
                        prevPageButton: { className: "custom-btn" },
                    }}
                />
            </div>
        </div>
    );
};

export default NewsList;
