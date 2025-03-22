import React from "react";
import FaqHeader from "../components/Faq/FaqHeader";
import FaqNav from "../components/Faq/FaqNav";
import FaqList from "../components/Faq/FaqList";

const Faq = () => {
    return (
        <div>
            <FaqHeader />
            <FaqNav />
            <FaqList />
        </div>
    );
};

export default Faq;
