import React from "react";
import { Link } from "react-router-dom";
import "../../styles/ContactInfo/ContactInfoHeader.css";

const ContactInfoHeader = () => {
    return (
        <header className="contactInfo-header">
            <Link to="/"></Link>
            <h1>교내 연락처</h1>
            <div></div>
        </header>
    );
};

export default ContactInfoHeader;
