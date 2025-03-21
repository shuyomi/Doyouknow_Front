import React, { useState } from "react";
import NoticeHeader from "../components/Notice/NoticeHeader";
import NoticeCategory from "../components/Notice/NoticeCategory";
import NoticeList from "../components/Notice/NoticeList";

const Notice = () => {
    const [selectedCategory, setSelectedCategory] = useState("전체");

    const notices = [
        {
            id: 1,
            title: "2025학년도 신입생 모집",
            date: "2025.03.01",
            category: "대학교",
            author: "대학원교학과",
        },
        {
            id: 2,
            title: "2025학년도 신입생 모집",
            date: "2025.03.01",
            category: "학사",
            author: "대학원교학과",
        },
        {
            id: 3,
            title: "2025학년도 신입생 모집",
            date: "2025.03.01",
            category: "학사",
            author: "대학원교학과",
        },
        {
            id: 4,
            title: "2025학년도 신입생 모집",
            date: "2025.03.01",
            category: "취업",
            author: "대학원교학과",
        },
        {
            id: 5,
            title: "2025학년도 신입생 모집",
            date: "2025.03.01",
            category: "대학원",
            author: "대학원교학과",
        },
        {
            id: 6,
            title: "2025학년도 신입생 모집 언제까지할까나 내년까지할까나",
            date: "2025.03.01",
            category: "입찰채용",
            author: "대학원교학과",
        },
    ];

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
                categories={categories} //카테고리 리스트 전달
                onSelectCategory={handleSelectCategory} //카테고리 선택
                selectedCategory={selectedCategory} // 선택한 카테고리
            />
            <NoticeList notices={filteredNotices} />
        </div>
    );
};

export default Notice;
