import React, { useState } from "react";
import "../styles/ContactInfo/ContactInfo.css";
import ContactInfoCategory from "../components/ContactInfo/ContactInfoCategory";
import ContactInfoHeader from "../components/ContactInfo/ContactInfoHeader";
import ContactInfoList from "../components/ContactInfo/ContactInfoList";


const ContactInfo = () => {
    const [selectedCategory, setSelectedCategory] = useState("안양캠퍼스");
    
    const handleSelectCategory = (category) => {
        setSelectedCategory(category);
    };

    const categories = ["안양캠퍼스", "강화캠퍼스"];

    return (
        <div className="contact-page">
    <div className="contact-header">
      <ContactInfoHeader />
       <ContactInfoCategory
        categories={categories}
        onSelectCategory={handleSelectCategory}
        selectedCategory={selectedCategory}
      />
    </div>

    <div className="contact-body">
     <ContactInfoList category={selectedCategory} />
    </div>
  </div>
    );
};

export default ContactInfo;
