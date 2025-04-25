import React, { useEffect, useState } from "react";
import NoticeHeader from "../components/Notice/NoticeHeader";
import NoticeCategory from "../components/Notice/NoticeCategory";
import NoticeList from "../components/Notice/NoticeList";
import axios from "axios";

const Notice = () => {
    const [selectedCategory, setSelectedCategory] = useState("전체");
    const [notices, setNotices] = useState([]);

    const categories = ["전체", "대학교", "학사", "대학원", "취업", "입찰채용"];

    useEffect(() => {
        const fetchNotices = async () => {
            try {
                let url = "http://localhost:8080/notice/all";
                if (selectedCategory !== "전체") {
                    url = `http://localhost:8080/notice/category?noticeCategory=${encodeURIComponent(
                        selectedCategory
                    )}`;
                }

                const res = await axios.get(url);
                console.log("API 응답:", res.data);
                setNotices(res.data.content);
            } catch (err) {
                console.error("API 호출 오류:", err);
            }
        };

        fetchNotices();
    }, [selectedCategory]); // 카테고리 바뀔 때마다 호출

    const handleSelectCategory = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div>
            <NoticeHeader />
            <NoticeCategory
                categories={categories}
                onSelectCategory={handleSelectCategory}
                selectedCategory={selectedCategory}
            />
            <NoticeList notices={notices} />
        </div>
    );
};

export default Notice;
