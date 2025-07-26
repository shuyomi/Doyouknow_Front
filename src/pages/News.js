import React, { useState, useEffect, useCallback } from "react";
import "../styles/News/News.css";
import Header from "../components/News/NewsHeader";
import NewsList from "../components/News/NewsList";
import NewsSearch from "../components/News/NewsSearch";
import axios from "axios";

const News = () => {
    const [newslist, setNewslist] = useState([]);
    const [page, setPage] = useState(0);
    const [size] = useState(10);
    const [totalRecords, setTotalRecords] = useState(0);
    const [searchKeyword, setSearchKeyword] = useState("");

    const fetchNews = useCallback(
        (currentPage) => {
            let url = "";
            if (searchKeyword) {
                url = `https://doyouknow.shop/news/search?keyword=${searchKeyword}&page=${currentPage}&size=${size}`;
            } else {
                url = `https://doyouknow.shop/news/all?page=${currentPage}&size=${size}`;
            }

            axios
                .get(url)
                .then((res) => {
                    setNewslist(res.data.content);
                    setTotalRecords(res.data.totalElements);
                })
                .catch((err) => console.log("API 호출 오류:", err));
        },
        [size, searchKeyword]
    );

    useEffect(() => {
        fetchNews(page);
    }, [fetchNews, page]);

    const handlePageChange = (event) => {
        setPage(event.page);
    };

    const handleSearch = (keyword) => {
        setSearchKeyword(keyword);
        setPage(0);
    };

    return (
        <div className="News-contents">
            <Header />
            <NewsSearch onSearch={handleSearch} />
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