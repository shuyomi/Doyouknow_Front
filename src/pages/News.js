import React, { useState, useEffect, useCallback } from "react";
import "../styles/News/News.css";
import Header from "../components/News/NewsHeader";
import NewsList from "../components/News/NewsList";
import axios from "axios";

const News = () => {
    const [newslist, setNewslist] = useState([]);
    const [page, setPage] = useState(0);
    const [size] = useState(10);
    const [totalRecords, setTotalRecords] = useState(0);

    const fetchNews = useCallback(
        (page) => {
            axios
                .get(`http://15.164.79.59:8080/news/all?page=${page}&size=${size}`)
                .then((res) => {
                    setNewslist(res.data.content);
                    setTotalRecords(res.data.totalElements);
                })
                .catch((err) => console.log("api 호출 오류:", err));
        },
        [size]
    );

    useEffect(() => {
        fetchNews(page);
    }, [fetchNews, page]);

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
