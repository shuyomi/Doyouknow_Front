import React from "react";
import ContactInfoAnyang from "./ContactInfoAnyang";
import ContactInfoGanghwa from "./ContactInfoGanghwa";

const ContactInfoList = ({ category }) => {
    return (
        <div style={{ marginLeft: "10px", marginRight: "10px" }}>
            <br />
            {category === "안양캠퍼스" && <ContactInfoAnyang />}
            {category === "강화캠퍼스" && <ContactInfoGanghwa />}
        </div>
    );
};

export default ContactInfoList;
