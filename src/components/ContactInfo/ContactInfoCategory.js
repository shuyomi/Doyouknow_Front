import React from "react";
import "../../styles/ContactInfo/ContactInfoCategory.css";

const ContactInfo = ({ categories, onSelectCategory, selectedCategory }) => {
    return (
        <div className="contactInfo-category-container">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onSelectCategory(category)}
                    className={`contactInfo-category-btn ${
                        selectedCategory === category ? "active" : ""
                    }`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default ContactInfo;
