import React, { useState, useEffect } from "react";
import "../styles/News/News.css";
import Header from "../components/News/NewsHeader";
import NewsList from "../components/News/NewsList";
import axios from "axios";

const News = () => {
    const [newslist, setNews] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8080/news/all")
            .then((res) => {
                console.log("API 응답:", res.data);
                setNews(res.data.content);
            })
            .catch((err) => console.error("API 호출 오류:", err));
    }, []);

    return (
        <div className="News-contents">
            <Header />
            <NewsList newslist={newslist} />
        </div>
    );
};

export default News;
