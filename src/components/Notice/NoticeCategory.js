import React from "react";
import "../../styles/Notice/NoticeCategory.css";

const NoticeCategory = ({ categories, onSelectCategory, selectedCategory }) => {
    return (
        <div className="notice-category-container">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onSelectCategory(category)}
                    className={`notice-category-btn ${
                        selectedCategory === category ? "selected" : ""
                    }`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default NoticeCategory;
