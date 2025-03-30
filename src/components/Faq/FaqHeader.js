import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Faq/FaqHeader.css";

const FaqHeader = () => {
    return (
        <header className="faq-header">
            <Link to="/"></Link>
            <h1>FAQ</h1>
            <div></div>
        </header>
    );
};

export default FaqHeader;
