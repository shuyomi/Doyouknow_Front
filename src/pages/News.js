import React, { useState, useEffect } from "react";
import "../styles/News/News.css";
import Header from "../components/News/NewsHeader";
import NewsList from "../components/News/NewsList";
import axios from "axios";

const News = () => {
    const [newslist, setNewslist] = useState([]);
    const [page, setPage] = useState(0); // 현재 페이지
    const [size, setSize] = useState(10); //페이지 당 데이터 수
    const [totalRecords, setTotalRecords] = useState(0); // 전체 데이터 수

    const fetchNews = (page) => {
        axios
            .get(`http://localhost:8080/news/all?page=${page}&size=${size}`)
            .then((res) => {
                setNewslist(res.data.content);
                setTotalRecords(res.data.totalElements);
            })
            .catch((err) => console.log("api 호출 오류:", err));
    };

    useEffect(() => {
        fetchNews(page);
    }, [page]);

    const handlePageChange = (event) => {
        setPage(event.page);
    };

    return (
        <div className="News-contents">
            <Header />
            <NewsList
                newslist={newslist}
                page={page}
                size={size}
                totalRecords={totalRecords}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default News;
