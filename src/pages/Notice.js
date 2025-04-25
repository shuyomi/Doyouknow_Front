import React, { useEffect, useState } from "react";
import NoticeHeader from "../components/Notice/NoticeHeader";
import NoticeCategory from "../components/Notice/NoticeCategory";
import NoticeList from "../components/Notice/NoticeList";
import axios from "axios";

const Notice = () => {
    const [selectedCategory, setSelectedCategory] = useState("전체");
    const [notices, setNotices] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8080/notice/all")
            .then((res) => {
                console.log("API 응답:", res.data);
                setNotices(res.data.content);
            })
            .catch((err) => console.error("API 호출 오류:", err));
    }, []);

    const categories = ["전체", "대학교", "학사", "대학원", "취업", "입찰채용"];

    const handleSelectCategory = (category) => {
        setSelectedCategory(category);
    };

    const filteredNotices =
        selectedCategory === "전체"
            ? notices
            : notices.filter((notice) => notice.category === selectedCategory);

    return (
        <div>
            <NoticeHeader />
            <NoticeCategory
                categories={categories}
                onSelectCategory={handleSelectCategory}
                selectedCategory={selectedCategory}
            />
            <NoticeList notices={filteredNotices} />
        </div>
    );
};

export default Notice;
