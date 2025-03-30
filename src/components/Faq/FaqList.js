import React, { useState } from "react";
import "../../styles/Faq/FaqList.css";
import faqData from "../../db/Faq/data.json";

const FaqList = () => {
    const [openItems, setOpenItems] = useState([]);

    const toggleAnswer = (index) => {
        if (openItems.includes(index)) {
            setOpenItems(openItems.filter((item) => item !== index));
        } else {
            setOpenItems([...openItems, index]);
        }
    };

    return (
        <div className="faqlist-container">
            {faqData.map((item, index) => (
                <div key={index} onClick={() => toggleAnswer(index)}>
                    <div className="faq-question">
                        <div className="faqlist-q">Q</div>
                        <div className="faqlist-qDetail">{item.title}</div>
                    </div>
                    <hr className="faqlist-hr" />
                    {openItems.includes(index) && (
                        <div className="faq-answer">
                            <div className="faqlist-a">A</div>
                            <div className="faqlist-aDetail">{item.body}</div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default FaqList;
